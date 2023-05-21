const express = require('express');
const router = express.Router();

const {
	getAllTimeSlots,
	getSingleTimeSlot,
	createTimeSlot,
	updateTimeSlot,
	deleteTimeSlot,
	deleteAllTimeSlots,
} = require('../controllers/timeSlotController');

router.route('/get').get(getAllTimeSlots);
router.route('/create').post(createTimeSlot);
router
	.route('/:id')
	.get(getSingleTimeSlot)
	.patch(updateTimeSlot)
	.delete(deleteTimeSlot);

router.route('/deleteAllTimeSlots').post(deleteAllTimeSlots);

module.exports = router;
