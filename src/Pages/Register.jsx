
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        college: "",
        graduationYear: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { fullName, email, password, confirmPassword, college, graduationYear } = form;

        if (!fullName.trim() || !email.trim() || !password ||
            !confirmPassword || !college.trim() || !graduationYear) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 8) {
            setError("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const users = JSON.parse(localStorage.getItem("careerSpringUsers") || "[]");
            const normalizedEmail = email.trim().toLowerCase();

            if (users.some((user) => user.email === normalizedEmail)) {
                setError("An account with this email already exists. Please log in.");
                return;
            }

            const passwordHash = await hashPassword(password);

            users.push({
                id: crypto.randomUUID(),
                fullName: fullName.trim(),
                email: normalizedEmail,
                passwordHash,
                college: college.trim(),
                graduationYear,
            });

            localStorage.setItem("careerSpringUsers", JSON.stringify(users));

            // Keep the existing student-profile feature in sync.
            localStorage.setItem("studentProfile", JSON.stringify({
                fullName: fullName.trim(),
                email: normalizedEmail,
                phone: "",
                college: college.trim(),
                course: "BCA",
                graduationYear,
                skills: [],
                projects: [],
                resumeName: "",
            }));

            navigate("/login", {
                state: { registered: true, email: normalizedEmail },
            });
        } catch {
            setError("Unable to create your account. Please try again.");
        }
    };

    return (
        <div className="register-page">
            <div className="register-box">
                <h1>✦ CareerSpring</h1>
                <h2>Create Your Account</h2>
                <p className="register-text">
                    Start your career journey with CareerSpring.
                </p>

                <form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <input name="fullName" value={form.fullName}
                        onChange={handleChange} type="text"
                        placeholder="Enter your full name" autoComplete="name" />

                    <label>Email Address</label>
                    <input name="email" value={form.email}
                        onChange={handleChange} type="email"
                        placeholder="Enter your email" autoComplete="email" />

                    <label>Password</label>
                    <input name="password" value={form.password}
                        onChange={handleChange} type="password"
                        placeholder="Create a password" autoComplete="new-password" />

                    <label>Confirm Password</label>
                    <input name="confirmPassword" value={form.confirmPassword}
                        onChange={handleChange} type="password"
                        placeholder="Confirm your password" autoComplete="new-password" />

                    <label>College / University</label>
                    <input name="college" value={form.college}
                        onChange={handleChange} type="text"
                        placeholder="Enter your college or university" />

                    <label>Graduation Year</label>
                    <select name="graduationYear" value={form.graduationYear}
                        onChange={handleChange}>
                        <option value="">Select year</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                    </select>

                    {error && <p role="alert" style={{ color: "#b91c1c" }}>{error}</p>}

                    <button type="submit">CREATE ACCOUNT →</button>
                </form>

                <p className="already-text">
                    Already have an account?
                    <Link to="/login"> LOGIN</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
