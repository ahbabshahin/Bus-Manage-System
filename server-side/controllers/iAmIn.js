const EmptySeat = require('../models/CheckEmptySeat');
const {StatusCodes} = require('http-status-codes');
const User = require('../models/User');
const Bus = require('../models/BusInventory');
const { NotFoundError, UnauthenticatedError } = require('../errors');
const { db } = require('../models/CheckEmptySeat');

const iAmIn = async(req, res) =>{
    // const user = await User.find({studentId});
    const seat = await Bus.find( { codeName : "b1" } ).capacity;
    console.log(seat);
    // const amIn = await EmptySeat.create(req.body);

    res.status(StatusCodes.OK).send('Hey');
}

// const emptySeat = async(req, res) =>{
//     const bus = await Bus.find({capacity}).select()
// }

module.exports = {iAmIn};