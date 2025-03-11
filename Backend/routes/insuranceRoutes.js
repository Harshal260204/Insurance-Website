import express from "express";
import Insurance from "../models/insuranceModel.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create a New Insurance Plan (Admin Only)
router.post("/", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const { name, price, coverage, duration, benefits, category } = req.body;

        const newPlan = await Insurance.create({ name, price, coverage, duration, benefits, category });

        res.status(201).json({ message: "Insurance plan created successfully!", plan: newPlan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get All Insurance Plans (For Users)
router.get("/", async (req, res) => {
    try {
        const plans = await Insurance.find();
        res.json(plans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get a Single Insurance Plan by ID
router.get("/:id", async (req, res) => {
    try {
        const plan = await Insurance.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: "Insurance plan not found" });
        }
        res.json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Update Insurance Plan (Admin Only)
router.put("/:id", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const updatedPlan = await Insurance.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedPlan) {
            return res.status(404).json({ message: "Insurance plan not found" });
        }

        res.json({ message: "Insurance plan updated successfully!", plan: updatedPlan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Delete Insurance Plan (Admin Only)
router.delete("/:id", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const deletedPlan = await Insurance.findByIdAndDelete(req.params.id);

        if (!deletedPlan) {
            return res.status(404).json({ message: "Insurance plan not found" });
        }

        res.json({ message: "Insurance plan deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
