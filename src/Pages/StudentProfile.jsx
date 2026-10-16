
import React, { useEffect, useRef, useState } from "react";
import "./StudentProfile.css";

const defaultProfile = {
    name: "Ankita Das",
    email: "ankita@example.com",
    phone: "",
    college: "Adamas University",
    course: "Bachelor of Computer Applications",
    graduationYear: "2027",
    skills: ["HTML", "CSS", "JavaScript", "React", "Git"],
    projects: [
        {
            title: "CareerSpring",
            description:
                "Student-focused jobs and internship portal built with React."
        },
        {
            title: "FrameFusion",
            description:
                "Photo gallery application built with React."
        }
    ],
    resumeName: ""
};

function StudentProfile() {
    const profileViewCounted = useRef(false);

    const [profile, setProfile] = useState(() => {
        try {
            const savedProfile = localStorage.getItem("studentProfile");

            if (savedProfile) {
                const parsedProfile = JSON.parse(savedProfile);

                return {
                    ...defaultProfile,
                    ...parsedProfile
                };
            }

            return defaultProfile;
        } catch {
            return defaultProfile;
        }
    });

    const [formData, setFormData] = useState(profile);
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    const [resumeFile, setResumeFile] = useState(null);

    // Count profile visits
    useEffect(() => {
        if (profileViewCounted.current) {
            return;
        }

        profileViewCounted.current = true;

        try {
            const currentViews = Number(
                localStorage.getItem("profileViews") || "0"
            );

            const safeViews =
                Number.isFinite(currentViews) && currentViews >= 0
                    ? currentViews
                    : 0;

            localStorage.setItem(
                "profileViews",
                String(safeViews + 1)
            );
        } catch (error) {
            console.error(
                "Unable to update profile views:",
                error
            );
        }
    }, []);

    // Keep the edit form in sync with the saved profile
    useEffect(() => {
        setFormData(profile);
    }, [profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setMessage("");
    };

    // Update project details
    const handleProjectChange = (index, field, value) => {
        setFormData((previous) => ({
            ...previous,
            projects: previous.projects.map((project, i) =>
                i === index
                    ? { ...project, [field]: value }
                    : project
            )
        }));
    };


    const handleResumeChange = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const isPDF =
            file.type === "application/pdf" ||
            file.name.toLowerCase().endsWith(".pdf");

        if (!isPDF) {
            setMessage("Please select a PDF resume.");
            e.target.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setMessage("Resume must be 2 MB or smaller.");
            e.target.value = "";
            return;
        }

        setResumeFile(file);

        setFormData((previous) => ({
            ...previous,
            resumeName: file.name
        }));

        setMessage("");
    };

    // Save profile changes
    const handleSave = (e) => {
        e.preventDefault();

        const updatedProfile = {
            ...formData,
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            college: formData.college.trim(),
            course: formData.course.trim(),
            graduationYear: String(formData.graduationYear),
            skills: formData.skills
                .filter((skill) => skill.trim())
                .map((skill) => skill.trim()),
            projects: formData.projects
                .filter((project) => project.title.trim())
                .map((project) => ({
                    ...project,
                    title: project.title.trim(),
                    description: project.description.trim()
                }))
        };

        try {
            localStorage.setItem(
                "studentProfile",
                JSON.stringify(updatedProfile)
            );

            setProfile(updatedProfile);
            setIsEditing(false);
            setMessage("Profile updated successfully!");
        } catch {
            setMessage(
                "Unable to save your profile. Please try again."
            );
        }
    };

    // Cancel editing
    const handleCancel = () => {
        setFormData(profile);
        setResumeFile(null);
        setIsEditing(false);
        setMessage("");
    };

   
    const handleViewResume = () => {
        if (!resumeFile) {
            setMessage(
                profile.resumeName
                    ? "Please select the resume file again to preview it."
                    : "No resume uploaded yet. Edit your profile to upload one."
            );
            return;
        }

        const resumeURL = URL.createObjectURL(resumeFile);

        window.open(resumeURL, "_blank", "noopener,noreferrer");
        setMessage("");
    };

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
                        {profile.name.charAt(0).toUpperCase() || "A"}
                    </div>

                    <div className="profile-info">
                        <h2 className="profile-name">
                            {profile.name}
                        </h2>

                        <p className="profile-email">
                            {profile.email}
                        </p>

                        <p className="profile-college">
                            {profile.college}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="edit-profile-button"
                        onClick={() => {
                            setFormData(profile);
                            setIsEditing(!isEditing);
                            setMessage("");
                        }}
                    >
                        {isEditing
                            ? "EDITING PROFILE"
                            : "EDIT PROFILE"}
                    </button>
                </div>

                {message && (
                    <p className="profile-message" role="status">
                        {message}
                    </p>
                )}

                {isEditing ? (
                    <form
                        className="profile-edit-form"
                        onSubmit={handleSave}
                    >
                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Personal Information
                            </h2>

                            <label
                                className="profile-field-label"
                                htmlFor="name"
                            >
                                Full Name
                            </label>

                            <input
                                className="profile-input"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label
                                className="profile-field-label"
                                htmlFor="email"
                            >
                                Email Address
                            </label>

                            <input
                                className="profile-input"
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <label
                                className="profile-field-label"
                                htmlFor="phone"
                            >
                                Phone Number
                            </label>

                            <input
                                className="profile-input"
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <label
                                className="profile-field-label"
                                htmlFor="college"
                            >
                                College / University
                            </label>

                            <input
                                className="profile-input"
                                id="college"
                                name="college"
                                value={formData.college}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Education
                            </h2>

                            <label
                                className="profile-field-label"
                                htmlFor="course"
                            >
                                Degree
                            </label>

                            <input
                                className="profile-input"
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                            />

                            <label
                                className="profile-field-label"
                                htmlFor="graduationYear"
                            >
                                Graduation Year
                            </label>

                            <input
                                className="profile-input"
                                id="graduationYear"
                                name="graduationYear"
                                type="number"
                                min="2020"
                                max="2100"
                                value={formData.graduationYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Skills
                            </h2>

                            <label
                                className="profile-field-label"
                                htmlFor="skills"
                            >
                                Skills (separate with commas)
                            </label>

                            <textarea
                                className="profile-input profile-textarea"
                                id="skills"
                                value={formData.skills.join(", ")}
                                onChange={(e) =>
                                    setFormData((previous) => ({
                                        ...previous,
                                        skills: e.target.value.split(",")
                                    }))
                                }
                                rows={3}
                            />
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Projects
                            </h2>

                            {formData.projects.map((project, index) => (
                                <div
                                    className="project-card"
                                    key={index}
                                >
                                    <label
                                        className="profile-field-label"
                                        htmlFor={`project-title-${index}`}
                                    >
                                        Project Name
                                    </label>

                                    <input
                                        className="profile-input"
                                        id={`project-title-${index}`}
                                        value={project.title}
                                        onChange={(e) =>
                                            handleProjectChange(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <label
                                        className="profile-field-label"
                                        htmlFor={`project-description-${index}`}
                                    >
                                        Project Description
                                    </label>

                                    <textarea
                                        className="profile-input profile-textarea"
                                        id={`project-description-${index}`}
                                        value={project.description}
                                        onChange={(e) =>
                                            handleProjectChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        rows={3}
                                    />
                                </div>
                            ))}

                            <button
                                type="button"
                                className="edit-profile-button"
                                onClick={() =>
                                    setFormData((previous) => ({
                                        ...previous,
                                        projects: [
                                            ...previous.projects,
                                            {
                                                title: "",
                                                description: ""
                                            }
                                        ]
                                    }))
                                }
                            >
                                + ADD PROJECT
                            </button>
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Resume
                            </h2>

                            <label
                                className="profile-field-label"
                                htmlFor="resumeUpload"
                            >
                                Upload Resume (PDF, max 2 MB)
                            </label>

                            <input
                                className="profile-input"
                                id="resumeUpload"
                                type="file"
                                accept=".pdf,application/pdf"
                                onChange={handleResumeChange}
                            />

                            <p className="resume-text">
                                {formData.resumeName ||
                                    "No resume selected"}
                            </p>
                        </div>

                        <div className="profile-form-actions">
                            <button
                                className="edit-profile-button"
                                type="submit"
                            >
                                SAVE CHANGES
                            </button>

                            <button
                                className="resume-button"
                                type="button"
                                onClick={handleCancel}
                            >
                                CANCEL
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Education
                            </h2>

                            <div className="education-info">
                                <p className="education-course">
                                    {profile.course}
                                </p>

                                <p className="education-college">
                                    {profile.college}
                                </p>

                                <p className="education-year">
                                    Graduation Year: {profile.graduationYear}
                                </p>
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Skills
                            </h2>

                            <div className="profile-skills">
                                {profile.skills.map((skill, index) => (
                                    <span
                                        className="profile-skill"
                                        key={`${skill}-${index}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Projects
                            </h2>

                            <div className="profile-projects">
                                {profile.projects.map((project, index) => (
                                    <div
                                        className="project-card"
                                        key={index}
                                    >
                                        <h3 className="project-title">
                                            {project.title}
                                        </h3>

                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-section">
                            <h2 className="profile-section-title">
                                Resume
                            </h2>

                            <div className="resume-box">
                                <p className="resume-text">
                                    {profile.resumeName ||
                                        "Keep your resume ready for your next opportunity."}
                                </p>

                                <button
                                    type="button"
                                    className="resume-button"
                                    onClick={handleViewResume}
                                >
                                    VIEW RESUME →
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}

export default StudentProfile;
