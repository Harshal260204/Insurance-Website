import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  // Hashed before saving in routes
    phone: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date, required: true },
    nationality: { type: String, required: true },
    profilePic: { type: String, default: "" }, // Optional
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
