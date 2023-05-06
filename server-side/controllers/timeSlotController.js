const TimeSlot = require('../models/TimeSlot');
const{StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors');

const getAllTimeSlots = async (req, res) =>{
    const timeSlots = await TimeSlot.find({});

    res.status(StatusCodes.OK).json({
        data: timeSlots,
        count: timeSlots.length,
    });
};

const getSingleTimeSlot = async (req, res) =>{
    const {id} = req.params;

    const timeSlot = await TimeSlot.findById(id);

    if(!timeSlot){
        throw new NotFoundError(`No timeslot with id ${id}`);
    }

    res.status(StatusCodes.OK).json({timeSlot});
};

const createTimeSlot = async (req, res) =>{
    const timeSlot = await TimeSlot.create(req.body);

    res.status(StatusCodes.OK).json({timeSlot});
};

const updateTimeSlot = async (req, res) =>{
    const {id} = req.params;

    const timeSlot = await TimeSlot.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });

    if(!timeSlot){
        throw new NotFoundError(`No timeslot with id ${id}`);
    }

    res.status(StatusCodes.OK).json({timeSlot});

};

const deleteTimeSlot = async (req, res) =>{
    const{id} = req.params;

    const timeSlot = await TimeSlot.findByIdAndRemove(id);

    if(!timeSlot){
        throw new NotFoundError(`No timeslot with id ${id}`);
    }

    res.status(StatusCodes.OK).send({msg:'successfully deleted'});
};

module.exports = {
    getAllTimeSlots,
    getSingleTimeSlot,
    createTimeSlot,
    updateTimeSlot,
    deleteTimeSlot
};