//pumpRoutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const PetrolPump = require('../db/PetrolPump');
const {test, addPump} = require("../controllers/pumpController");

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
    })
);
// GET all petrol pumps
router.get('/PetrolPumps', async (req, res) => {
    try {
        const petrolPumps = await PetrolPump.find();
        res.json(petrolPumps);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }
});

// GET petrol pump by ID
router.get('/PetrolPump/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const petrolPump = await PetrolPump.findById(id);
        if (!petrolPump) {
            return res.status(404).json({message: 'Petrol pump not found'});
        }
        res.json(petrolPump);
        console.log(petrolPump)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server error'});
    }
});
// POST route to add a new petrol pump
router.post('/PetrolPumps', addPump);

module.exports = router;
