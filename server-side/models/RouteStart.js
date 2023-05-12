const mongose = require('mongoose');

const RouteStartSchema = new mongoose.RouteStartSchema(
    {
        routeNo:{
            type: Number,
            enum:[1,2,3],
            default: 1
        },

        startLocation:{
            label: {
                type: String,
                required: [true, 'Please provide the starting location'],
            },

            // latitude:{
            //     type: String,
            //     required: [true, 'Please provide the latitude'],
            // },

            // longtitude:{
            //     type: String,
            //     required: [true, 'Please provide the longtitude'],
            // },

            startTime: {
                type: String,
                required: [true, 'Please provide the starting time'],
            },

        },
    },

        {timestamps: true},
    
);

modeule.exports = mongoose.model('RouterStart', RouteStartSchema);