const mongoose = require('mongoose');

const RouteStartSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,
			enum: ['Chottor', 'Kazir Bazar', 'Temuki'],
			default: 'Chottor',
		},

		startLocation: {
			label: {
				type: String,
				required: [true, 'Please provide the starting location'],
			},

			// latitude:{
			//     type: String,
			//     required: [true, 'Please provide the latitude'],
			// },

			// longtitude:{
			//     type: String,
			//     required: [true, 'Please provide the longtitude'],
			// },

			startTime: {
				type: String,
				required: [true, 'Please provide the starting time'],
			},
		},
	},

	{ timestamps: true }
);

module.exports = mongoose.model('RouteStart', RouteStartSchema);
