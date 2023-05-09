const express = require('express');
const router = express.Router();

const{getAllBuses, getSingleBus, createBusInfo, updateBusInfo, deleteBus} = require('../controllers/busController');

router.get('/get', getAllBuses);
router.post('/create', createBusInfo);
router.route('/get/:id').get(getSingleBus);
router.route('/update/:id').put(updateBusInfo);
router.route('/delete/:id').delete(deleteBus);

module.exports = router;