
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SavedOpportunities.css";

const opportunities = [
    {
        id: "frontend",
        type: "INTERNSHIP",
        title: "Frontend Developer Intern",
        company: "ABC Technologies",
        location: "Kolkata · Remote",
        skills: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
        id: "software",
        type: "FULL TIME",
        title: "Software Trainee",
        company: "XYZ Solutions",
        location: "Kolkata",
        skills: ["JavaScript", "Git", "SQL"]
    },
    {
        id: "uiux",
        type: "INTERNSHIP",
        title: "UI/UX Design Intern",
        company: "Design Studio",
        location: "Remote",
        skills: ["Figma", "UI Design", "Prototyping"]
    }
];

function getSavedOpportunities() {
    try {
        const saved = JSON.parse(
            localStorage.getItem("savedOpportunities") || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return saved
            .map((item) => {
                const opportunityId =
                    typeof item === "string" ? item : item?.id;

                return opportunities.find(
                    (opportunity) => opportunity.id === opportunityId
                );
            })
            .filter(Boolean);
    } catch {
        return [];
    }
}

function SavedOpportunities() {
    const [savedJobs, setSavedJobs] = useState(getSavedOpportunities);

    const handleRemove = (id) => {
        const updatedJobs = savedJobs.filter(
            (job) => job.id !== id
        );

        localStorage.setItem(
            "savedOpportunities",
            JSON.stringify(updatedJobs.map((job) => job.id))
        );

        setSavedJobs(updatedJobs);
    };

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
                {savedJobs.length > 0 ? (
                    savedJobs.map((job) => (
                        <article className="saved-card" key={job.id}>
                            <div className="saved-info">
                                <p className="saved-type">
                                    {job.type}
                                </p>

                                <h2 className="saved-job-title">
                                    {job.title}
                                </h2>

                                <p className="saved-company">
                                    {job.company}
                                </p>

                                <p className="saved-location">
                                    {job.location}
                                </p>

                                <div className="saved-skills">
                                    {job.skills.map((skill) => (
                                        <span
                                            className="saved-skill"
                                            key={skill}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="saved-actions">
                                <Link
                                    to={`/opportunity-details/${job.id}`}
                                    className="saved-view-button"
                                >
                                    VIEW DETAILS →
                                </Link>

                                <button
                                    type="button"
                                    className="saved-remove-button"
                                    onClick={() => handleRemove(job.id)}
                                >
                                    REMOVE
                                </button>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="saved-empty">
                        <h2 className="saved-empty-title">
                            No Saved Opportunities
                        </h2>

                        <p className="saved-empty-description">
                            You haven't saved any opportunities yet.
                            Explore available jobs and save the ones
                            that interest you.
                        </p>

                        <Link
                            to="/opportunities"
                            className="saved-view-button"
                        >
                            EXPLORE OPPORTUNITIES →
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SavedOpportunities;
