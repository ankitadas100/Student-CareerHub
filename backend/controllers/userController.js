const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            college,
            graduationYear
        } = req.body;

        // Validate required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required"
            });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Check if user already exists
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists"
            });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in MongoDB
        const user = await User.create({
            fullName: fullName.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            college: college?.trim() || "",
            graduationYear: graduationYear
                ? Number(graduationYear)
                : null
        });

        return res.status(201).json({
            success: true,
            message: "Registration successful",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                college: user.college,
                graduationYear: user.graduationYear
            }
        });

    } catch (error) {
        console.error("Registration error:", error.message);

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Server error during registration"
        });
    }
};

module.exports = { registerUser };