import multer from "multer";
import path from "path";

// Set Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// File Type Check
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        return cb(new Error("Only JPG, JPEG, PNG files are allowed!"));
    }
};

// Upload Middleware
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max size
    fileFilter,
});

export default upload;
