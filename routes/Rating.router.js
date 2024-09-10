import express from 'express';
import { submitRating } from '../controller/Rating.controller.js';
import {protect} from '../Midelwear/authmeadeleware.js'

const router = express.Router();


router.post('/rate', protect, submitRating);

export default router;
