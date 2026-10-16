
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard() {
    const [applications, setApplications] = useState([]);
    const [savedCount, setSavedCount] = useState(0);

    const [profileViews, setProfileViews] = useState(() => {
        try {
            const views = Number(localStorage.getItem("profileViews") || "0");
            return Number.isFinite(views) && views >= 0 ? views : 0;
        } catch {
            return 0;
        }
    });

    // Load dashboard data
    useEffect(() => {
        const loadDashboardData = () => {
            try {
                const storedApplications = JSON.parse(
                    localStorage.getItem("applications") || "[]"
                );

                const storedSaved = JSON.parse(
                    localStorage.getItem("savedOpportunities") || "[]"
                );

                const storedViews = Number(
                    localStorage.getItem("profileViews") || "0"
                );

                setApplications(
                    Array.isArray(storedApplications)
                        ? storedApplications
                        : []
                );

                setSavedCount(
                    Array.isArray(storedSaved)
                        ? new Set(
                              storedSaved.map((item) =>
                                  typeof item === "string"
                                      ? item
                                      : item.id
                              )
                          ).size
                        : 0
                );

                setProfileViews(
                    Number.isFinite(storedViews) && storedViews >= 0
                        ? storedViews
                        : 0
                );
            } catch (error) {
                console.error("Unable to load dashboard data:", error);
                setApplications([]);
                setSavedCount(0);
                setProfileViews(0);
            }
        };

        loadDashboardData();

        window.addEventListener("focus", loadDashboardData);
        window.addEventListener("storage", loadDashboardData);

        return () => {
            window.removeEventListener("focus", loadDashboardData);
            window.removeEventListener("storage", loadDashboardData);
        };
    }, []);

    // Calculate application status counts
    const statusCounts = useMemo(() => {
        const counts = {
            sent: 0,
            review: 0,
            shortlisted: 0,
            interview: 0,
            rejected: 0,
        };

        applications.forEach((application) => {
            const status = (
                application.status || "Application Sent"
            ).toLowerCase();

            if (status === "application sent") {
                counts.sent++;
            } else if (status === "under review") {
                counts.review++;
            } else if (status === "shortlisted") {
                counts.shortlisted++;
            } else if (status === "interview scheduled") {
                counts.interview++;
            } else if (status === "rejected") {
                counts.rejected++;
            }
        });

        return counts;
    }, [applications]);

    return (
        <div className="student-dashboard-page">
            <section className="dashboard-header">
                <p className="dashboard-label">STUDENT DASHBOARD</p>

                <h1 className="dashboard-title">
                    Welcome Back, Ankita!
                </h1>

                <p className="dashboard-description">
                    Discover opportunities, manage your career profile,
                    and keep moving toward your goals.
                </p>
            </section>

            <main className="dashboard-content">
                {/* Main dashboard statistics */}
                <section className="dashboard-stats">
                    <div className="dashboard-stat-card">
                        <p className="dashboard-stat-number">
                            {applications.length}
                        </p>
                        <p className="dashboard-stat-title">
                            Applications
                        </p>
                    </div>

                    <div className="dashboard-stat-card">
                        <p className="dashboard-stat-number">
                            {savedCount}
                        </p>
                        <p className="dashboard-stat-title">
                            Saved Opportunities
                        </p>
                    </div>

                    <div className="dashboard-stat-card">
                        <p className="dashboard-stat-number">
                            {profileViews}
                        </p>
                        <p className="dashboard-stat-title">
                            Profile Views
                        </p>
                    </div>
                </section>

                {/* Application status overview */}
                <section className="dashboard-section">
                    <h2 className="dashboard-section-title">
                        Application Status Overview
                    </h2>

                    <p className="dashboard-description">
                        Track the progress of your submitted applications.
                    </p>

                    <div className="dashboard-status-grid">
                        <div className="dashboard-status-card status-sent">
                            <p className="dashboard-status-number">
                                {statusCounts.sent}
                            </p>
                            <p className="dashboard-status-title">
                                Application Sent
                            </p>
                        </div>

                        <div className="dashboard-status-card status-review">
                            <p className="dashboard-status-number">
                                {statusCounts.review}
                            </p>
                            <p className="dashboard-status-title">
                                Under Review
                            </p>
                        </div>

                        <div className="dashboard-status-card status-shortlisted">
                            <p className="dashboard-status-number">
                                {statusCounts.shortlisted}
                            </p>
                            <p className="dashboard-status-title">
                                Shortlisted
                            </p>
                        </div>

                        <div className="dashboard-status-card status-interview">
                            <p className="dashboard-status-number">
                                {statusCounts.interview}
                            </p>
                            <p className="dashboard-status-title">
                                Interview Scheduled
                            </p>
                        </div>

                        <div className="dashboard-status-card status-rejected">
                            <p className="dashboard-status-number">
                                {statusCounts.rejected}
                            </p>
                            <p className="dashboard-status-title">
                                Rejected
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/my-applications"
                        className="dashboard-action-button"
                    >
                        MANAGE APPLICATIONS →
                    </Link>
                </section>

                {/* Recommended opportunities */}
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
                            <Link
                                to="/opportunity-details/frontend"
                                className="dashboard-action-button"
                            >
                                VIEW OPPORTUNITY →
                            </Link>
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
                            <Link
                                to="/opportunity-details/uiux"
                                className="dashboard-action-button"
                            >
                                VIEW OPPORTUNITY →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Recent applications */}
                <section className="dashboard-section">
                    <h2 className="dashboard-section-title">
                        Recent Applications
                    </h2>

                    {applications.length > 0 ? (
                        <div className="dashboard-opportunities">
                            {[...applications]
                                .reverse()
                                .slice(0, 3)
                                .map((application, index) => (
                                    <div
                                        className="dashboard-opportunity-card"
                                        key={`${application.id}-${index}`}
                                    >
                                        <p className="dashboard-opportunity-type">
                                            {application.type}
                                        </p>

                                        <h3 className="dashboard-opportunity-title">
                                            {application.title}
                                        </h3>

                                        <p className="dashboard-opportunity-company">
                                            {application.company}
                                        </p>

                                        <p className="dashboard-opportunity-location">
                                            Applied: {application.appliedDate}
                                        </p>

                                        <p className="dashboard-opportunity-location">
                                            Status:{" "}
                                            {application.status ||
                                                "Application Sent"}
                                        </p>

                                        <Link
                                            to="/my-applications"
                                            className="dashboard-action-button"
                                        >
                                            VIEW APPLICATION →
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <p className="dashboard-description">
                            You haven't applied for any opportunities yet.
                            Explore opportunities to get started.
                        </p>
                    )}
                </section>

                {/* Quick actions */}
                <section className="dashboard-section">
                    <h2 className="dashboard-section-title">
                        Quick Actions
                    </h2>

                    <div className="dashboard-actions">
                        <Link
                            to="/student-profile"
                            className="dashboard-action-button"
                        >
                            MY PROFILE
                        </Link>

                        <Link
                            to="/my-applications"
                            className="dashboard-action-button"
                        >
                            MY APPLICATIONS
                        </Link>

                        <Link
                            to="/saved-opportunities"
                            className="dashboard-action"
                        >
                            SAVED OPPORTUNITIES
                        </Link>

                        <Link
                            to="/career-guide"
                            className="dashboard-action-button"
                        >
                            CAREER GUIDE
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default StudentDashboard;
