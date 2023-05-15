const RouteStart = require('../models/RouteStart');
const {StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors');

const getAllRoutes = async (req, res) =>{
    const routes = await RouteStart.find({});

res.status(StatusCodes.OK).json({routes, count: routes.length});
};

const getSingleRoute = async (req, res) =>{
    const {id} = req.params;

    const route = await RouteStart.findById(id);

    if(!route){
        throw new NotFoundError(`No route wit id ${id}`);
    };
    res.StatusCodes(StatusCodes.OK).json({route});

};

const updateRoute = async (req, res) =>{
    const {
        body:{
            routeNo,
            startTime, 
            startLocation:{label}
        },

        params : {id: routeId},

    } = req;

    const routeStart = await RouteStart.findByIdAndUpdate(routeId, req.body, {
        new: true,
        runValidators:true,
    });

    if(!routeStart){
        throw new NotFoundError(`No route with id ${routeId}`);
    }

    res.status(StatusCodes.OK).json({routeStart});
};

const createRoute = async (req, res) =>{
    const routeStart = await RouteStart.create(req.body);

    res.status(StatusCodes.OK).json({routeStart});
};

const deleteRoute = async (req, res) =>{
    const {
        params:{id: routeId},
    } = req;

    const route = await RouteStart.findByIdAndRemove({_id: routeId});

    if(!route){
        throw new NotFoundError(`No route with id ${routeId}`);
    }

    res.status(StatusCodes.OK).send({msg:'successfully deleted'})
};

module.exports = {
    createRoute,
    updateRoute,
    getAllRoutes,
    getSingleRoute,
    deleteRoute
};