import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ApplicationForm.css";

function ApplicationForm() {
    const { id } = useParams();

    const opportunities = {
        frontend: {
            title: "Frontend Developer Intern",
            company: "ABC Technologies",
            type: "INTERNSHIP"
        },
        software: {
            title: "Software Trainee",
            company: "XYZ Solutions",
            type: "FULL TIME"
        },
        uiux: {
            title: "UI/UX Design Intern",
            company: "Design Studio",
            type: "INTERNSHIP"
        }
    };

    const opportunity = opportunities[id];

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        graduationYear: "",
        resume: "",
        coverLetter: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const applications =
            JSON.parse(localStorage.getItem("applications")) || [];

        const alreadyApplied = applications.some(
            (application) => application.id === id
        );

        if (alreadyApplied) {
            setError("You have already applied for this opportunity.");
            return;
        }

        const application = {
            id,
            title: opportunity.title,
            company: opportunity.company,
            type: opportunity.type,
            ...formData,
            appliedDate: new Date().toLocaleDateString(),
            status: "Application Sent"
        };

        localStorage.setItem(
            "applications",
            JSON.stringify([...applications, application])
        );

        setSubmitted(true);
    };

    if (!opportunity) {
        return (
            <div className="application-page">
                <div className="application-not-found">
                    <h1 className="application-not-found-title">
                        Opportunity Not Found
                    </h1>

                    <Link
                        to="/opportunities"
                        className="application-back-link"
                    >
                        BACK TO OPPORTUNITIES
                    </Link>
                </div>
            </div>
        );
    }

    if (submitted) {
        return (
            <div className="application-page">
                <section className="application-success">
                    <div className="application-success-icon">✓</div>

                    <p className="application-label">
                        CAREERSPRING
                    </p>

                    <h1 className="application-success-title">
                        Application Submitted!
                    </h1>

                    <p className="application-success-message">
                        Your application for {opportunity.title} at{" "}
                        {opportunity.company} has been submitted successfully.
                    </p>

                    <Link
                        to="/my-applications"
                        className="application-submit-button"
                    >
                        VIEW MY APPLICATIONS →
                    </Link>

                    <Link
                        to="/opportunities"
                        className="application-back-link"
                    >
                        EXPLORE MORE OPPORTUNITIES
                    </Link>
                </section>
            </div>
        );
    }

    return (
        <div className="application-page">
            <header className="application-header">
                <p className="application-label">
                    CAREER OPPORTUNITIES
                </p>

                <h1 className="application-title">
                    Apply for Your Next Opportunity
                </h1>

                <p className="application-description">
                    Complete your details to submit your application.
                </p>
            </header>

            <main className="application-content">
                <section className="application-job-card">
                    <p className="application-job-type">
                        {opportunity.type}
                    </p>

                    <h2 className="application-job-title">
                        {opportunity.title}
                    </h2>

                    <p className="application-job-company">
                        {opportunity.company}
                    </p>
                </section>

                <form
                    className="application-form"
                    onSubmit={handleSubmit}
                >
                    <h2 className="application-form-title">
                        Student Information
                    </h2>

                    <div className="application-field">
                        <label className="application-field-label" htmlFor="fullName">
                            Full Name *
                        </label>

                        <input
                            className="application-input"
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="application-form-row">
                        <div className="application-field">
                            <label className="application-field-label" htmlFor="email">
                                Email Address *
                            </label>

                            <input
                                className="application-input"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="application-field">
                            <label className="application-field-label" htmlFor="phone">
                                Phone Number *
                            </label>

                            <input
                                className="application-input"
                                id="phone"
                                name="phone"
                                type="tel"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                placeholder="10-digit mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="application-form-row">
                        <div className="application-field">
                            <label className="application-field-label" htmlFor="college">
                                College / University *
                            </label>

                            <input
                                className="application-input"
                                id="college"
                                name="college"
                                type="text"
                                placeholder="Enter your institution"
                                value={formData.college}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="application-field">
                            <label className="application-field-label" htmlFor="graduationYear">
                                Graduation Year *
                            </label>

                            <select
                                className="application-input"
                                id="graduationYear"
                                name="graduationYear"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select year</option>
                                {Array.from(
                                    { length: 8 },
                                    (_, index) => 2026 + index
                                ).map((year) => (
                                    <option
                                        className="application-year-option"
                                        key={year}
                                        value={year}
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                   
                    <div className="application-field">
                        <label className="application-field-label" htmlFor="resume">
                            Upload Resume (PDF) *
                        </label>

                        <input
                            className="application-input"
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={(e) => {
                                const file = e.target.files[0];

                                if (file && file.type !== "application/pdf") {
                                    setError("Please upload a PDF resume.");
                                    e.target.value = "";
                                    return;
                                }

                                if (file && file.size > 2 * 1024 * 1024) {
                                    setError("Resume must be smaller than 2 MB.");
                                    e.target.value = "";
                                    return;
                                }

                                setError("");
                                setFormData({
                                    ...formData,
                                    resume: file || null
                                });
                            }}
                            required
                        />

                        <p className="application-field-help">
                            PDF format only. Maximum file size: 2 MB.
                        </p>
                    </div>

                    {/* 
                            <p className="application-field-help">
                                Paste a shareable link to your resume.
                            </p>
                        </div> */}


                    {/* <p className="application-field-help">
                            Paste a shareable link to your resume.
                        </p>
                    </div> */}

                    <div className="application-field">
                        <label className="application-field-label" htmlFor="coverLetter">
                            Cover Letter
                        </label>

                        <textarea
                            className="application-textarea"
                            id="coverLetter"
                            name="coverLetter"
                            rows={5}
                            placeholder="Tell the employer why you are suitable for this role..."
                            value={formData.coverLetter}
                            onChange={handleChange}
                        />
                    </div>

                    {error && (
                        <p className="application-error">
                            {error}
                        </p>
                    )}

                    <button
                        className="application-submit-button"
                        type="submit"
                    >
                        SUBMIT APPLICATION →
                    </button>

                    <Link
                        to={`/opportunity-details/${id}`}
                        className="application-back-link"
                    >
                        ← BACK TO OPPORTUNITY DETAILS
                    </Link>
                </form>
            </main>
        </div>
    );
}

export default ApplicationForm;