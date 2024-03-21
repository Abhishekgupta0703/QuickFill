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
    charger: {
        available: {
            type: Boolean,
            default: true,
        },
        speed: {
            percent: {
                type: Number,
            },
            time: {
                type: Number // in minutes
            }
        },
        slots: {
            type: Number,
        },
        queue: {
            type: Number,
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