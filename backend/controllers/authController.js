const User = require('../db/User');
const {EVBooking, CNGBooking} = require('../db/Booking');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Test endpoint
const test = (req, res) => {
    res.json("Test is working");
};

// Register user endpoint 
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // Check if name is entered
        if (!name) {
            return res.json({error: 'Name is required'});
        }

        // Check if email is entered
        if (!email) {
            return res.json({error: 'Email is required'});
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({error: 'Password is required and should be at least 6 characters long'});
        }

        // Check if email already exists
        const exist = await User.findOne({email});
        if (exist) {
            return res.json({error: "Email already exists"});
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({name, email, password: hashedPassword});
        jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json(user);
        });
        return res.json(user);
    } catch (error) {
        console.log(error);
    }
};

// Login user endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if email is entered
        if (!email) {
            return res.json({error: 'Email is required'});
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({error: 'Password is required and should be at least 6 characters long'});
        }

        // Check if user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.json({error: 'No user found'});
        }

        // Check if password matches
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, `${process.env.JWT_SECRET}`, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
            return res.json(user);
        }

        if (!match) {
            return res.json({error: "Password doesn't match"});
        }
    } catch (error) {
        console.log(error);
    }
};
const getProfile = async (req, res) => {
    try {
        const { userId } = req.query; // Extract userId from query parameters

        // Use userId to fetch user profile data
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find EV slots for the user
        const evSlots = await EVBooking.find({userId: userId}).populate("pumpId");
        // Find CNG slots for the user
        const cngSlots = await CNGBooking.find({ userId: userId });

        // Send user profile data and slots without sensitive information
        const userProfile = {
            name: user.name,
            email: user.email,
            // Add more user details here
        };

        // Return the user profile and slots as an object
        res.json({ userProfile, evSlots, cngSlots });
    } catch (error) {
        console.error('Error fetching user profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};



module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
