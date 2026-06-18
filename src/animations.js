import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimations() {
    gsap.set('#heroHeadline', { y: 60 })
    gsap.set('#heroSocial', { opacity: 0 })
    gsap.set('#heroScroll', { opacity: 0 })
    gsap.set('#glassPanel', { x: 60 })

    gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to('#heroHeadline', { opacity: 1, y: 0, duration: 1.2, delay: 0.3 })
        .to('#glassPanel', { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' }, '-=0.8')
        .to('#heroScroll', { opacity: 1, duration: 0.8 }, '-=0.6')
        .to('#heroSocial', { opacity: 1, duration: 0.8 }, '-=0.7')
}

export function initScrollAnimations() {
    // Trust counters
    ScrollTrigger.create({
        trigger: '#trustSection',
        start: 'top 70%',
        once: true,
        onEnter: () => {
            gsap.from('.trust-intro > *', {
                opacity: 0, y: 50, duration: 0.9, stagger: 0.15, ease: 'power3.out', overwrite: true,
            })
            gsap.from('.stat-item', {
                opacity: 0, y: 40, duration: 0.8, stagger: 0.12, delay: 0.3, ease: 'power3.out', overwrite: true,
            })
            document.querySelectorAll('.counter').forEach(el => {
                const target = parseInt(el.dataset.target)
                const obj = { val: 0 }
                gsap.to(obj, {
                    val: target, duration: 2.2, ease: 'power2.out', delay: 0.6,
                    onUpdate: () => { el.textContent = Math.round(obj.val) },
                })
            })
        },
    })

    // Services
    ScrollTrigger.create({
        trigger: '#servicesSection',
        start: 'top 75%',
        once: true,
        onEnter: () => {
            gsap.from('#servicesSection .section-label, #servicesSection .section-title', {
                opacity: 0, y: 40, duration: 0.9, stagger: 0.1, ease: 'power3.out', overwrite: true,
            })
            gsap.from('.service-card', {
                opacity: 0, y: 60, duration: 0.9, stagger: 0.1, delay: 0.2, ease: 'power3.out', overwrite: true,
            })
        },
    })

    // Project tile clip reveals
    document.querySelectorAll('.project-tile').forEach((tile, i) => {
        gsap.fromTo(tile,
            { clipPath: 'inset(0 0 100% 0)' },
            {
                clipPath: 'inset(0 0 0% 0)',
                scrollTrigger: { trigger: tile, start: 'top 85%', once: true },
                duration: 1.1,
                delay: i * 0.05,
                ease: 'power3.out',
            }
        )
    })

    // Process steps
    const processSteps = document.querySelectorAll('.process-step')
    processSteps.forEach((step, i) => {
        ScrollTrigger.create({
            trigger: step,
            start: 'top 55%',
            end: 'bottom 40%',
            onEnter: () => {
                processSteps.forEach(s => s.classList.remove('active'))
                step.classList.add('active')
            },
            onLeaveBack: () => {
                processSteps.forEach(s => s.classList.remove('active'))
                if (i > 0) processSteps[i - 1].classList.add('active')
            },
        })
        gsap.from(step, {
            scrollTrigger: { trigger: step, start: 'top 80%', once: true },
            opacity: 0, x: 40, duration: 0.8, ease: 'power3.out',
            clearProps: 'opacity',
        })
    })

    ScrollTrigger.create({
        trigger: '#processSection',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.from('.process-sticky > *', {
                opacity: 0, y: 40, duration: 0.9, stagger: 0.12, ease: 'power3.out', overwrite: true,
            })
        },
    })

    // Testimonials
    ScrollTrigger.create({
        trigger: '#testimonialsSection',
        start: 'top 75%',
        once: true,
        onEnter: () => {
            gsap.from('.testimonial-quote-mark, #testimonialSlider', {
                opacity: 0, y: 40, duration: 1, stagger: 0.2, ease: 'power3.out', overwrite: true,
            })
        },
    })

    // CTA
    ScrollTrigger.create({
        trigger: '#ctaSection',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.from('.cta-eyebrow, .cta-headline, .cta-actions', {
                opacity: 0, y: 50, duration: 1, stagger: 0.15, ease: 'power3.out', overwrite: true,
            })
        },
    })

    // Hero video parallax
    gsap.fromTo('.hero-video-wrap',
        { y: '0%' },
        {
            scrollTrigger: { trigger: '.hero', scrub: true, start: 'top top', end: 'bottom top' },
            y: '20%',
            ease: 'none',
        }
    )
}
