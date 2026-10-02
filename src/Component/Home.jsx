import "./Home.css"
function Home(){
    return(<>
    <section className="looking-section">

    <p className="section-label">EXPLORE CAREERSPRING</p>

    <h2>What Are You Looking For?</h2>

    <p className="section-text">
        Find the right starting point for your career journey.
    </p>

    <div className="looking-cards">

        <div className="looking-card">
            <span>01</span>
            <h3>Find a Job</h3>
            <p>
                Explore fresher-friendly jobs and start your professional journey.
            </p>
            <button>Explore Jobs →</button>
        </div>

        <div className="looking-card">
            <span>02</span>
            <h3>Find an Internship</h3>
            <p>
                Discover internships that help you gain real-world experience.
            </p>
            <button>Explore Internships →</button>
        </div>

        <div className="looking-card">
            <span>03</span>
            <h3>Build Your Career</h3>
            <p>
                Improve your skills, resume and interview preparation.
            </p>
            <button>Explore Resources →</button>
        </div>

    </div>

</section>
    </>)
}

export default Home;