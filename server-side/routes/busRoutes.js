const express = require('express');
const router = express.Router();

const {
	getAllBuses,
	getSingleBus,
	createBusInfo,
	updateBusInfo,
	deleteBus,
	deleteAllBuses,
} = require('../controllers/busController');

router.get('/get', getAllBuses);
router.post('/create', createBusInfo);
router.route('/get/:id').get(getSingleBus);
router.route('/:id').put(updateBusInfo);
router.route('/delete/:id').delete(deleteBus);
router.route('/deleteAllBuses/').post(deleteAllBuses);

module.exports = router;
