import React from "react";
import { Link } from "react-router-dom";
import "./SavedOpportunities.css";

function SavedOpportunities() {
    return (
        <div className="saved-page">

            <section className="saved-header">
                <p className="saved-label">STUDENT PORTAL</p>

                <h1 className="saved-title">
                    Saved Opportunities
                </h1>

                <p className="saved-description">
                    Keep track of opportunities you want to explore later.
                </p>
            </section>

            <section className="saved-content">

                <div className="saved-card">
                    <div className="saved-info">
                        <p className="saved-type">INTERNSHIP</p>

                        <h2 className="saved-job-title">
                            Frontend Developer Intern
                        </h2>

                        <p className="saved-company">
                            ABC Technologies
                        </p>

                        <p className="saved-location">
                            Kolkata · Remote
                        </p>

                        <div className="saved-skills">
                            <span className="saved-skill">React</span>
                            <span className="saved-skill">JavaScript</span>
                            <span className="saved-skill">HTML</span>
                            <span className="saved-skill">CSS</span>
                        </div>
                    </div>

                    <div className="saved-actions">
                        <Link
                            to="/opportunity-details/frontend"
                            className="saved-view-button"
                        >
                            VIEW DETAILS →
                        </Link>

                        <button className="saved-remove-button">
                            REMOVE
                        </button>
                    </div>
                </div>

                <div className="saved-card">
                    <div className="saved-info">
                        <p className="saved-type">FULL TIME</p>

                        <h2 className="saved-job-title">
                            Software Trainee
                        </h2>

                        <p className="saved-company">
                            XYZ Solutions
                        </p>

                        <p className="saved-location">
                            Kolkata
                        </p>

                        <div className="saved-skills">
                            <span className="saved-skill">JavaScript</span>
                            <span className="saved-skill">Git</span>
                            <span className="saved-skill">SQL</span>
                        </div>
                    </div>

                    <div className="saved-actions">
                        <Link
                            to="/opportunity-details/software"
                            className="saved-view-button"
                        >
                            VIEW DETAILS →
                        </Link>

                        <button className="saved-remove-button">
                            REMOVE
                        </button>
                    </div>
                </div>

                <div className="saved-card">
                    <div className="saved-info">
                        <p className="saved-type">INTERNSHIP</p>

                        <h2 className="saved-job-title">
                            UI/UX Design Intern
                        </h2>

                        <p className="saved-company">
                            Design Studio
                        </p>

                        <p className="saved-location">
                            Remote
                        </p>

                        <div className="saved-skills">
                            <span className="saved-skill">Figma</span>
                            <span className="saved-skill">UI Design</span>
                            <span className="saved-skill">Prototyping</span>
                        </div>
                    </div>

                    <div className="saved-actions">
                        <Link
                            to="/opportunity-details/uiux"
                            className="saved-view-button"
                        >
                            VIEW DETAILS →
                        </Link>

                        <button className="saved-remove-button">
                            REMOVE
                        </button>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default SavedOpportunities;