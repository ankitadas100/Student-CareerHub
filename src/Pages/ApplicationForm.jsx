
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

    // Load the student's profile when the form opens
    const [formData, setFormData] = useState(() => {
        let profile = {};

        try {
            profile = JSON.parse(
                localStorage.getItem("studentProfile") || "{}"
            );
        } catch {
            profile = {};
        }

        return {
            fullName: profile.name || "",
            email: profile.email || "",
            phone: profile.phone || "",
            college: profile.college || "",
            graduationYear: profile.graduationYear
                ? String(profile.graduationYear)
                : "",
            resume: null,
            coverLetter: ""
        };
    });

    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // Handle text, email, select and textarea changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));

        setError("");
    };

    // Validate the uploaded resume
    const handleResumeChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            setFormData((previousData) => ({
                ...previousData,
                resume: null
            }));
            return;
        }

        const isPDF =
            file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf");

        if (!isPDF) {
            setError("Please upload your resume in PDF format.");
            e.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setError("Your resume must be 2 MB or smaller.");
            e.target.value = "";
            return;
        }

        setFormData((previousData) => ({
            ...previousData,
            resume: file
        }));

        setError("");
    };

    // Submit the application
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!formData.resume) {
            setError("Please upload your resume before submitting.");
            return;
        }

        let applications = [];

        try {
            applications = JSON.parse(
                localStorage.getItem("applications") || "[]"
            );

            if (!Array.isArray(applications)) {
                applications = [];
            }
        } catch {
            setError(
                "Unable to read saved applications. Please try again."
            );
            return;
        }

        const normalizedEmail = formData.email.trim().toLowerCase();

        // Prevent duplicate applications from the same email
        const alreadyApplied = applications.some(
            (application) =>
                application.id === id &&
                application.email?.trim().toLowerCase() ===
                    normalizedEmail
        );

        if (alreadyApplied) {
            setError(
                "You have already applied for this opportunity with this email."
            );
            return;
        }

        const application = {
            id,
            title: opportunity.title,
            company: opportunity.company,
            type: opportunity.type,

            // Save the values entered in this application form
            fullName: formData.fullName.trim(),
            email: normalizedEmail,
            phone: formData.phone.trim(),
            college: formData.college.trim(),
            graduationYear: formData.graduationYear,

            // Save resume metadata
            resume: {
                name: formData.resume.name,
                size: formData.resume.size,
                type: formData.resume.type
            },

            coverLetter: formData.coverLetter.trim(),
            appliedDate: new Date().toLocaleDateString(),
            status: "Application Sent"
        };

        try {
            localStorage.setItem(
                "applications",
                JSON.stringify([...applications, application])
            );

            setSubmitted(true);
        } catch {
            setError(
                "Unable to save your application. Please try again."
            );
        }
    };

    // Handle an invalid opportunity ID
    if (!opportunity) {
        return (
            <div className="application-page">
                <section className="application-not-found">
                    <p className="application-label">
                        CAREERSPRING
                    </p>

                    <h1 className="application-not-found-title">
                        Opportunity Not Found
                    </h1>

                    <p className="application-description">
                        This opportunity may have been removed or the
                        link may be incorrect.
                    </p>

                    <Link
                        to="/opportunities"
                        className="application-submit-button"
                    >
                        EXPLORE OPPORTUNITIES →
                    </Link>
                </section>
            </div>
        );
    }

    // Application success page
    if (submitted) {
        return (
            <div className="application-page">
                <section className="application-success">
                    <div className="application-success-icon">
                        ✓
                    </div>

                    <p className="application-label">
                        CAREERSPRING
                    </p>

                    <h1 className="application-success-title">
                        Application Submitted!
                    </h1>

                    <p className="application-success-message">
                        Thank you, {formData.fullName.trim()}! Your
                        application for {opportunity.title} at{" "}
                        {opportunity.company} has been saved successfully.
                    </p>

                    <p className="application-field-help">
                        Resume selected: {formData.resume?.name}
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

    // Application form
    return (
        <div className="application-page">
            <header className="application-header">
                <p className="application-label">
                    CAREER OPPORTUNITIES
                </p>

                <h1 className="application-title">
                    Take the Next Step in Your Career
                </h1>

                <p className="application-description">
                    Review your details, edit them if needed, and submit
                    your application.
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

                    <p className="application-field-help">
                        Fields marked with * are required. You can edit
                        your details before submitting.
                    </p>

                    <div className="application-field">
                        <label
                            className="application-field-label"
                            htmlFor="fullName"
                        >
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
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="application-form-row">
                        <div className="application-field">
                            <label
                                className="application-field-label"
                                htmlFor="email"
                            >
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
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="application-field">
                            <label
                                className="application-field-label"
                                htmlFor="phone"
                            >
                                Phone Number *
                            </label>

                            <input
                                className="application-input"
                                id="phone"
                                name="phone"
                                type="tel"
                                pattern="[0-9]{10}"
                                minLength={10}
                                maxLength={10}
                                placeholder="10-digit mobile number"
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                required
                            />
                        </div>
                    </div>

                    <div className="application-form-row">
                        <div className="application-field">
                            <label
                                className="application-field-label"
                                htmlFor="college"
                            >
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
                            <label
                                className="application-field-label"
                                htmlFor="graduationYear"
                            >
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
                                <option value="">
                                    Select year
                                </option>

                                {Array.from(
                                    { length: 8 },
                                    (_, index) => 2026 + index
                                ).map((year) => (
                                    <option
                                        className="application-year-option"
                                        key={year}
                                        value={String(year)}
                                    >
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="application-field">
                        <label
                            className="application-field-label"
                            htmlFor="resume"
                        >
                            Upload Resume (PDF) *
                        </label>

                        <input
                            className="application-input"
                            id="resume"
                            name="resume"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={handleResumeChange}
                            required
                        />

                        <p className="application-field-help">
                            PDF format only. Maximum file size: 2 MB.
                        </p>

                        {formData.resume && (
                            <p className="application-field-help">
                                Selected file: {formData.resume.name}
                            </p>
                        )}
                    </div>

                    <div className="application-field">
                        <label
                            className="application-field-label"
                            htmlFor="coverLetter"
                        >
                            Cover Letter (Optional)
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
                        <p
                            className="application-error"
                            role="alert"
                        >
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
