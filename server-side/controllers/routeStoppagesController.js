const RouteStoppages = require('../models/RouteStoppages');
const{StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors');

const getRouteStoppages = async (req, res) =>{
    const stoppages = await RouteStoppages.find({});

    res.StatusCodes(StatusCodes.OK).json({stoppages, count: stoppages.length}); 
};

const getSingleStoppages = async (req, res) =>{
    const {id} = req.params;

    const stoppages = await RouteStoppages.findById(id);

    if(!stoppages){
        throw new NotFoundError(`No stoppages with id ${id}`);
    }

    res.status(StatusCodes.OK).json({stoppages});
};

const updateRouteStoppages = async (req, res) =>{
    const {id} = req.params;

    const stoppages = await RouteStoppages.findByIdAndUpdate(id, req.body, {
        new: true,

        runValidators: true,
    });

    if(!stoppages){
        throw new NotFoundError(`No stoppages with id ${id}`);
    }

    res.status(StatusCodes.OK).json({stoppages});

};

const createRouteStoppages = async (req, res) =>{
    const stoppages = await RouteStoppages.create(req.body);

    res.status(StatusCodes.OK).json({stoppages});
};

const deleteRouteStoppages = async (req, res) =>{
    const {id} = req.params;

    const stoppages = await RouteStoppages.findByIdAndRemove(id);

    if(!stoppages){
        throw new NotFoundError(`No stoppages with id ${id}`);
    }

    res.status(StatusCodes.OK).send({msg:'successfully deleted'});
};

module.exports = {
    getRouteStoppages,
    getSingleStoppages,
    createRouteStoppages,
    updateRouteStoppages,
    deleteRouteStoppages
};