
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Check whether the token exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Access denied. Please log in first."
            });
        }

        // Extract the token
        const token = authHeader.split(" ")[1];

        // Verify the token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store the authenticated user's ID
        req.userId = decoded.userId;

        // Continue to the controller
        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token."
        });
    }
};

module.exports = authMiddleware;
