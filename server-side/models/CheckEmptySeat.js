const mongoose = require('mongoose');

const CheckEmptySeatSchema = new mongoose.Schema(
	{
		routeNo: {
			type: String,

			required: true,
		},

		busNo: {
			type: String,
			required: [true, 'must be given'],
		},
		// seat: {
		// 	type: Number,
		// },

		emptySeat: {
			type: Number,
		},

		// request:{
		//     type: Number,
		// }
	},

	{ timestamps: true }
);

module.exports = mongoose.model('EmptySeat', CheckEmptySeatSchema);
