const mongoose = require('mongoose');

const RouteStoppagesSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,
		},

		label: {
			type: String,
			required: [true, 'Please provide the starting location'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('BusStoppage', RouteStoppagesSchema);
