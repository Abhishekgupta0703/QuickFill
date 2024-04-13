// pumpController.js
const Pump = require("../db/PetrolPump");

const test = (req, res) => {
  res.json("this is also working");
  console.log("Good Test");
};

const addPump = async (req, res) => {
  try {
    const { pd, name, location, charger, cng } = req.body;
    if (!pd || pd.length != 6) {
      return res.status(400).send({ error: "6 Alphanumeric ID is Required." });
    }
    if (!name) {
      return res.status(400).send({ error: "Station Name is required." });
    }
    if (!location) {
      return res.status(400).send({ error: "Location is required." });
    }
    const exist = await Pump.findOne({ pd });
    if (exist) {
      return res.status(409).send({ error: "This Station already exists." });
    }
    const newPump = await Pump.create({
      pd,
      name,
      location,
      charger,
      cng
    });
    return res.status(201).send({ message: newPump });
  } catch (error) {
    console.log("Error in adding pump : ", error);
    res.status(500).json({ message: "Server error" });
  }
};
// Get all the petrol pumps from the database
const listPump = async (req, res) => {
  try {
    const petrolPumps = await Pump.find();
    res.json(petrolPumps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const searchForAPump = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const petrolPump = await Pump.findById(id);
    if (!petrolPump) {
      return res.status(404).json({ message: "Petrol pump not found" });
    }
    res.json(petrolPump);
    console.log(petrolPump);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: `Server error ${err}` });
  }
};
module.exports = {
  // test
  test,
  //add new petrol pump to the database
  addPump: addPump,
  //get all petrol pumps from the database
  getAllPumps: listPump,
  // search for a specific petrol pump by its id
  searchForAPump: searchForAPump
};
