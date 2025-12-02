import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT ;


//import routes

import authRoutes from './routes/auth.route.js';
import noteRoutes from './routes/note.route.js';

const app = express();
app.use(cors({
  origin: true,          // Reflects the request origin (recommended if you need cookies)
  credentials: true      // Allows cookies and Authorization headers
}))
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Start server after DB connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
  });