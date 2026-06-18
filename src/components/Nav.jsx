import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const NAV_ITEMS = [
    { href: 'https://www.jsmlandscaping.com/', label: 'Home' },
    { href: 'https://www.jsmlandscaping.com/about-us/', label: 'About Us' },
    { href: 'https://www.jsmlandscaping.com/portfolio/', label: 'Portfolio' },
    { href: 'https://www.jsmlandscaping.com/services/', label: 'Services' },
    { href: 'https://www.jsmlandscaping.com/blog/', label: 'Journal' },
    { href: 'https://www.jsmlandscaping.com/contact-us/', label: 'Contact' },
]

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const overlayRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const openMenu = () => {
        const overlay = overlayRef.current
        const items = overlay.querySelectorAll('.menu-nav-item')
        const footer = overlay.querySelector('.menu-overlay-footer')
        overlay.classList.add('open')
        setMenuOpen(true)
        document.body.style.overflow = 'hidden'
        gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.15 })
        gsap.to(footer, { opacity: 1, duration: 0.6, delay: 0.5 })
    }

    const closeMenu = (e) => {
        if (e) e.stopPropagation()
        console.log('Close menu clicked')
        const overlay = overlayRef.current
        if (!overlay) {
            console.log('No overlay ref')
            return
        }

        const items = overlay.querySelectorAll('.menu-nav-item')
        const footer = overlay.querySelector('.menu-overlay-footer')

        gsap.killTweensOf([...items, footer])
        gsap.to([...items, footer], {
            opacity: 0,
            y: 24,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.in',
            onComplete: () => {
                overlay.classList.remove('open')
                setMenuOpen(false)
                document.body.style.overflow = ''
            },
        })
    }

    const handleNavItemClick = (e, href) => {
        e.preventDefault()
        closeMenu()
        setTimeout(() => { window.location.href = href }, 400)
    }

    return (
        <>
            {/* MENU OVERLAY */}
            <div className="menu-overlay" id="menuOverlay" ref={overlayRef}>
                <button
                    type="button"
                    className="menu-overlay-close"
                    onClick={(e) => closeMenu(e)}
                    aria-label="Close menu"
                >
                    &#x2715;
                </button>
                {NAV_ITEMS.map(item => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="menu-nav-item"
                        onClick={(e) => handleNavItemClick(e, item.href)}
                    >
                        {item.label}
                    </a>
                ))}
                <div className="menu-overlay-footer">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="tel:4162203749">416.220.3749</a>
                    <a href="mailto:info@jsmlandscaping.com">info@jsmlandscaping.com</a>
                </div>
            </div>

            {/* NAVIGATION */}
            <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
                <a href="#" className="nav-logo" aria-label="JSM Landscaping">
                    <img
                        src="https://www.jsmlandscaping.com/wp-content/uploads/2021/02/Official-JSM-Logo.png"
                        alt="JSM Landscaping"
                    />
                </a>

                <button
                    type="button"
                    className="hamburger"
                    onClick={openMenu}
                    aria-label="Open menu"
                    style={{ display: menuOpen ? 'none' : 'flex' }}
                >
                    <span></span><span></span><span></span>
                </button>
            </nav>
        </>
    )
}
