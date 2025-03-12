import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Claim from "../models/claimModel.js";
import Policy from "../models/policyModel.js";

const router = express.Router();

// ✅ Create a Claim
router.post("/", protect, async (req, res) => {
  try {
    const { policyId, claimAmount, claimReason } = req.body;

    // Check if the policy exists
    const policy = await Policy.findById(policyId);
    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    // Create a new claim
    const claim = new Claim({
      policy: policyId,
      user: req.user._id,
      claimAmount,
      claimReason,
      claimStatus: "Pending",
    });

    await claim.save();
    res.status(201).json({ message: "Claim submitted successfully", claim });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Get all claims of logged-in user
router.get("/", protect, async (req, res) => {
  try {
    const claims = await Claim.find({ user: req.user._id }).populate("policy", "policyName");
    res.json(claims);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Admin: Approve/Reject a Claim
router.put("/:id", protect, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    const claim = await Claim.findById(req.params.id);
    if (!claim) {
      return res.status(404).json({ message: "Claim not found" });
    }

    claim.claimStatus = req.body.claimStatus || claim.claimStatus;
    await claim.save();

    res.json({ message: `Claim ${claim.claimStatus} successfully`, claim });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
