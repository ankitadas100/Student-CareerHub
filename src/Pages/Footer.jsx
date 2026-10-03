import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h2>✦ CareerSpring</h2>
                    <p>
                        Start your career with confidence.
                        Discover opportunities and build your future.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>For Students</h3>
                    <p>Find Jobs</p>
                    <p>Internships</p>
                    <p>Career Resources</p>
                </div>

                <div className="footer-column">
                    <h3>Resources</h3>
                    <p>Career Guide</p>
                    <p>Resume Help</p>
                    <p>Interview Preparation</p>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Help</p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 CareerSpring. All rights reserved.</p>

                <div>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;