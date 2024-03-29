const mongoose = require('mongoose');

const InvestorySchema = new mongoose.Schema({
	routeNo: {
		type: String,
		enum: ['Chottor', 'Kazir Bazar', 'Temuki'],
		default: 'Chottor',
		required: true,
	},

	busNo: {
		type: String,
		required: [true, 'must be given'],
	},

	capacity: {
		type: Number,
		required: true,
	},

	driverInfo: {
		name: {
			type: String,
			required: [true, 'must provide full name'],
		},
		contactNumber: {
			type: Number,
			required: true,
		},
	},

	isActive: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Inventory', InvestorySchema);
