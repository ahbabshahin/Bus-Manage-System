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

    status:{
        type: Boolean,
        default: false
    }

},

{timestamps: true}
);

module.exports = mongoose.model('EmptySeat', CheckEmptySeatSchema)