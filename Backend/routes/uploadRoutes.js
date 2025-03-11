import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Upload Image Route
router.post("/", upload.single("image"), (req, res) => {
    try {
        res.json({ imagePath: `/uploads/${req.file.filename}` });
    } catch (error) {
        res.status(500).json({ message: "Image upload failed!" });
    }
});

export default router;
