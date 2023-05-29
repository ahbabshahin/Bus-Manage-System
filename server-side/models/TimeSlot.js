const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,
		},

		busNo: {
			type: String,
			required: [true, 'Please provide the bus number'],
		},

		timeSlot: {
			type: String,
			requied: [true, 'Please provide the time slot'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);
