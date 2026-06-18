import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const testimonials = [
    {
        text: "JSM completely transformed our backyard into something we never thought was possible. The attention to detail and quality of craftsmanship is truly extraordinary — we feel like we're living in a resort every single day.",
        author: 'Michael & Sarah T.',
        location: 'Oakville, Ontario',
    },
    {
        text: 'From the very first consultation to the final walkthrough, the JSM team was professional, punctual, and passionate about their work. Our front yard is now the envy of the entire neighbourhood.',
        author: 'Jennifer & David R.',
        location: 'Burlington, Ontario',
    },
    {
        text: "They turned a blank canvas into an absolute masterpiece. The pool surround and cabana area exceeded every expectation we had. JSM's craftsmanship is unmatched in the GTA.",
        author: 'Robert K.',
        location: 'Mississauga, Ontario',
    },
    {
        text: 'Over 25 years of experience shows in every single detail. Our interlocking driveway and backyard patio were completed on time and on budget. Exceptional work — we couldn\'t be happier.',
        author: 'Amanda & Paul L.',
        location: 'Milton, Ontario',
    },
]

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0)
    const currentRef = useRef(0)

    const goTo = (idx) => {
        currentRef.current = idx
        gsap.to('#testimonialSlider', {
            opacity: 0, y: 16, duration: 0.4, ease: 'power2.in',
            onComplete: () => {
                setCurrent(idx)
                gsap.to('#testimonialSlider', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
            },
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            goTo((currentRef.current + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const t = testimonials[current]

    return (
        <section className="testimonials-section" id="testimonialsSection">
            <div className="testimonials-inner">
                <span className="testimonial-quote-mark">&ldquo;</span>
                <div id="testimonialSlider">
                    <p className="testimonial-text">{t.text}</p>
                    <div className="testimonial-author">{t.author}</div>
                    <div className="testimonial-location">{t.location}</div>
                </div>
                <div className="testimonial-controls">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            className={`t-dot${i === current ? ' active' : ''}`}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
