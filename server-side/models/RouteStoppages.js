const mongoose = require('mongoose');

const RouteStoppagesSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,
			enum: ['Chottor', 'Kazir Bazar', 'Temuki'],
			default: 'Chottor',
		},

		label: {
			type: String,
			required: [true, 'Please provide the starting location'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('BusStoppage', RouteStoppagesSchema);
