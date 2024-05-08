const Master = require("../db/Master");
const PetrolPump = require("../db/PetrolPump");
const {comparePassword, hashPassword} = require("../helpers/auth");
const jwt = require('jsonwebtoken');
const test = (req, res) => {
    res.json("Test is working");
}

const masterRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body;
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
        const exist = await Master.findOne({email});
        if (exist) {
            return res.json({error: "Email already exists"});
        }
        const hashedPassword = await hashPassword(password);
        const master = await Master.create({name, email, password: hashedPassword});
        jwt.sign({email: master.email, id: master._id, name: master.name}, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) throw err;
            res.cookie("master", token, {httpOnly: true}).status(200).send({
                success: true,
                message: "Logged in successfully!",
            })
        })
        return res.json(master)
    }
    catch (err) {
        console.log(err);
        return res.json({error: 'Something went wrong'});
    }
}





const masterLogin = async (req, res) => {
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
        const master = await Master.findOne({email});
        if (!master) {
            return res.json({error: "Email does not exist"});
        }
        const match = await comparePassword(password, master.password);
        if (!match) {
            return res.json({error: "Password doesn't match"});
        }
        if (match) {
            jwt.sign({email: master.email, id: master._id, name: master.name}, `${process.env.JWT_SECRET}`, {}, (err, token) => {
                if (err) throw err;
                res.cookie('master', token).json(master);
            });
            return res.json(master);
        }

    }
    catch {
        console.log(error);
        return res.json({error: 'Something went wrong'});
    }

}
const pumpList = async (req, res) => {

    try {
        // Fetch all petrol pumps from the database
        const petrolPumps = await PetrolPump.find();

        // Send the list of petrol pumps as a response
        res.status(200).json({petrolPumps});
    } catch (error) {
        console.error('Error fetching petrol pumps:', error);
        res.status(500).json({error: 'Server error'});
    }

}

module.exports = {
    masterLogin,
    masterRegister,
    pumpList,
    test
}