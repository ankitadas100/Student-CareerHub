import react from "react"
import "./Navbar.css";
function Navbar() {
    return (
        <div className="navbar-container">
            <div className="main-box">
                <div className="main-content">
                    <div className="sub-content">CAREERSPRING FOR STUDENTS </div>
                    <div className="sub-content"> FOR RECRUITERS </div>
                    <div className="sub-content">  RESOURCES  </div>
                    <div className="sub-content">Help</div>
                </div>

            </div>
            <div className="navbar">

                <div className="logo">
                    ✦ CareerSpring
                </div>

                <div className="nav-links">
                    <div className="sub-bar">Opportunities</div>
                    <div className="sub-bar">Career Guide</div>
                    <div className="sub-bar">Resources</div>
                    <div className="sub-bar">About</div>
                </div>
               <div className="main-btn">

                <button className="login-btn">
                    Login
                </button>

                <button className="join-btn">
                    JOIN NOW
                </button>
                </div>

            </div>
            </div>
    )
    
}
            export default Navbar;