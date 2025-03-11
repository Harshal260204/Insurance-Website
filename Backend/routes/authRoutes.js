import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Register User (with hashed password)
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone, address, dob, nationality } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password manually before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,  // Storing hashed password
            phone,
            address,
            dob,
            nationality
        });

        res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ Login User (return JWT token)
// ✅ Login User (return JWT token)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id), // ✅ Generate and return JWT token
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// ✅ Logout User
router.post("/logout", (req, res) => {
    res.status(200).json({ message: "Logged out successfully!" });
});

// ✅ Convert a user to an admin (protected route)
router.put("/make-admin/:id", protect, async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access denied" });
        }

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.isAdmin = true;
        await user.save();

        res.json({ message: "User is now an admin" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
