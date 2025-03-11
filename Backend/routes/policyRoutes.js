import express from "express";
import Policy from "../models/policyModel.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Create a new policy (Admin Only)
router.post("/", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const { policyName, policyType, description, premiumAmount, coverageAmount, duration, termsAndConditions } = req.body;

        const policy = new Policy({
            policyName,
            policyType,
            description,
            premiumAmount,
            coverageAmount,
            duration,
            termsAndConditions,
        });

        await policy.save();
        res.status(201).json({ message: "Policy created successfully", policy });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get all policies
router.get("/", async (req, res) => {
    try {
        const policies = await Policy.find();
        res.json(policies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get a single policy by ID
router.get("/:id", async (req, res) => {
    try {
        const policy = await Policy.findById(req.params.id);
        if (!policy) {
            return res.status(404).json({ message: "Policy not found" });
        }
        res.json(policy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Update a policy (Admin Only)
router.put("/:id", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const updatedPolicy = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedPolicy) {
            return res.status(404).json({ message: "Policy not found" });
        }

        res.json({ message: "Policy updated successfully", updatedPolicy });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Delete a policy (Admin Only)
router.delete("/:id", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const policy = await Policy.findById(req.params.id);
        if (!policy) {
            return res.status(404).json({ message: "Policy not found" });
        }

        await policy.deleteOne();
        res.json({ message: "Policy deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
