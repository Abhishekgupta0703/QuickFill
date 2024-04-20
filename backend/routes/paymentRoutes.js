const express = require('express');
const router = express.Router();
const cors = require('cors');

// Middleware for CORS configuration
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
    })
);

router.post('')