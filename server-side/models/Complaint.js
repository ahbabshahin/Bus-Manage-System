const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	desc: {
		type: String,
	},
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
