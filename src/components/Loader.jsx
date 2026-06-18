import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Loader({ onComplete }) {
    useEffect(() => {
        const fill = document.getElementById('loaderFill')
        const loader = document.getElementById('pageLoader')

        const t1 = setTimeout(() => {
            if (fill) fill.style.width = '100%'
        }, 100)

        const t2 = setTimeout(() => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    if (loader) loader.style.display = 'none'
                    onComplete?.()
                },
            })
        }, 1400)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
        }
    }, [onComplete])

    return (
        <div className="page-loader" id="pageLoader">
            <div className="loader-logo">
                <img
                    src="https://www.jsmlandscaping.com/wp-content/uploads/2021/02/Official-JSM-Logo.png"
                    alt="JSM Landscaping"
                />
            </div>
            <div className="loader-bar">
                <div className="loader-bar-fill" id="loaderFill"></div>
            </div>
            <span className="loader-text">Crafting your experience</span>
        </div>
    )
}
