import mongoose from "mongoose";

const claimSchema = new mongoose.Schema(
  {
    policy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Policy",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    claimAmount: {
      type: Number,
      required: true,
    },
    claimReason: {
      type: String,
      required: true,
    },
    claimStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Claim = mongoose.model("Claim", claimSchema);
export default Claim;
