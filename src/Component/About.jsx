import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">

            <section className="about-header">

                <p className="about-label">
                    ABOUT CAREERSPRING
                </p>

                <h1 className="about-title">
                    Building Better Career Opportunities for Students
                </h1>

                <p className="about-description">
                    CareerSpring is a student-focused platform designed to
                    help students discover internships, jobs, and resources
                    that support their career journey.
                </p>

            </section>


            <section className="about-mission">

                <div className="mission-content">

                    <p className="section-label">
                        OUR MISSION
                    </p>

                    <h2 className="mission-title">
                        Helping Students Take the Next Step
                    </h2>

                    <p className="mission-description">
                        Starting a career can be challenging. CareerSpring
                        brings opportunities and useful career resources
                        together in one place so students can make better
                        decisions about their future.
                    </p>

                    <p className="mission-description">
                        From finding internships and fresher jobs to
                        preparing for interviews and building professional
                        skills, our goal is to make the career journey
                        simpler and more accessible.
                    </p>

                </div>

            </section>


            <section className="about-offer">

                <p className="section-label">
                    WHAT WE OFFER
                </p>

                <h2 className="offer-title">
                    Everything You Need to Start Your Career
                </h2>

                <div className="offer-list">

                    <div className="offer-card">

                        <span className="offer-number">
                            01
                        </span>

                        <h3 className="offer-card-title">
                            Jobs & Internships
                        </h3>

                        <p className="offer-card-text">
                            Discover opportunities suitable for students
                            and freshers.
                        </p>

                    </div>


                    <div className="offer-card">

                        <span className="offer-number">
                            02
                        </span>

                        <h3 className="offer-card-title">
                            Career Resources
                        </h3>

                        <p className="offer-card-text">
                            Learn about resumes, interviews, skills,
                            and career preparation.
                        </p>

                    </div>


                    <div className="offer-card">

                        <span className="offer-number">
                            03
                        </span>

                        <h3 className="offer-card-title">
                            Career Growth
                        </h3>

                        <p className="offer-card-text">
                            Build the knowledge and confidence needed
                            to move forward in your career.
                        </p>

                    </div>

                </div>

            </section>


            <section className="about-why">

                <div className="why-content">

                    <p className="section-label">
                        WHY CAREERSPRING
                    </p>

                    <h2 className="why-title">
                        Your Career Journey Starts With the Right Opportunity
                    </h2>

                    <p className="why-description">
                        CareerSpring is built with students and freshers
                        in mind. We focus on making opportunities easier
                        to discover and career preparation easier to
                        understand.
                    </p>

                </div>

            </section>

        </div>
    );
}

export default About;