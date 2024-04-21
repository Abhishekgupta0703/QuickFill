const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Importing database configuration
require('./db/config');


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


// Routes setup
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/pumpRoutes'));
app.use('/', require('./routes/bookingRoutes'));
app.use('/', require('./routes/adminRoutes'));
app.use('/', require('./routes/masterRoutes'));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
