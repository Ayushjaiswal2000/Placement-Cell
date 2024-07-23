import express from 'express';
import { getLogin, getSignup, postLogin, postSignup,getDashboard } from '../controllers/authController.js';
import { authenticate } from './../authMiddleware.js';
import { postAddStudent , deleteStudent} from '../controllers/studentController.js';
import { postAddInterview , deleteInterview} from '../controllers/interviewController.js';

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/dashboard', authenticate, getDashboard);
router.post('/add-student', authenticate, postAddStudent);
router.delete('/student/:id',authenticate, deleteStudent);
router.post('/add-interview', authenticate, postAddInterview);
router.delete('/interview/:id',authenticate, deleteInterview);


export default router;
