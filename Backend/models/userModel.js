import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date, required: true },
    nationality: { type: String, required: true },
    profilePic: { type: String, default: "" }, // Optional
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error); // Pass error to middleware
    }
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
    try {
        return await bcrypt.compare(enteredPassword, this.password);
    } catch (error) {
        throw new Error("Error comparing password");
    }
};

const User = mongoose.model("User", userSchema);
export default User;
