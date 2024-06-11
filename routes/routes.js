import express from 'express';
import {createregistrationControllerFn ,loginUserControllerFn} from '../src/student/studentcontroler.js';

const router = express.Router();


router.route('/login').post(loginUserControllerFn);
router.route('/create').post(createregistrationControllerFn);

export default router;