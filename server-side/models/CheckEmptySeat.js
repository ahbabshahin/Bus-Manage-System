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

		studentId: {
			type: String,
			unique: true,
			require: true,
		},

		role: {
			type: String,
			enum: ['student', 'teacher', 'admin', 'staff', 'driver'],
			default: 'student',
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
