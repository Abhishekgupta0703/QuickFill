const {EVBooking, CNGBooking} = require('../db/Booking');

const evBooking =async(req, res) => {
    try {
        const { userId, pumpId, vehicleNo, timeSlot } = req.body;
        const evBooking = new EVBooking({ userId, pumpId, vehicleNo, timeSlot });
        await evBooking.save();
        res.status(201).send('EV Booking created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const cngBooking = async (req, res) => {
    try {
        const {userId, pumpId, vehicleNo, timeSlot} = req.body;
        const cngBooking = new CNGBooking({userId, pumpId, vehicleNo, timeSlot});
        await cngBooking.save();
        res.status(201).send('CNG Booking created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {evBooking, cngBooking};