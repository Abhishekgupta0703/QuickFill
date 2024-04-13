// Booking.js
const mongoose = require('mongoose');

// Schema for EV bookings
const EVBookingSchema = new mongoose.Schema({
    pumpId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetrolPump', // Reference to the PetrolPump schema
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    bookedAt: {
        type: Date,
        default: Date.now()
    }
});

// Schema for CNG bookings
const CNGBookingSchema = new mongoose.Schema({
    petrolPumpId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetrolPump', // Reference to the PetrolPump schema
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
        required: true
    },
    vehicleNo: {
        type: String,
        required: true
    },
    timeDetails: {
        type: String,
        required: true
    },
    bookedAt: {
        type: Date,
        default: Date.now()
    }
});

const EVBooking = mongoose.model('EVBooking', EVBookingSchema);
const CNGBooking = mongoose.model('CNGBooking', CNGBookingSchema);

module.exports = { EVBooking, CNGBooking };
