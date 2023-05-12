const CheckEmptySeat = require('../models/CheckEmptySeat');
const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors');

const checkEmptySeat = async(req, res) =>{
    const user = await User.find({studentId}).select('-password');

    const {routeNo, busNo, status} = req.query;

    const emptySeat = await CheckEmptySeat.create(routeNo, busNo, status, user);

    res.status(StatusCodes.OK).json({emptySeat});
};

const deleteEntry = async(req, res) =>{
    const {routeNo, busNo, status} = req.query;
    const role = await User.find({
        role:'driver'

    });

    if(!role){
        throw new NotFoundError('No ')
    }
    const deleteEntry = await CheckEmptySeat.deleteMany({});

};

// module.exports = {checkEmptySeat, delete};
