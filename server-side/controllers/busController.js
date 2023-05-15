const Bus = require('../models/BusInventory');
const{StatusCodes} = require('http-status-codes');
const {NotFoundError} = require('../errors');

const getAllBuses = async (req, res) => {
    const bus = await Bus.find({});

    res.status(StatusCodes.OK).json({bus, count: bus.length});
    // res.status(StatusCodes.OK).send('Hey');
};
 
const getSingleBus = async (req, res) => {
    const {id} = req.params;

    const bus = await Bus.findById(id);

    if(!bus){
        throw new NotFoundError(`No bus with id ${id}`);
    }

    res.status(StatusCodes.OK).json({bus});
};

const updateBusInfo = async (req, res) =>{
    const {
        params:{id:busId},
    } = req;

    console.log(busId, req.body);

    const bus = await Bus.findByIdAndUpdate(busId, req.body, {
        new: true,
        runValidators: true
    });

    if(!bus){
        throw new NotFoundError(`No bus info with id ${id}`);
    };
        res.status(StatusCodes.OK).json({bus});
    
};
    const createBusInfo = async(req, res) =>{
        const bus = await Bus.create(req.body);

        res.status(StatusCodes.OK).json({bus});
    };

   const deleteBus = async (req, res) =>{
       const { 
           params: {id: busId},
       } = req;

       const bus = await Bus.findByIdAndRemove({_id:busId,});

       if(!bus){
           throw new NotFoundError(`No bus found with id ${id}`);
        }
           res.status(StatusCodes.OK).send({msg:'successfully deleted'});
       
};

module.exports = {
    createBusInfo,
    getSingleBus,
    getAllBuses,
    updateBusInfo,
    deleteBus
};