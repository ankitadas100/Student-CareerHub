import React from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
    return (
        <div className="student-dashboard-page">

            <section className="dashboard-header">

                <p className="dashboard-label">
                    STUDENT DASHBOARD
                </p>

                <h1 className="dashboard-title">
                    Welcome Back, Ankita!
                </h1>

                <p className="dashboard-description">
                    Discover opportunities, manage your career profile,
                    and keep moving toward your goals.
                </p>

            </section>


            <main className="dashboard-content">

                <section className="dashboard-stats">

                    <div className="dashboard-stat-card">

                        <p className="dashboard-stat-number">
                            3
                        </p>

                        <p className="dashboard-stat-title">
                            Applications
                        </p>

                    </div>


                    <div className="dashboard-stat-card">

                        <p className="dashboard-stat-number">
                            5
                        </p>

                        <p className="dashboard-stat-title">
                            Saved Opportunities
                        </p>

                    </div>


                    <div className="dashboard-stat-card">

                        <p className="dashboard-stat-number">
                            8
                        </p>

                        <p className="dashboard-stat-title">
                            Profile Views
                        </p>

                    </div>

                </section>


                <section className="dashboard-section">

                    <h2 className="dashboard-section-title">
                        Recommended Opportunities
                    </h2>

                    <div className="dashboard-opportunities">

                        <div className="dashboard-opportunity-card">

                            <p className="dashboard-opportunity-type">
                                INTERNSHIP
                            </p>

                            <h3 className="dashboard-opportunity-title">
                                Frontend Developer Intern
                            </h3>

                            <p className="dashboard-opportunity-company">
                                ABC Technologies
                            </p>

                            <p className="dashboard-opportunity-location">
                                Kolkata · Remote
                            </p>

                        </div>


                        <div className="dashboard-opportunity-card">

                            <p className="dashboard-opportunity-type">
                                INTERNSHIP
                            </p>

                            <h3 className="dashboard-opportunity-title">
                                UI/UX Design Intern
                            </h3>

                            <p className="dashboard-opportunity-company">
                                Design Studio
                            </p>

                            <p className="dashboard-opportunity-location">
                                Remote
                            </p>

                        </div>

                    </div>

                </section>


                <section className="dashboard-section">

                    <h2 className="dashboard-section-title">
                        Quick Actions
                    </h2>

                    <div className="dashboard-actions">

                        <button className="dashboard-action-button">
                            MY PROFILE
                        </button>

                        <button className="dashboard-action-button">
                            MY APPLICATIONS
                        </button>

                        <button className="dashboard-action-button">
                            SAVED OPPORTUNITIES
                        </button>

                        <button className="dashboard-action-button">
                            CAREER GUIDE
                        </button>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default StudentDashboard;