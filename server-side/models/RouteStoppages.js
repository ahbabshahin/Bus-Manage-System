const mongoose = require('mongoose');

const RouteStoppagesSchema = new mongoose.Schema({

    routeNo:{
        type: Number,
        enum:[1,2,3],
        default: 1,
    },

    label:{
        type: String,
        required: [true, 'Please provide the starting location'],
    },
},
    {timestamps: true},
);

mongoose.exports = mongoose.model('BusStoppage', RouteStoppagesSchema);