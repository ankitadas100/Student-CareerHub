import React, { useState } from "react";
import "./Opportunities.css";
import { Link } from "react-router-dom";

function Opportunities() {

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");

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

    const filteredOpportunities = opportunities.filter((opportunity) => {

        const searchText = search.toLowerCase();

        const matchesSearch =
            opportunity.title.toLowerCase().includes(searchText) ||
            opportunity.company.toLowerCase().includes(searchText) ||
            opportunity.skills.some((skill) =>
                skill.toLowerCase().includes(searchText)
            );

        const matchesType =
            type === "" ||
            opportunity.type.toLowerCase() === type.toLowerCase();

        const matchesLocation =
            location === "" ||
            opportunity.location.toLowerCase().includes(location.toLowerCase());

        return matchesSearch && matchesType && matchesLocation;
    });

    return (
        <div className="opportunities-page">

            <section className="opportunities-header">

                <p className="opportunities-label">
                    CAREER OPPORTUNITIES
                </p>

                <h1 className="opportunities-title">
                    Find Your Opportunity
                </h1>

                <p className="opportunities-description">
                    Explore internships and jobs that can help you
                    take the next step in your career.
                </p>

            </section>


            <section className="opportunities-search">

                <div className="search-box">

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search jobs, internships or skills"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select
                        className="search-select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">
                            All Types
                        </option>

                        <option value="internship">
                            Internship
                        </option>

                        <option value="full time">
                            Full Time
                        </option>
                    </select>


                    <select
                        className="search-select"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">
                            All Locations
                        </option>

                        <option value="kolkata">
                            Kolkata
                        </option>

                        <option value="remote">
                            Remote
                        </option>
                    </select>


                    <button
                        className="search-button"
                        onClick={() => {}}
                    >
                        SEARCH
                    </button>

                </div>

            </section>


            <section className="opportunities-list">

                {filteredOpportunities.length > 0 ? (

                    filteredOpportunities.map((opportunity) => (

                        <div
                            className="opportunity-card"
                            key={opportunity.id}
                        >

                            <p className="opportunity-type">
                                {opportunity.type}
                            </p>

                            <h2 className="opportunity-title">
                                {opportunity.title}
                            </h2>

                            <p className="opportunity-company">
                                {opportunity.company}
                            </p>

                            <p className="opportunity-location">
                                {opportunity.location}
                            </p>


                            <div className="opportunity-skills">

                                {opportunity.skills.map((skill) => (

                                    <span
                                        className="skill-tag"
                                        key={skill}
                                    >
                                        {skill}
                                    </span>

                                ))}

                            </div>


                            <Link
                                to={`/opportunity-details/${opportunity.id}`}
                                className="details-button"
                            >
                                VIEW DETAILS →
                            </Link>

                        </div>

                    ))

                ) : (

                    <div className="no-results">
                        <h2>No Opportunities Found</h2>

                        <p>
                            Try changing your search or filters.
                        </p>
                    </div>

                )}

            </section>

        </div>
    );
}

export default Opportunities;