import { useEffect, useRef } from 'react'

export default function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)

    useEffect(() => {
        let mx = 0, my = 0, rx = 0, ry = 0
        let animId

        const onMove = (e) => {
            mx = e.clientX
            my = e.clientY
        }

        const tick = () => {
            rx += (mx - rx) * 0.12
            ry += (my - ry) * 0.12
            if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px)`
            if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
            animId = requestAnimationFrame(tick)
        }

        const onOver = (e) => {
            if (e.target.closest('a, button, .service-card, .project-tile')) {
                ringRef.current?.classList.add('hover')
            }
        }
        const onOut = (e) => {
            if (e.target.closest('a, button, .service-card, .project-tile')) {
                ringRef.current?.classList.remove('hover')
            }
        }

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)
        animId = requestAnimationFrame(tick)

        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseover', onOver)
            document.removeEventListener('mouseout', onOut)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        <>
            <div className="cursor" ref={dotRef}>
                <div className="cursor-dot"></div>
            </div>
            <div className="cursor-ring" ref={ringRef}></div>
        </>
    )
}
