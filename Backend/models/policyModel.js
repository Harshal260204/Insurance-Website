import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    policyName: { type: String, required: true },
    policyType: { type: String, required: true }, // e.g., Health, Life, Auto
    description: { type: String },
    premiumAmount: { type: Number, required: true }, // Monthly/Yearly premium
    coverageAmount: { type: Number, required: true }, // Maximum coverage
    duration: { type: Number, required: true }, // Policy duration in years
    termsAndConditions: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Policy = mongoose.model("Policy", policySchema);
export default Policy;
