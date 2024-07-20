import express from 'express';
import { getLogin, getSignup, postLogin, postSignup,getDashboard } from '../controllers/authController.js';

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/dashboard', getDashboard);


export default router;
