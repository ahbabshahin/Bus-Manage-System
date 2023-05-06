const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema({
    routeNo:{
        type: Number,
        enum:[1,2,3],
        default: 1,
    },

    busNo: {
        type: Number,
        required: [true, 'Please provide the bus number'],

    },

    timeSlot:{
        type: String,
        requied: [true, 'Please provide the time slot']
    },
},
    {timestamps:true},
);

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
