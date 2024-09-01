import express from 'express';
import { getLogin, getSignup, postLogin, postSignup,getDashboard , getHome} from '../controllers/authController.js';
import { authenticate } from './../authMiddleware.js';
import { postAddStudent , deleteStudent , updateStudentStatus} from '../controllers/studentController.js';
import { postAddInterview , deleteInterview,addStudentsToInterview,getInterviewDetails} from '../controllers/interviewController.js';
import Student from '../models/student.js';

const router = express.Router();


router.get('/', getHome);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignup);
router.post('/signup', postSignup);
router.get('/dashboard', authenticate, getDashboard);
router.post('/add-student', authenticate, postAddStudent);
router.delete('/student/:id',authenticate, deleteStudent);
router.post('/add-interview', authenticate, postAddInterview);
router.delete('/interview/:id',authenticate, deleteInterview);
router.get('/interview', authenticate, getInterviewDetails);


  router.post('/interviews/add-students',authenticate, addStudentsToInterview);

  router.post('/update-student-status', authenticate, updateStudentStatus);
  


export default router;
