
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return JSON.parse(
                localStorage.getItem("careerSpringCurrentUser")
            );
        } catch {
            return null;
        }
    });

    const location = useLocation();

    // Sync login/logout changes
    useEffect(() => {
        const syncUser = () => {
            try {
                setCurrentUser(
                    JSON.parse(
                        localStorage.getItem("careerSpringCurrentUser")
                    )
                );
            } catch {
                setCurrentUser(null);
            }
        };

        window.addEventListener("careerSpringAuthChanged", syncUser);
        window.addEventListener("storage", syncUser);

        return () => {
            window.removeEventListener("careerSpringAuthChanged", syncUser);
            window.removeEventListener("storage", syncUser);
        };
    }, []);

    // Close sidebar when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Prevent background scrolling while sidebar is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const handleLogout = () => {
        localStorage.removeItem("careerSpringCurrentUser");
        window.dispatchEvent(new Event("careerSpringAuthChanged"));
        setCurrentUser(null);
        closeMenu();
    };

    const studentName = currentUser?.fullName || "Guest Student";
    const studentEmail = currentUser?.email || "Login to view your account";

    return (
        <div className="navbar-container">
            {/* Utility bar */}
            <div className="main-box">
                <div className="main-content">
                    <div className="sub-content">
                        CAREERSPRING FOR STUDENTS
                    </div>
                    <div className="sub-content">FOR RECRUITERS</div>
                    <div className="sub-content">RESOURCES</div>
                    <div className="sub-content">Help</div>
                </div>
            </div>

            {/* Main navbar */}
            <nav className="navbar">
                <Link to="/" className="logo" onClick={closeMenu}>
                    ✦ CareerSpring
                </Link>

                <div className="nav-links">
                    <Link to="/opportunities" className="sub-bar">
                        Opportunities
                    </Link>

                    <Link to="/career-guide" className="sub-bar">
                        Career Guide
                    </Link>

                    <Link to="/resources" className="sub-bar">
                        Resources
                    </Link>

                    <Link to="/about" className="sub-bar">
                        About
                    </Link>
                </div>

                {/* Login state */}
                <div className="main-btn">
                    {currentUser ? (
                        <button
                            type="button"
                            className="navbar-user"
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open student account menu"
                        >
                            <span className="navbar-user-avatar">
                                {studentName.charAt(0).toUpperCase()}
                            </span>
                            <span className="navbar-user-name">
                                {studentName}
                            </span>
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="login-btn">
                                Login
                            </Link>

                            <Link to="/register" className="join-btn">
                                JOIN NOW
                            </Link>
                        </>
                    )}
                </div>

                {/* Three-line hamburger */}
                <button
                    type="button"
                    className={`hamburger-btn ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen((previous) => !previous)}
                    aria-label={menuOpen ? "Close menu" : "Open student menu"}
                    aria-expanded={menuOpen}
                    aria-controls="student-sidebar"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Sidebar backdrop */}
            <div
                className={`sidebar-backdrop ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            ></div>

            {/* Student sidebar */}
            <aside
                id="student-sidebar"
                className={`student-sidebar ${menuOpen ? "open" : ""}`}
                aria-hidden={!menuOpen}
            >
                {/* Student information */}
                <div className="sidebar-header">
                    <div className="sidebar-student">
                        <div className="sidebar-avatar">
                            <span>{studentName.charAt(0).toUpperCase()}</span>
                        </div>

                        <div className="sidebar-student-info">
                            <h3>{studentName}</h3>
                            <p>{studentEmail}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="sidebar-close"
                        onClick={closeMenu}
                        aria-label="Close student menu"
                    >
                        &times;
                    </button>
                </div>

                <div className="sidebar-section-label">
                    STUDENT SPACE
                </div>

                {/* Student navigation */}
                <div className="sidebar-links">
                    <Link
                        to="/student-dashboard"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">⌂</span>
                        <span>My Dashboard</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>

                    <Link
                        to="/student-profile"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">♙</span>
                        <span>My Profile</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>

                    <Link
                        to="/my-applications"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">▤</span>
                        <span>My Applications</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>

                    <Link
                        to="/saved-opportunities"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">♧</span>
                        <span>Saved Opportunities</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>

                    <Link
                        to="/career-guide"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">◇</span>
                        <span>Career Guide</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>
                </div>

                <div className="sidebar-divider"></div>

                {/* Account links */}
                <div className="sidebar-links">
                    <Link
                        to="/student-profile"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">⚙</span>
                        <span>Account Settings</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>

                    <Link
                        to="/about"
                        className="sidebar-link"
                        onClick={closeMenu}
                    >
                        <span className="sidebar-icon">?</span>
                        <span>Help &amp; Support</span>
                        <span className="sidebar-arrow">›</span>
                    </Link>
                </div>

                {/* Login / logout footer */}
                <div className="sidebar-footer">
                    {currentUser ? (
                        <button
                            type="button"
                            className="sidebar-logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="sidebar-login-link"
                                onClick={closeMenu}
                            >
                                Login to your account
                            </Link>

                            <Link
                                to="/register"
                                className="sidebar-register-link"
                                onClick={closeMenu}
                            >
                                Create Student Account
                                <span>↗</span>
                            </Link>
                        </>
                    )}

                    <p>Build your future with CareerSpring.</p>
                </div>
            </aside>
        </div>
    );
}

export default Navbar;
