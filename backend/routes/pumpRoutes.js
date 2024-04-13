//pumpRoutes.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, addPump, getAllPumps, searchForAPump} = require("../controllers/pumpController");

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173' // Update this with the actual origin of your frontend
    })
);
//Testing route to see if server is running
router.get('/PetrolPumps/Test', test);
// POST route to add a new petrol pump
router.post('/AddPetrolPump', addPump);
// GET all petrol pumps
router.get('/PetrolPumps', getAllPumps);
// GET petrol pump by ID
router.get('/PetrolPumps/:id', searchForAPump);

module.exports = router;
