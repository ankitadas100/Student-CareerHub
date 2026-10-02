import React from "react";
import "./Hero.css";

function Home() {
  return (
    <div className="home">

   
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tagline">
            YOUR FUTURE BEGINS HERE
          </p>

          <h1>
            Start Your Journey.
            <br />
            <span>Build Your Future.</span>
          </h1>

          <p className="hero-description">
            Discover internships, fresher jobs, and career
            opportunities designed for students and fresh
            graduates. Take your first step toward a
            successful career with CareerSpring.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">
              EXPLORE OPPORTUNITIES →
            </button>

            <button className="profile-btn">
              CREATE YOUR PROFILE
            </button>
          </div>

        </div>

      </section>

     
      <section className="feature-section">

        <div className="feature-card">
          <div className="feature-icon">🎓</div>

          <h3>Student First</h3>

          <p>
            A platform designed for students and
            fresh graduates starting their careers.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💼</div>

          <h3>Career Ready</h3>

          <p>
            Explore career resources, interview
            preparation, and professional guidance.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌐</div>

          <h3>Career Opportunities</h3>

          <p>
            Discover internships, fresher jobs,
            and opportunities that match your skills.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;