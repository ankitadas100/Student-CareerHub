import "./Works.css"
function Works(){
    return(<>
    

<section className="works-section">

    <p className="section-label">YOUR CAREER JOURNEY</p>

    <h2>How CareerSpring Works</h2>

    <p className="section-text">
        A simple path from discovering opportunities to building your career.
    </p>

    <div className="works-container">

        <div className="work-step">
            <span>01</span>
            <h3>Create Profile</h3>
            <p>
                Tell us about your skills, interests and career goals.
            </p>
        </div>

        <div className="work-step">
            <span>02</span>
            <h3>Discover</h3>
            <p>
                Find jobs and internships that match your interests.
            </p>
        </div>

        <div className="work-step">
            <span>03</span>
            <h3>Apply</h3>
            <p>
                Apply to opportunities that are right for you.
            </p>
        </div>

        <div className="work-step">
            <span>04</span>
            <h3>Grow</h3>
            <p>
                Build skills, gain experience and move forward.
            </p>
        </div>

    </div>

</section>
    </>)
}
export default Works;