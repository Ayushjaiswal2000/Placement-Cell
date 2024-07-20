
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getLogin = (req, res) => {
    res.render('login', { error: req.session.error });
    req.session.error = null; // Clear the error message after displaying it
  };

  export const getSignup = (req, res) => {
    res.render('signup', { error: req.session.error });
    req.session.error = null; // Clear the error message after displaying it
  };

  export const getDashboard = (req, res) => {
    res.render('dashboard', { error: req.session.error });
    req.session.error = null; // Clear the error message after displaying it
  };

export const postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        req.session.error = 'Invalid email or password';
        return res.redirect('/login');
      }
      // Create a JWT token and set it in a cookie
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
      res.cookie('authToken', token, { httpOnly: true });
      res.redirect('/dashboard'); // Redirect to a secure page
    } catch (error) {
      req.session.error = 'An error occurred';
      res.redirect('/login');
    }
  };

  export const postSignup = async (req, res) => {
    const { email, name, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, name, password: hashedPassword });
      await user.save();
      res.redirect('/login');
    } catch (error) {
      req.session.error = 'An error occurred during registration';
      res.redirect('/signup');
    }
  };



