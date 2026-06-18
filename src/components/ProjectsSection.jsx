import chartwellImg from '../img/Chartwell-Website-11.jpg'
import birchwoodImg from '../img/Birchwood-Website-12.jpg'
import gambleImg from '../img/Gamble-Website-17.jpg'
import parkmountImg from '../img/Parkmount-Website-27.jpg'
import meadowridgeImg from '../img/2402-Meadowridge-Dr-09-2048x1365.jpg'
import hertfordshireImg from '../img/Hertfordshire-Website-03.jpg'

const tiles = [
    {
        cls: 'pt1',
        src: chartwellImg,
        alt: 'Chartwell Project',
        name: 'Chartwell Estate',
        type: 'Full Yard Transformation',
    },
    {
        cls: 'pt2',
        src: birchwoodImg,
        alt: 'Birchwood Project',
        name: 'Birchwood',
        type: 'Backyard Retreat',
    },
    {
        cls: 'pt3',
        src: gambleImg,
        alt: 'Gamble Project',
        name: 'Gamble Residence',
        type: 'Pool & Spa Surround',
    },
    {
        cls: 'pt4',
        src: parkmountImg,
        alt: 'Parkmount Project',
        name: 'Parkmount',
        type: 'Interlocking & Garden',
    },
    {
        cls: 'pt5',
        src: meadowridgeImg,
        alt: 'Meadowridge Project',
        name: 'Meadowridge Drive',
        type: 'Front Yard Design',
    },
    {
        cls: 'pt6',
        src: hertfordshireImg,
        alt: 'Hertfordshire Project',
        name: 'Hertfordshire',
        type: 'Outdoor Living Space',
    },
]

export default function ProjectsSection() {
    return (
        <section className="projects-section" id="projectsSection">
            <div className="projects-header">
                <div>
                    <div className="section-label">Our Work</div>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>
                        Curated<br /><em>portfolio</em>
                    </h2>
                </div>
                <a href="#" className="view-all-link">
                    View All Projects
                </a>
            </div>

            <div className="projects-mosaic">
                {tiles.map(t => (
                    <div className={`project-tile ${t.cls}`} key={t.cls}>
                        <img src={t.src} alt={t.alt} loading="lazy" />
                        <div className="project-tile-info">
                            <div className="project-tile-name">{t.name}</div>
                            <div className="project-tile-type">{t.type}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
