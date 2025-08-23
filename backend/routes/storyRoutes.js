import express from "express";
import Story from "../models/Story.js";

const router = express.Router();

// POST new story
router.post("/", async (req, res) => {
  try {
    const { title, district, practice, summary } = req.body;

    if (!title || !district || !practice || !summary) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const story = new Story({ title, district, practice, summary });
    await story.save();

    res.status(201).json(story);
  } catch (err) {
    console.error("Error saving story:", err.message);
    res.status(400).json({ error: err.message });
  }
});

// GET all stories
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const stories = await Story.find()
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(stories);
  } catch (err) {
    console.error("Error fetching stories:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
