// pumpController.js
const Pump = require("../db/PetrolPump");

const test = (req, res) => {
    res.json("this is also working")
};

const addPump = async (req, res) => {
    try {
        const {pd, name, location, charger, cng} = req.body;
        if (!pd || pd.length != 6) {
            return res.status(400).send({error: "6 Alphanumeric ID is Required."})
        }
        if (!name) {
            return res.status(400).send({error: "Station Name is required."});
        };
        if (!location) {
            return res.status(400).send({error: "Location is required."});
        }
        const exist = await Pump.findOne({pd});
        if (exist) {
            return res.status(409).send({error: "This Station already exists."});
        }
        const newPump = await Pump.create({
            pd,
            name,
            location,
            charger,
            cng,
        });
        return res.status(201).send({message: newPump});
    }

    catch (error) {
        console.log('Error in adding pump : ', error);
        res.status(500).json({message: 'Server error'});

    }
}
module.exports = {
    test,
    //add new petrol pump to the database
    addPump: addPump
}