export default function TrustSection() {
    return (
        <section className="trust-section" id="trustSection">
            <div className="trust-intro">
                <div>
                    <div className="section-label">Our Commitment</div>
                    <h2 className="trust-tagline">
                        More than landscaping —<br />
                        <em>a living legacy</em>
                    </h2>
                </div>
                <p className="trust-body">
                    For over three decades, JSM Landscaping has transformed outdoor spaces across the GTA
                    into curated environments that reflect the character of each home. Every project is a
                    singular creation — designed with precision, built with care.
                </p>
            </div>
            <div className="trust-stats">
                <div className="stat-item">
                    <div className="stat-number">
                        <span className="counter" data-target="25">0</span>
                        <span className="plus">+</span>
                    </div>
                    <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">
                        <span className="counter" data-target="500">0</span>
                        <span className="plus">+</span>
                    </div>
                    <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">
                        <span className="counter" data-target="6">0</span>
                    </div>
                    <div className="stat-label">Cities Served</div>
                </div>
            </div>
        </section>
    )
}
