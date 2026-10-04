import React from "react";
import "./Opportunities.css";
import { Link } from "react-router-dom";

function Opportunities() {
    return (
        <div className="opportunities-page">

            <section className="opportunities-header">

                <p className="opportunities-label">
                    CAREER OPPORTUNITIES
                </p>

                <h1 className="opportunities-title">
                    Find Your Opportunity
                </h1>

                <p className="opportunities-description">
                    Explore internships and jobs that can help you
                    take the next step in your career.
                </p>

            </section>


            <section className="opportunities-search">

                <div className="search-box">

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search jobs, internships or skills"
                    />

                    <select className="search-select">
                        <option value="">All Types</option>
                        <option value="internship">Internship</option>
                        <option value="full-time">Full Time</option>
                    </select>

                    <select className="search-select">
                        <option value="">All Locations</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="remote">Remote</option>
                    </select>

                    <button className="search-button">
                        SEARCH
                    </button>

                </div>

            </section>


            <section className="opportunities-list">


                {/* Frontend Developer */}

                <div className="opportunity-card">

                    <p className="opportunity-type">
                        INTERNSHIP
                    </p>

                    <h2 className="opportunity-title">
                        Frontend Developer Intern
                    </h2>

                    <p className="opportunity-company">
                        ABC Technologies
                    </p>

                    <p className="opportunity-location">
                        Kolkata · Remote
                    </p>

                    <div className="opportunity-skills">

                        <span className="skill-tag">
                            React
                        </span>

                        <span className="skill-tag">
                            JavaScript
                        </span>

                        <span className="skill-tag">
                            HTML
                        </span>

                        <span className="skill-tag">
                            CSS
                        </span>

                    </div>

                    <Link
                        to="/opportunity-details/frontend"
                        className="details-button"
                    >
                        VIEW DETAILS →
                    </Link>

                </div>


                {/* Software Trainee */}

                <div className="opportunity-card">

                    <p className="opportunity-type">
                        FULL TIME
                    </p>

                    <h2 className="opportunity-title">
                        Software Trainee
                    </h2>

                    <p className="opportunity-company">
                        XYZ Solutions
                    </p>

                    <p className="opportunity-location">
                        Kolkata · Full Time
                    </p>

                    <div className="opportunity-skills">

                        <span className="skill-tag">
                            JavaScript
                        </span>

                        <span className="skill-tag">
                            Git
                        </span>

                        <span className="skill-tag">
                            SQL
                        </span>

                    </div>

                    <Link
                        to="/opportunity-details/software"
                        className="details-button"
                    >
                        VIEW DETAILS →
                    </Link>

                </div>


                {/* UI/UX Design */}

                <div className="opportunity-card">

                    <p className="opportunity-type">
                        INTERNSHIP
                    </p>

                    <h2 className="opportunity-title">
                        UI/UX Design Intern
                    </h2>

                    <p className="opportunity-company">
                        Design Studio
                    </p>

                    <p className="opportunity-location">
                        Remote · Internship
                    </p>

                    <div className="opportunity-skills">

                        <span className="skill-tag">
                            Figma
                        </span>

                        <span className="skill-tag">
                            UI Design
                        </span>

                        <span className="skill-tag">
                            Prototyping
                        </span>

                    </div>

                    <Link
                        to="/opportunity-details/uiux"
                        className="details-button"
                    >
                        VIEW DETAILS →
                    </Link>

                </div>


            </section>

        </div>
    );
}

export default Opportunities;