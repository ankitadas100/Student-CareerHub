
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyApplications.css";

function MyApplications() {

    const [applications, setApplications] = useState(() => {
        try {
            return JSON.parse(
                localStorage.getItem("applications") || "[]"
            );
        } catch {
            return [];
        }
    });
    const [selectedApplication, setSelectedApplication] = useState(null);

    const handleRemove = (indexToRemove) => {
        const updatedApplications = applications.filter(
            (_, index) => index !== indexToRemove
        );

        localStorage.setItem(
            "applications",
            JSON.stringify(updatedApplications)
        );

        setApplications(updatedApplications);
    };

    return (
        <div className="my-applications-page">
            <header className="my-applications-header">
                <p className="my-applications-label">
                    CAREERSPRING
                </p>

                <h1 className="my-applications-title">
                    My Applications
                </h1>

                <p className="my-applications-description">
                    Track the opportunities you have applied for.
                </p>
            </header>

            <main className="my-applications-content">
                <div className="my-applications-summary">
                    <h2 className="my-applications-section-title">
                        Application History
                    </h2>

                    <p className="my-applications-count">
                        Total Applications: {applications.length}
                    </p>
                </div>

                {applications.length > 0 ? (
                    <div className="applications-list">
                        {applications.map((application, index) => (
                            <article
                                className="application-card"
                                key={`${application.id}-${index}`}
                            >
                                <div className="application-info">
                                    <p className="application-type">
                                        {application.type}
                                    </p>

                                    <h2 className="application-job-title">
                                        {application.title}
                                    </h2>

                                    <p className="application-company">
                                        {application.company}
                                    </p>

                                    <p className="application-date">
                                        Applied on: {application.appliedDate}
                                    </p>

                                    <p className="application-resume">
                                        Resume: {application.resume?.name || "Not available"}
                                    </p>
                                </div>

                                <div className="application-status-box">
                                    <span className="application-status">
                                        {application.status}
                                    </span>

                                    <button
                                        type="button"
                                        className="application-button"
                                        onClick={() =>
                                            setSelectedApplication(
                                                selectedApplication === index ? null : index
                                            )
                                        }
                                    >
                                        {selectedApplication === index ? "HIDE DETAILS" : "VIEW DETAILS"}
                                    </button>

                                    <button
                                        className="application-button"
                                        type="button"
                                        onClick={() => handleRemove(index)}
                                    >
                                        REMOVE
                                    </button>
                                </div>
                                {selectedApplication === index && (
                                    <div className="application-full-details">
                                        <h3 className="application-details-title">
                                            Submitted Application Details
                                        </h3>

                                        <p>
                                            <strong>Full Name:</strong> {application.fullName}
                                        </p>

                                        <p>
                                            <strong>Email:</strong> {application.email}
                                        </p>

                                        <p>
                                            <strong>Phone:</strong> {application.phone}
                                        </p>

                                        <p>
                                            <strong>College:</strong> {application.college}
                                        </p>

                                        <p>
                                            <strong>Graduation Year:</strong> {application.graduationYear}
                                        </p>

                                        <p>
                                            <strong>Resume:</strong> {application.resume?.name || "Not available"}
                                        </p>

                                        <p>
                                            <strong>Cover Letter:</strong>{" "}
                                            {application.coverLetter || "No cover letter provided"}
                                        </p>
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                ) : (
                    <section className="applications-empty">
                        <h2>No Applications Yet</h2>

                        <p>
                            You haven't applied for any opportunities yet.
                            Explore available jobs and take your next career step.
                        </p>

                        <Link
                            to="/opportunities"
                            className="application-button"
                        >
                            EXPLORE OPPORTUNITIES →
                        </Link>
                    </section>
                )}

                <Link
                    to="/opportunities"
                    className="my-applications-back-link"
                >
                    ← EXPLORE MORE OPPORTUNITIES
                </Link>
            </main>
        </div>
    );
}

export default MyApplications;
