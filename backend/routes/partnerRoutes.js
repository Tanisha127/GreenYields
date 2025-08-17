import express from "express";
import Partner from "../models/Partner.js";

const router = express.Router();

// Add new partner
router.post("/", async (req, res) => {
  try {
    const { name, organization, website } = req.body;
    const newPartner = new Partner({ name, organization, website });
    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (err) {
    res.status(500).json({ error: "Failed to save partner" });
  }
});

// Get all partners
router.get("/", async (req, res) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch partners" });
  }
});

export default router;
