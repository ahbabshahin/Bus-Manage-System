const mongoose = require('mongoose');

const RouteStartSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,
		},

		startTime: {
			type: String,
			required: [true, 'Please provide the starting time'],
		},
	},

	{ timestamps: true }
);

module.exports = mongoose.model('RouteStart', RouteStartSchema);
