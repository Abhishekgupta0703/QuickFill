const Pump=require('../db/PetrolPump')
const {EVBooking, CNGBooking} = require('../db/Booking');
const {hashPassword, comparePassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const loginPump = async (req, res) => {
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
        const pump = await Pump.findOne({email});
        if (!pump) {
            return res.json({error: 'No pump found'});
        }

        if (password !== pump.password) {
            return res.json({ error: "Password doesn't match" });
        }
        // const match = await comparePassword(password, pump.password);

        jwt.sign({ pumpName: pump.name, email:pump.email, id: pump._id }, `${process.env.JWT_SECRET}`, {}, (err, token) => {
            if (err) throw err;
            res.cookie('pumpToken', token).json(pump);
        });
        // // Check if password matches
        // const match = await comparePassword(password, pump.password);
        // if (match) {
        //     jwt.sign({email: user.email, id: user._id, name: user.name}, `${process.env.JWT_SECRET}`, {}, (err, token) => {
        //         if (err) throw err;
        //         res.cookie('token', token).json(user);
        //     });
        // }

        // if (!match) {
        //     return res.json({error: "Password doesn't match"});
        // }
    } catch (error) {
        console.log(error);
    }
};

const pumpDashboard = async (req, res) => {
    try {
        const { pumpId } = req.query; // Extract pumpId from query parameters

        // Use pumpId to fetch pump profile data
        const pump = await Pump.findOne({ _id: pumpId });
        if (!pump) {
            return res.status(404).json({ message: 'Pump not found' });
        }

        // Find EV slots for the pump
        const evSlots = await EVBooking.find({pumpId: pumpId});
        // Find CNG slots for the pump
        const cngSlots = await CNGBooking.find({ pumpId: pumpId });

        // Send pump profile data and slots without sensitive information
        const pumpProfile = pump

        // Return the pump profile and slots as an object
        res.json({ pumpProfile, evSlots, cngSlots });
    } catch (error) {
        console.error('Error fetching pump profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};
module.exports = {
    loginPump,
    pumpDashboard,
}