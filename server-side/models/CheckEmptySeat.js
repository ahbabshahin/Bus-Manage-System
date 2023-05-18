const mongoose = require('mongoose');

const CheckEmptySeatSchema = new mongoose.Schema({

    routeNo:{
        type: Number,
        enum:[1,2,3],
        default: 1,
    },

    busNo:{
        type: Number,
        require: [true, 'must provide bus number'],
    },

    studentId:{
        type: String,
        unique: true,
        require: true
    },

    role: {
        type: String,
        enum: ['student', 'teacher', 'admin', 'staff', 'driver'],
        default: 'student',
    },

    seat:{
        type: Number
    },

    // request:{
    //     type: Number,
    // }

},

{timestamps: true}
);

module.exports = mongoose.model('EmptySeat', CheckEmptySeatSchema)