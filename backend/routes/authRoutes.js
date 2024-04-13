const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, profile } = require('../controllers/authController');

// Middleware for CORS configuration
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
    })
);

// Route for testing
router.get('/', test);

// Route for user registration
router.post('/signup', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for getting user profile
router.get('/Profile', getProfile);

// Export the router for use in other files
module.exports = router;
