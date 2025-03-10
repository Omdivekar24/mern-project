const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require('../models/User');

const router = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ isAuthenticated: false });

  jwt.verify(token, "your_secret_key", (err, user) => {
      if (err) return res.json({ isAuthenticated: false });
      req.user = user;
      next();
  });
};

// Check authentication status
router.get("/check-auth", verifyToken, (req, res) => {
  res.json({ isAuthenticated: true, user: req.user });
});


// Register Route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        res.json({ message: "User Registered Successfully" });
        console.log("User Registered:", user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error during registration" });
    }
});

// Login Route
router.post('/login', async (req, res) => {
 
    const { email, password } = req.body;
    try {
        // Check if the user exists in MongoDB
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found. Please register first!" });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        res.json({ message: "Login Successful", username: user.username });
      } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
});

module.exports = router;
