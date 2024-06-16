import mongoose from 'mongoose';
import gridfsStream from 'gridfs-stream';
import multer from 'multer';

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.connection);

        console.log("MongoDB connected:", conn.connection.name);

        // Initialize GridFS
        let gfs;
        const db = mongoose.connection.db;
        gfs = gridfsStream(db, mongoose.mongo);
        gfs.collection('uploads');

        // Setup multer storage
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './uploads'); // Set your upload destination here
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname); // Keep original filename
            }
        });

        const upload = multer({ storage });

        return { conn, gfs, upload };
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
        process.exit(1); // Exit process with failure
    }
};

export { connectdb };