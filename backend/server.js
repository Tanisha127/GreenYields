import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import storyRoutes from "./routes/storyRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import partnerRoutes from "./routes/partnerRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://greenyields-1.onrender.com'], // frontend URL
  methods: ['GET','POST'],
}));
app.use(express.json()); // to parse JSON requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/stories", storyRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/partners", partnerRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(()=> console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));
