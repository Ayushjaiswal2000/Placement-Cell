import User from '../models/User.js';
import Student from '../models/student.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Interview from '../models/interview.js';

// Render login page with error if any

const saltRounds = 10;
export const getLogin = (req, res) => {
  res.render('login', { error: null });
};

// Render signup page with error if any
export const getSignup = (req, res) => {
  res.render('signup', { error: null });
};

// Render dashboard with user's name, user info provided by authenticate middleware
export const getDashboard = async (req, res) => {
  try {
    const userName = req.user ? req.user.name : null;
    const showNotification = req.query.success === 'true';

    // Fetch students associated with the logged-in user
    const students = await Student.find({ userId: req.user._id });
    const interviews = await Interview.find({ userId: req.user._id });

    res.render('dashboard', { title: 'Dashboard', userName, showNotification, students ,interviews});
  } catch (error) {
    console.error(error);
    res.redirect('/login');
  }
};

// Handle login
// Handle login
export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  try {
    const user = await User.findOne({ email });
    console.log("User found: ", user);

    if (!user) {
      console.log("User not found");
      return res.render('login', { error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("Password match: ", passwordMatch);

    if (!passwordMatch) {
      console.log("Password does not match");
      return res.render('login', { error: 'Invalid email or password' });
    }

    // Create a JWT token and set it in a cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('authToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict' });

    console.log("Token generated and set in cookie");
    // Redirect to dashboard with success query parameter
    res.redirect('/dashboard?success=login');
  } catch (error) {
    console.error('Login Error:', error);
    res.render('login', { error: 'An error occurred. Please try again later.' });
  }
};


// Handle signup
export const postSignup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password: ", hashedPassword);
    const user = new User({ email, name, password: hashedPassword });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    console.error('Signup Error:', error);
    res.render('signup', { error: 'An error occurred during registration' });
  }
};


