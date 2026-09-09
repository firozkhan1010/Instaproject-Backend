import express from "express";
import cors from "cors";
import User from "./schema.js";

const app = express();

app.use(cors({
    origin: [
        "https://instaproject-frontend-kkw6.vercel.app",
        "https://get-followers-instagram-com.vercel.app",
        "http://localhost:3000",
        "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("home api is running");
});

app.post("/userdata", async (req, res) => {
    try {
        console.log(req.body);

        const data = await User.create(req.body);

        res.json({
            message: "Data received successfully",
            data: req.body
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

export default app;