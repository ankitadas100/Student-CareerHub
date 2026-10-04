import React from "react";
import "./Register.css";

function Register() {
    return (
        <div className="register-page">
            <div className="register-box">

                <h1>✦ CareerSpring</h1>

                <h2>Create Your Account</h2>

                <p className="register-text">
                    Start your career journey with CareerSpring.
                </p>

                <form>
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Create a password"
                    />

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                    />

                    <label>College / University</label>
                    <input
                        type="text"
                        placeholder="Enter your college or university"
                    />

                    <label>Graduation Year</label>
                    <select>
                        <option value="">Select year</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                    </select>

                    <button type="submit">
                        CREATE ACCOUNT →
                    </button>
                </form>

                <p className="already-text">
                    Already have an account?
                    <span> LOGIN</span>
                </p>

            </div>
        </div>
    );
}

export default Register;