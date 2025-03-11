import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import path from "path";
import { fileURLToPath } from "url"; // ✅ Import this properly

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


// Routes 
app.use("/api/auth", authRoutes);

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
