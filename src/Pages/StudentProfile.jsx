import React from "react";
import "./StudentProfile.css";

function StudentProfile() {
    return (
        <div className="student-profile-page">

            <section className="profile-header">

                <p className="profile-label">
                    STUDENT PROFILE
                </p>

                <h1 className="profile-title">
                    My Career Profile
                </h1>

                <p className="profile-description">
                    Manage your personal information, education,
                    skills, and career details.
                </p>

            </section>


            <section className="profile-content">

                <div className="profile-card">

                    <div className="profile-avatar">
                        A
                    </div>

                    <div className="profile-info">

                        <h2 className="profile-name">
                            Ankita Das
                        </h2>

                        <p className="profile-email">
                            ankita@example.com
                        </p>

                        <p className="profile-college">
                            Brainware University
                        </p>

                    </div>

                    <button className="edit-profile-button">
                        EDIT PROFILE
                    </button>

                </div>


                <div className="profile-section">

                    <h2 className="profile-section-title">
                        Education
                    </h2>

                    <div className="education-info">

                        <p className="education-course">
                            Bachelor of Computer Applications
                        </p>

                        <p className="education-college">
                            Brainware University
                        </p>

                        <p className="education-year">
                            Graduation Year: 2027
                        </p>

                    </div>

                </div>


                <div className="profile-section">

                    <h2 className="profile-section-title">
                        Skills
                    </h2>

                    <div className="profile-skills">

                        <span className="profile-skill">
                            HTML
                        </span>

                        <span className="profile-skill">
                            CSS
                        </span>

                        <span className="profile-skill">
                            JavaScript
                        </span>

                        <span className="profile-skill">
                            React
                        </span>

                        <span className="profile-skill">
                            Git
                        </span>

                    </div>

                </div>


                <div className="profile-section">

                    <h2 className="profile-section-title">
                        Projects
                    </h2>

                    <div className="profile-projects">

                        <div className="project-card">

                            <h3 className="project-title">
                                CareerSpring
                            </h3>

                            <p className="project-description">
                                Student-focused jobs and internship
                                portal built with React.
                            </p>

                        </div>


                        <div className="project-card">

                            <h3 className="project-title">
                                FrameFusion
                            </h3>

                            <p className="project-description">
                                Photo gallery application built
                                with React.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="profile-section">

                    <h2 className="profile-section-title">
                        Resume
                    </h2>

                    <div className="resume-box">

                        <p className="resume-text">
                            Keep your resume ready for your next
                            opportunity.
                        </p>

                        <button className="resume-button">
                            VIEW RESUME →
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default StudentProfile;