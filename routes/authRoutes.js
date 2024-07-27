import express from 'express';
import { getLogin, getSignup, postLogin, postSignup,getDashboard } from '../controllers/authController.js';
import { authenticate } from './../authMiddleware.js';
import { postAddStudent , deleteStudent} from '../controllers/studentController.js';
import { postAddInterview , deleteInterview} from '../controllers/interviewController.js';
import Student from '../models/student.js';

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
router.get('/interview', authenticate, async (req, res) => {
    try {
      const { company, date } = req.query;
      const userName = req.user ? req.user.name : null;
  
      const students = await Student.find({ userId: req.user._id });
    //   const interviews = await Interview.find({ userId: req.user._id });
  
      res.render('interviewPage', { interview: { company, date }, userName, students });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  


export default router;
