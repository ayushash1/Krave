import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middleware to enable CORS
app.use(cors(
  
));
// middleware to parse JSON request bodies
app.use(express.json());
// cookie parser middleware
app.use(cookieParser());

// use auth routes
app.use("/api/auth", authRouter);



// start the server on the specified port
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

// route for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
