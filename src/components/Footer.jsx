export default function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                <div>
                    <div className="footer-logo">
                        <img
                            src="https://www.jsmlandscaping.com/wp-content/uploads/2021/02/Official-JSM-Logo.png"
                            alt="JSM Landscaping"
                        />
                    </div>
                    <p className="footer-tagline">
                        Proudly crafting exceptional outdoor environments across Mississauga, Oakville,
                        Burlington, Milton, Brampton &amp; Etobicoke since 1993.
                    </p>
                </div>
                <div>
                    <div className="footer-col-title">Services</div>
                    <ul className="footer-links">
                        <li><a href="#">Front Yard</a></li>
                        <li><a href="#">Backyard</a></li>
                        <li><a href="#">Pool &amp; Spa</a></li>
                        <li><a href="#">Custom Installations</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-col-title">Company</div>
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Journal</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-col-title">Contact</div>
                    <ul className="footer-links">
                        <li><a href="tel:4162203749">416.220.3749</a></li>
                        <li><a href="mailto:info@jsmlandscaping.com">info@jsmlandscaping.com</a></li>
                    </ul>
                    <div style={{ marginTop: '32px' }}>
                        <div className="footer-col-title">Follow</div>
                        <ul className="footer-links">
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; 2026 JSM Landscaping. All rights reserved.</span>
                <div className="footer-social">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </footer>
    )
}
