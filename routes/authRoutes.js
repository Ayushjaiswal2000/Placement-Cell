import express from 'express';
import { getLogin, getSignup, postLogin, postSignup,getDashboard } from '../controllers/authController.js';
import { authenticate } from './../authMiddleware.js';
import { postAddStudent , deleteStudent} from '../controllers/studentController.js';

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/dashboard', authenticate, getDashboard);
router.post('/add-student', authenticate, postAddStudent);
router.delete('/student/:id',authenticate, deleteStudent);


export default router;
