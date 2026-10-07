import React from "react";
import { useParams, Link } from "react-router-dom";
import "./OpportunityDetails.css";

function OpportunityDetails() {

    const { id } = useParams();

    const opportunities = {
        frontend: {
            type: "INTERNSHIP",
            title: "Frontend Developer Intern",
            company: "ABC Technologies",
            location: "Kolkata · Remote",
            description:
                "Join our team as a Frontend Developer Intern and work on modern web applications while gaining practical industry experience.",
            skills: ["React", "JavaScript", "HTML", "CSS"]
        },

        software: {
            type: "FULL TIME",
            title: "Software Trainee",
            company: "XYZ Solutions",
            location: "Kolkata",
            description:
                "Start your software development career with our trainee program and work with an experienced development team.",
            skills: ["JavaScript", "Git", "SQL"]
        },

        uiux: {
            type: "INTERNSHIP",
            title: "UI/UX Design Intern",
            company: "Design Studio",
            location: "Remote",
            description:
                "Work with designers to create user-friendly digital experiences and develop your practical UI/UX design skills.",
            skills: ["Figma", "UI Design", "Prototyping"]
        }
    };

    const opportunity = opportunities[id];

    if (!opportunity) {
        return (
            <div className="opportunity-details-page">

                <section className="opportunity-not-found">

                    <h1 className="opportunity-not-found-title">
                        Opportunity Not Found
                    </h1>

                    <p className="opportunity-not-found-text">
                        The opportunity you are looking for does not exist.
                    </p>

                    <Link
                        to="/opportunities"
                        className="back-opportunities-button"
                    >
                        BACK TO OPPORTUNITIES
                    </Link>

                </section>

            </div>
        );
    }
const handleApply=()=>{
    
const application={
title:opportunity.title,
company:opportunity.company,
location:opportunity.location,
type:opportunity.type,
  appliedDate: new Date().toLocaleDateString(),
status:"application Sent"
};
console.log(application)
}
    return (
        <div className="opportunity-details-page">

            <section className="opportunity-details-header">

                <p className="opportunity-details-type">
                    {opportunity.type}
                </p>

                <h1 className="opportunity-details-title">
                    {opportunity.title}
                </h1>

                <p className="opportunity-details-company">
                    {opportunity.company}
                </p>

                <p className="opportunity-details-location">
                    {opportunity.location}
                </p>

            </section>


            <main className="opportunity-details-content">

                <section className="opportunity-description-section">

                    <h2 className="opportunity-section-title">
                        About the Opportunity
                    </h2>

                    <p className="opportunity-description">
                        {opportunity.description}
                    </p>

                </section>


                <section className="opportunity-skills-section">

                    <h2 className="opportunity-section-title">
                        Required Skills
                    </h2>

                    <div className="opportunity-details-skills">

                        {opportunity.skills.map((skill) => (
                            <span
                                className="opportunity-detail-skill"
                                key={skill}
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                </section>


                <section className="opportunity-action-section">

                    <button
                        className="apply-button"
                        type="button"
                        onClick={handleApply}
                    >
                        APPLY NOW →
                    </button>

                    <Link
                        to="/opportunities"
                        className="back-opportunities-link"
                    >
                        ← BACK TO OPPORTUNITIES
                    </Link>

                </section>

            </main>

        </div>
    );
}

export default OpportunityDetails;