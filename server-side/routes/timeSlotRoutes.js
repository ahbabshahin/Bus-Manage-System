const express = require('express');
const router = express.Router();

const {getAllTimeSlots, getSingleTimeSlot, createTimeSlot, updateTimeSlot, deleteTimeSlot} = require('../controllers/timeSlotController');

router.route('/').get(getAllTimeSlots).post(createTimeSlot);
router.route('/:id').get(getSingleTimeSlot).patch(updateTimeSlot).delete(deleteTimeSlot);

module.exports = router;

