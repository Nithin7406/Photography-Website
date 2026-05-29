// server/routes/delete.js

import express from "express";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { public_id } = req.body;

    if (!public_id) {
      return res.status(400).json({ message: "public_id is required" });
    }

    const result = await cloudinary.uploader.destroy(public_id);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
      error: error.message,
    });
  }
});

export default router;
