const mongoose = require('mongoose');

const InvestorySchema = new mongoose.Schema({
    busNo: {
        type: Number,
        required: [true, 'must be given'],
    },
    codeName: {
        type: String,
        // unique: true,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },

    driverInfo: {
        name: {
            type: String,
            required: [true, 'must provide full name'],
        },
        contactNumber: {
            type: Number,
            required: true,
        },
    },
    seatNo: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Inventory', InvestorySchema);