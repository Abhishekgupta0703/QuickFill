const User = require('../db/User');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

// Test endpoint
const test = (req, res) =>
{
    res.json("Test is working");
};

// Register user endpoint
const registerUser = async (req, res) =>
{
    try {
        const { name, email, password } = req.body;

        // Check if name is entered
        if (!name) {
            return res.json({ error: 'Name is required' });
        }

        // Check if email is entered
        if (!email) {
            return res.json({ error: 'Email is required' });
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check if email already exists
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: "Email already exists" });
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword });

        return res.json(user);
    } catch (error) {
        console.log(error);
    }
};

// Login user endpoint
const loginUser = async (req, res) =>
{
    try {
        const { email, password } = req.body;

        // Check if email is entered
        if (!email) {
            return res.json({ error: 'Email is required' });
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: 'No user found' });
        }

        // Check if password matches
        const match = await comparePassword(password, user.password);
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) =>
            {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
        }

        if (!match) {
            return res.json({ error: "Password doesn't match" });
        }
    } catch (error) {
        console.log(error);
    }
};

// Get user profile endpoint
const getProfile = (req, res) =>
{
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) =>
        {
            if (err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
