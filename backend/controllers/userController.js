const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const {
            fullName,
            email,
            password,
            college,
            graduationYear
        } = req.body;

       
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required"
            });
        }

       
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        
        const normalizedEmail = email.trim().toLowerCase();

       
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists"
            });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

       
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
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        
        const user = await User.findOne({
            email: email.trim().toLowerCase()
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

       
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

     
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                college: user.college,
                graduationYear: user.graduationYear
            }
        });

    } catch (error) {
        console.error("Login error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Server error during login"
        });
    }
};

const getStudentProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Student not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student profile fetched successfully.",
            user: user
        });

    } catch (error) {
        console.error("Profile error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch student profile."
        });
    }
};


module.exports = { registerUser,loginUser ,getStudentProfile };