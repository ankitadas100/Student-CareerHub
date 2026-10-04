import React from "react";
import "./CareerGuide.css";

function CareerGuide() {
    return (
        <div className="career-guide-page">

            <section className="career-guide-header">

                <p className="career-guide-label">
                    CAREER GUIDE
                </p>

                <h1 className="career-guide-title">
                    Build Your Career With Confidence
                </h1>

                <p className="career-guide-description">
                    Practical guidance to help students prepare,
                    discover opportunities, and take the next step
                    in their professional journey.
                </p>

            </section>


            <section className="career-guide-intro">

                <div className="career-guide-intro-content">

                    <p className="career-guide-section-label">
                        START HERE
                    </p>

                    <h2 className="career-guide-intro-title">
                        Your Career Journey, Step by Step
                    </h2>

                    <p className="career-guide-intro-text">
                        Starting your career can feel confusing.
                        CareerSpring gives you a simple path to prepare
                        yourself and make better career decisions.
                    </p>

                </div>

            </section>


            <section className="career-guide-steps">

                <div className="career-guide-card">

                    <span className="career-guide-number">
                        01
                    </span>

                    <h2 className="career-guide-card-title">
                        Build Your Profile
                    </h2>

                    <p className="career-guide-card-text">
                        Create a professional profile that highlights
                        your education, skills, projects, and interests.
                    </p>

                </div>


                <div className="career-guide-card">

                    <span className="career-guide-number">
                        02
                    </span>

                    <h2 className="career-guide-card-title">
                        Prepare Your Resume
                    </h2>

                    <p className="career-guide-card-text">
                        Learn how to create a clear and professional
                        resume that represents your strengths.
                    </p>

                </div>


                <div className="career-guide-card">

                    <span className="career-guide-number">
                        03
                    </span>

                    <h2 className="career-guide-card-title">
                        Develop Your Skills
                    </h2>

                    <p className="career-guide-card-text">
                        Identify the skills required for your target
                        career and continuously improve them.
                    </p>

                </div>


                <div className="career-guide-card">

                    <span className="career-guide-number">
                        04
                    </span>

                    <h2 className="career-guide-card-title">
                        Prepare for Interviews
                    </h2>

                    <p className="career-guide-card-text">
                        Practice common interview questions and learn
                        how to confidently present yourself.
                    </p>

                </div>

            </section>


            <section className="career-guide-tips">

                <p className="career-guide-section-label">
                    CAREER TIPS
                </p>

                <h2 className="career-guide-tips-title">
                    Small Steps. Better Opportunities.
                </h2>

                <div className="career-guide-tips-list">

                    <div className="career-guide-tip">

                        <h3 className="career-guide-tip-title">
                            Keep Learning
                        </h3>

                        <p className="career-guide-tip-text">
                            Keep improving your technical and professional
                            skills through projects and practice.
                        </p>

                    </div>


                    <div className="career-guide-tip">

                        <h3 className="career-guide-tip-title">
                            Build Projects
                        </h3>

                        <p className="career-guide-tip-text">
                            Practical projects can help demonstrate what
                            you can actually build and contribute.
                        </p>

                    </div>


                    <div className="career-guide-tip">

                        <h3 className="career-guide-tip-title">
                            Apply Consistently
                        </h3>

                        <p className="career-guide-tip-text">
                            Explore relevant opportunities regularly and
                            don't be discouraged by rejection.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default CareerGuide;