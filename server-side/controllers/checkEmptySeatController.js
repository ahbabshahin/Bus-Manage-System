const CheckEmptySeat = require('../models/CheckEmptySeat');
const User = require('../models/User');
const Bus = require('../models/BusInventory');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, UnauthenticatedError } = require('../errors');
const { db } = require('../models/CheckEmptySeat');

const checkEmptySeat = async (req, res) => {
    const user = await User.find({ studentId, role }).select('-password');

    const seat = await Bus.findOne({ seatNo });

    const { routeNo, busNo, status } = req.query;

    if (!user.role) {
        throw new UnauthenticatedError('Not loged in');
    }

    else if (user && (user.role == 'student' || user.role == 'teacher' || user.role == 'staff' || user.role == 'admin')) {
        if (seat >= 0)
            seat--;
        const emptySeat = await CheckEmptySeat.create(routeNo, busNo, status, user, seat);
        if (seat == 0) {
            res.status(StatusCodes.OK).send(`No seats are available`);
        }
        res.status(StatusCodes.OK).json({ emptySeat, msg: `You are in.` });
    }

    else if (user && user.role == 'driver') {
        const entry = await CheckEmptySeat.create(routeNo, busNo, status, user);
        db.EmptySeat.deleteMany({ routeNo, busNo, status, user});
        res.status(StatusCodes.OK).json({entry,msg:`Bus has reached it's destination`});
    }

    res.status(StatusCodes.OK).send('You are in.')

};

const seatRequest = async(req, res) =>{
    const seat = await Bus.findOne({seatNo});
    const user = await User.findOne({role}).select('-password');
    let cnt = 0;
    if(seat >= 0 && user.role == 'teacher'){
        cnt++;
        const request = await CheckEmptySeat.create(cnt);
        res.status(StatusCodes.OK).json({request})
    }
res.status(StatusCodes.OK).send('Not authorized');
    
}

module.exports = { checkEmptySeat, seatRequest };
