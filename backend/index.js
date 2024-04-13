const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Importing database configuration
require('./db/config');

// Importing User model
const User = require('./db/User');
const PetrolPump = require('./db/PetrolPump');

const app = express();
const port = process.env.PORT || 3000; // Set a default port if PORT is not defined in the environment

// Middleware setup
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret:  `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 1 day expiration
    }
}));
// Routes setup
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/pumpRoutes'));
app.use('/', require('./routes/bookingRoutes'));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
