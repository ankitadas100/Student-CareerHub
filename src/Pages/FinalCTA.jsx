import React from "react";
import "./FinalCTA.css";

function FinalCTA() {
    return (
        <section className="final-cta">

            <p className="cta-label">
                YOUR NEXT STEP STARTS HERE
            </p>

            <h2>
                Ready to Start Your<br />
                Career Journey?
            </h2>

            <p className="cta-text">
                Create your profile, discover opportunities,
                and take the next step toward your career.
            </p>

            <div className="cta-buttons">
                <button className="cta-primary">
                    CREATE YOUR PROFILE →
                </button>

                <button className="cta-secondary">
                    EXPLORE OPPORTUNITIES
                </button>
            </div>

        </section>
    );
}

export default FinalCTA;