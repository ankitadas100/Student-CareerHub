import react from "react"
import { Link } from "react-router-dom";
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
                    <Link to="/opportunities" className="sub-bar">
                        Opportunities
                    </Link>
                    <Link
                        to="/career-guide"
                        className="sub-bar"
                    >
                        Career Guide
                    </Link>
                    <Link to="/resources" className="sub-bar">
                        Resources
                    </Link>
                    <Link to="/about" className="sub-bar">
                        About
                    </Link>
                </div>
                <div className="main-btn">

                    <Link to="/login" className="login-btn">
                        Login
                    </Link>

                    <Link to="/register" className="join-btn">
                        JOIN NOW
                    </Link>
                </div>

            </div>
        </div>
    )

}
export default Navbar;