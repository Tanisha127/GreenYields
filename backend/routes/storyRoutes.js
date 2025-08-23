import express from "express";
import Story from "../models/Story.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log('POST /api/stories body:', req.body);
    const story = new Story(req.body);
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const stories = await Story.find().sort({ createdAt: -1 }).limit(limit);
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router; 
