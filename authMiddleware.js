import jwt from 'jsonwebtoken';
import User from './models/User.js'; // Ensure you have the correct path to your User model

export const authenticate = async (req, res, next) => {
  try {
    // Retrieve the token from cookies
    const token = req.cookies.authToken;
    console.log("Token from cookies: ", token);
    
    if (!token) {
      return res.redirect('/login'); // No token found, redirect to login
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded: ", decoded);

    // Fetch the user from the database
    req.user = await User.findById(decoded.id);
    console.log("User found by ID: ", req.user);
    
    if (!req.user) {
      return res.redirect('/login'); // User not found, redirect to login
    }

    next(); // Token is valid, proceed to next middleware/route handler
  } catch (error) {
    console.error('Authentication Error:', error);
    res.redirect('/login'); // On error, redirect to login
  }
};
