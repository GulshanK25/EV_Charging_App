import express from 'express';
import {createregistrationControllerFn ,loginUserControllerFn} from '../src/user/usercontroler.js';
import { createads, getAds } from '../src/ads/adscontroler.js';
import multer from 'multer';



const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Routes
router.post('/login', loginUserControllerFn);
router.post('/register', createregistrationControllerFn);
router.post('/ads/uploads', upload.single('image'), createads);
router.get('/ads', getAds);

export default router;
