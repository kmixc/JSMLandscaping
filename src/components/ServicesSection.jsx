const services = [
    {
        number: '01',
        name: 'Front Yard Landscaping',
        desc: 'Stunning driveways, retaining walls, steps, porches, and gardens that make an unforgettable first impression.',
        href: 'https://www.jsmlandscaping.com/front-yard-landscaping/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <path d="M6 40 L24 8 L42 40 M16 40 L24 26 L32 40" />
            </svg>
        ),
    },
    {
        number: '02',
        name: 'Backyard Landscaping',
        desc: 'Patios, cabanas, pergolas, outdoor kitchens, fireplaces, waterfalls — your private paradise awaits.',
        href: 'https://www.jsmlandscaping.com/backyard-landscaping/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <rect x="6" y="20" width="36" height="20" rx="1" /><path d="M12 20 V12 Q24 4 36 12 V20" />
            </svg>
        ),
    },
    {
        number: '03',
        name: 'Pool & Spa Landscaping',
        desc: 'Transform your pool surround into a resort-grade oasis with bespoke hardscape and water features.',
        href: 'https://www.jsmlandscaping.com/pool-and-spa-landscaping/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <ellipse cx="24" cy="30" rx="18" ry="10" /><path d="M12 30 Q12 16 24 14 Q36 16 36 30" />
            </svg>
        ),
    },
    {
        number: '04',
        name: 'Interlocking & Hardscape',
        desc: 'Expert installation of all paver types, flagstone, and natural stone — precision craftsmanship built to endure.',
        href: 'https://www.jsmlandscaping.com/services/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <rect x="8" y="8" width="14" height="14" /><rect x="26" y="8" width="14" height="14" />
                <rect x="8" y="26" width="14" height="14" /><rect x="26" y="26" width="14" height="14" />
            </svg>
        ),
    },
    {
        number: '05',
        name: 'Garden Design',
        desc: 'Curated plantings, seasonal colour, and softscape artistry that breathes life into every landscape.',
        href: 'https://www.jsmlandscaping.com/services/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <path d="M24 6 C16 14 8 22 8 30 C8 38 15.2 44 24 44 C32.8 44 40 38 40 30 C40 22 32 14 24 6Z" />
            </svg>
        ),
    },
    {
        number: '06',
        name: 'Property Maintenance',
        desc: 'Year-round care programs that keep your landscape immaculate through every season.',
        href: 'https://www.jsmlandscaping.com/services/',
        icon: (
            <svg className="service-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" color="#2d9e55">
                <circle cx="24" cy="24" r="16" /><path d="M24 8 V16 M24 32 V40 M8 24 H16 M32 24 H40" />
            </svg>
        ),
    },
]

export default function ServicesSection() {
    return (
        <section className="services-section" id="servicesSection">
            <div className="section-label">What We Craft</div>
            <h2 className="section-title">
                Outdoor spaces<br />
                <em>elevated</em> to their fullest
            </h2>
            <div className="services-grid">
                {services.map(s => (
                    <div className="service-card" key={s.number}>
                        <span className="service-number">{s.number}</span>
                        {s.icon}
                        <h3 className="service-name">{s.name}</h3>
                        <p className="service-desc">{s.desc}</p>
                        <a href={s.href} className="service-link">Explore</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
