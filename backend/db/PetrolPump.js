const {mongoose} = require("mongoose");
const pumpSchema = new mongoose.Schema({
    pd: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    charger: {
        available: {
            type: Boolean,
            default: true,
        },

        percent: {
            type: Number,
            default: 0, // in percentage (e.g., 85)
        },
        time: {
            type: Number, // in minutes
            default: 0
        },

        slots: {
            type: Number,
            default: 0
        },
        queue: {
            type: Number,
            default: 0
        },
    },
    cng: {
        available: {
            type: Boolean,
            default: true,
        },
        nozzles: {
            type: Number,
            default: 2
        },
        fillingRate: {
            type: Number,
            default: 2, //"kg/minute"
        },
        capacity: {
            type: Number, // in Ltr
        },
        queue: {
            type: Number,
        }
    }

})
module.exports = mongoose.model('PetrolPump', pumpSchema);