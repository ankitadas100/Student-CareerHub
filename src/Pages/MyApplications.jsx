import React from "react";
import { Link } from "react-router-dom";
import "./MyApplications.css";

function MyApplications() {
    return (
        <div className="applications-page">

            <section className="applications-header">
                <p className="applications-label">STUDENT PORTAL</p>

                <h1 className="applications-title">
                    My Applications
                </h1>

                <p className="applications-description">
                    Track the opportunities you have applied for and
                    stay updated on your application progress.
                </p>
            </section>

            <section className="applications-content">

                <div className="application-card">
                    <div className="application-info">
                        <p className="application-type">
                            INTERNSHIP
                        </p>

                        <h2 className="application-title">
                            Frontend Developer Intern
                        </h2>

                        <p className="application-company">
                            ABC Technologies
                        </p>

                        <p className="application-location">
                            Kolkata · Remote
                        </p>

                        <p className="application-date">
                            Applied on: 28 September 2026
                        </p>
                    </div>

                    <div className="application-status-box">
                        <span className="application-status">
                            Under Review
                        </span>

                        <Link
                            to="/opportunity-details/frontend"
                            className="application-button"
                        >
                            VIEW DETAILS →
                        </Link>
                    </div>
                </div>

                <div className="application-card">
                    <div className="application-info">
                        <p className="application-type">
                            FULL TIME
                        </p>

                        <h2 className="application-title">
                            Software Trainee
                        </h2>

                        <p className="application-company">
                            XYZ Solutions
                        </p>

                        <p className="application-location">
                            Kolkata
                        </p>

                        <p className="application-date">
                            Applied on: 25 September 2026
                        </p>
                    </div>

                    <div className="application-status-box">
                        <span className="application-status">
                            Application Sent
                        </span>

                        <Link
                            to="/opportunity-details/software"
                            className="application-button"
                        >
                            VIEW DETAILS →
                        </Link>
                    </div>
                </div>

                <div className="application-card">
                    <div className="application-info">
                        <p className="application-type">
                            INTERNSHIP
                        </p>

                        <h2 className="application-title">
                            UI/UX Design Intern
                        </h2>

                        <p className="application-company">
                            Design Studio
                        </p>

                        <p className="application-location">
                            Remote
                        </p>

                        <p className="application-date">
                            Applied on: 20 September 2026
                        </p>
                    </div>

                    <div className="application-status-box">
                        <span className="application-status">
                            Shortlisted
                        </span>

                        <Link
                            to="/opportunity-details/uiux"
                            className="application-button"
                        >
                            VIEW DETAILS →
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default MyApplications;