import express from "express";
import cors from "cors";
import User from "./schema.js"

const app = express();

app.use(cors({
  origin: [
    "https://instaproject-frontend-kkw6.vercel.app",
    "https://get-followers-instagram-com.vercel.app",
    "http://localhost:3000"
  ],
  credentials: true
}));

app.use (express.json());

// GET API

app.get ("/", (req, res) => {
    res.send("home api i running")
});

//POST API 

app.post("/userdata", async (req, res) => {
    console.log(req.body);
    const data = await User.create(req.body)
    res.json({
        message: "Data received successfully",
        data:req.body
    });
});
export default app;