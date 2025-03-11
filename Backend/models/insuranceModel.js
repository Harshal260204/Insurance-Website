import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        coverage: { type: String, required: true },  // Description of coverage
        duration: { type: String, required: true },  // e.g., "1 Year", "6 Months"
        benefits: [{ type: String }],  // Array of benefits
        category: { type: String, enum: ["Health", "Car", "Life", "Travel"], required: true }, // Define types of insurance
    },
    { timestamps: true }
);

const Insurance = mongoose.model("Insurance", insuranceSchema);
export default Insurance;
