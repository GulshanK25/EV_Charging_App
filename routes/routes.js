// routes/routes.js
import express from 'express';
import multer from 'multer';
import { createAds, getAds, getAdById } from '../src/ads/adscontroler.js';
import { createregistrationControllerFn, loginUserControllerFn } from '../src/user/usercontroler.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

router.post('/login', loginUserControllerFn);
router.post('/register', createregistrationControllerFn);
router.post('/ads/uploads', upload.single('image'), createAds);
router.get('/ads', getAds);
router.get('/ads/:id', getAdById);

export default router;
