const mongoose = require('mongoose');

const InvestorySchema = new mongoose.Schema({
	routeNo: {
		type: String,
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
			type: String,
			required: true,
		},
	},

	isActive: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model('Inventory', InvestorySchema);
