
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";

async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message] = useState(
        location.state?.registered ? "Account created! Please log in." : ""
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Please enter your email and password.");
            return;
        }

        try {
            const users = JSON.parse(localStorage.getItem("careerSpringUsers") || "[]");
            const normalizedEmail = email.trim().toLowerCase();
            const passwordHash = await hashPassword(password);

            const user = users.find(
                (item) =>
                    item.email === normalizedEmail &&
                    item.passwordHash === passwordHash
            );

            if (!user) {
                setError("Incorrect email or password. Please try again.");
                return;
            }

            const { passwordHash: ignored, ...safeUser } = user;
            localStorage.setItem("careerSpringCurrentUser", JSON.stringify(safeUser));

            // Update the existing navbar immediately.
            window.dispatchEvent(new Event("careerSpringAuthChanged"));

            navigate("/student-dashboard", { replace: true });
        } catch {
            setError("Unable to log in. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h1>✦ CareerSpring</h1>
                <h2>Welcome Back</h2>
                <p className="login-text">
                    Continue your career journey with us.
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                    />

                    <div className="forgot">Forgot Password?</div>

                    {message && (
                        <p role="status" style={{ color: "#166534" }}>{message}</p>
                    )}
                    {error && (
                        <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>
                    )}

                    <button type="submit">LOGIN →</button>
                </form>

                <p className="register-text">
                    Don't have an account?
                    <Link to="/register"> JOIN NOW</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
