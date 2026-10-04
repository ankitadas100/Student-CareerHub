import React from "react";
import "./OpportunityDetails.css";
import { useParams } from "react-router-dom";

function OpportunityDetails() {
    const { id } = useParams();
    const opportunities = {
        frontend: {
            type: "INTERNSHIP",
            title: "Frontend Developer Intern",
            company: "ABC Technologies",
            location: "Kolkata · Remote"
        },

        software: {
            type: "FULL TIME",
            title: "Software Trainee",
            company: "XYZ Solutions",
            location: "Kolkata"
        },

        uiux: {
            type: "INTERNSHIP",
            title: "UI/UX Design Intern",
            company: "Design Studio",
            location: "Remote"
        }
    };
  const opportunity = opportunities[id];
    return (

        <div className="details-page">

            <section className="details-header">

                <p className="details-label">
                    INTERNSHIP
                </p>

                <h1 className="details-title">
                    {opportunity.title}
                </h1>

                <p className="details-company">
                    {opportunity.company}
                </p>

                <p className="details-location">
                    {opportunity.location}
                </p>

            </section>


            <section className="details-content">

                <div className="details-main">

                    <div className="details-section">

                        <h2 className="details-heading">
                            About the Opportunity
                        </h2>

                        <p className="details-description">
                            We are looking for a motivated Frontend Developer
                            Intern to join our team and work on modern web
                            applications. This is a great opportunity for
                            students and freshers to gain practical experience.
                        </p>

                    </div>


                    <div className="details-section">

                        <h2 className="details-heading">
                            Responsibilities
                        </h2>

                        <ul className="details-list">

                            <li className="details-list-item">
                                Build responsive web interfaces.
                            </li>

                            <li className="details-list-item">
                                Work with React and JavaScript.
                            </li>

                            <li className="details-list-item">
                                Collaborate with the development team.
                            </li>

                            <li className="details-list-item">
                                Test and improve website performance.
                            </li>

                        </ul>

                    </div>


                    <div className="details-section">

                        <h2 className="details-heading">
                            Required Skills
                        </h2>

                        <div className="details-skills">

                            <span className="details-skill">
                                React
                            </span>

                            <span className="details-skill">
                                JavaScript
                            </span>

                            <span className="details-skill">
                                HTML
                            </span>

                            <span className="details-skill">
                                CSS
                            </span>

                            <span className="details-skill">
                                Git
                            </span>

                        </div>

                    </div>


                    <div className="details-section">

                        <h2 className="details-heading">
                            Eligibility
                        </h2>

                        <p className="details-description">
                            Students pursuing a degree in Computer Science,
                            Information Technology, or a related field.
                            Freshers are welcome to apply.
                        </p>

                    </div>

                </div>


                <aside className="details-sidebar">

                    <div className="apply-box">

                        <h2 className="apply-title">
                            Ready to Apply?
                        </h2>

                        <p className="apply-text">
                            Take the next step toward your career.
                        </p>

                        <button className="apply-button">
                            APPLY NOW →
                        </button>

                    </div>


                    <div className="job-info">

                        <h3 className="job-info-title">
                            Opportunity Details
                        </h3>

                        <p className="job-info-item">
                            <strong className="job-info-label">
                                Type:
                            </strong>
                            Internship
                        </p>

                        <p className="job-info-item">
                            <strong className="job-info-label">
                                Location:
                            </strong>
                            Kolkata / Remote
                        </p>

                        <p className="job-info-item">
                            <strong className="job-info-label">
                                Experience:
                            </strong>
                            Fresher
                        </p>

                        <p className="job-info-item">
                            <strong className="job-info-label">
                                Duration:
                            </strong>
                            3 - 6 Months
                        </p>

                    </div>

                </aside>

            </section>

        </div>
    );
}

export default OpportunityDetails;