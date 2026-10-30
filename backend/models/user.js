const User = require("../models/user");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            college,
            graduationYear
        } = req.body;

        // 1. Validate required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required"
            });
        }

        // 2. Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // 3. Check existing user
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists"
            });
        }

        // 4. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. Create user
        const user = await User.create({
            fullName: fullName.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            college: college?.trim() || "",
            graduationYear: graduationYear
                ? Number(graduationYear)
                : null
        });

        // 6. Send response without password
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
        console.error("Registration error:", error);

        // Handle duplicate email race condition
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