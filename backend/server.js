
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");
const { registerUser ,loginUser,getStudentProfile} = require("./controllers/userController");
const authMiddleware=require("./middleware/authmiddleware")
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
        message: "CareerSpring API is running!"
    });
});


app.post("/api/users/register", registerUser);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};
app.post("/api/users/login", loginUser);
app.get("/api/users/profile", authMiddleware, getStudentProfile);

startServer();
