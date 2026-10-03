import "./Resources.css"
function Resources(){
    return(<>
    <section className="resources-section">

    <p className="section-label">CAREER RESOURCES</p>

    <h2>Build the Skills Behind Your Next Opportunity.</h2>

    <p className="section-text">
        Get practical resources to prepare for your career.
    </p>

    <div className="resource-cards">

        <div className="resource-card">
            <span>01</span>
            <h3>Resume Building</h3>
            <p>
                Build a strong resume that presents your skills
                and experience clearly.
            </p>
            <button>Learn More →</button>
        </div>

        <div className="resource-card">
            <span>02</span>
            <h3>Interview Preparation</h3>
            <p>
                Prepare for interviews with useful questions,
                tips and practical guidance.
            </p>
            <button>Learn More →</button>
        </div>

        <div className="resource-card">
            <span>03</span>
            <h3>Skill Development</h3>
            <p>
                Discover skills and learning resources that
                can help you become career ready.
            </p>
            <button>Learn More →</button>
        </div>

    </div>

</section>
    </>)
}
export default Resources;