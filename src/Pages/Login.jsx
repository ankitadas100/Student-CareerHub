import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div className="login-page">

            <div className="login-box">

                <h1>✦ CareerSpring</h1>

                <h2>Welcome Back</h2>

                <p className="login-text">
                    Continue your career journey with us.
                </p>

                <form>

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                    />

                    <div className="forgot">
                        Forgot Password?
                    </div>

                    <button type="submit">
                        LOGIN →
                    </button>

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