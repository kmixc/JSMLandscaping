const steps = [
    {
        number: 'Step 01',
        title: 'Consult',
        desc: 'We listen deeply to understand your vision, lifestyle, and goals. Through an unhurried conversation, we explore ideas together until a clear direction emerges — then provide a comprehensive free quote.',
    },
    {
        number: 'Step 02',
        title: 'Design',
        desc: 'Your vision takes form. Our designers produce detailed drawings and 3D concepts so you can see exactly what your space will become before a single stone is laid. Adjustments are welcome — this is your project.',
    },
    {
        number: 'Step 03',
        title: 'Plan',
        desc: 'Materials are selected, timelines are established, and every logistical detail is confirmed. We plan for excellence so your build phase proceeds smoothly, on schedule, and on budget.',
    },
    {
        number: 'Step 04',
        title: 'Build',
        desc: 'Our master craftsmen transform your space with unmatched expertise in paver installation, masonry, woodworking, and stonework. We keep you informed throughout and hold ourselves to the highest standards.',
    },
    {
        number: 'Step 05',
        title: 'Complete',
        desc: "The final walk-through is yours to savour. We review every detail together, address any refinements, and hand you a landscape you'll treasure for decades. Your satisfaction is the only outcome we accept.",
    },
]

export default function ProcessSection() {
    return (
        <section className="process-section" id="processSection">
            <div className="process-layout">
                <div className="process-sticky">
                    <div className="section-label">How We Work</div>
                    <h2 className="section-title">
                        A process<br />
                        built on <em>trust</em>
                    </h2>
                    <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--light-grey)', maxWidth: '340px' }}>
                        From the first conversation to the final reveal, we guide you through every step
                        with transparency, craftsmanship, and care.
                    </p>
                </div>
                <div className="process-steps">
                    {steps.map((step, i) => (
                        <div
                            className={`process-step${i === 0 ? ' active' : ''}`}
                            data-step={i}
                            key={step.number}
                        >
                            <span className="step-number">{step.number}</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
