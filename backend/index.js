const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

// Importing database configuration
require('./db/config');

// Importing User model
const User = require('./db/User');
const PetrolPump = require('./db/PetrolPump');

const app = express();
const port = process.env.PORT || 3000; // Set a default port if PORT is not defined in the environment

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// Routes setup
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/pumpRoutes'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
