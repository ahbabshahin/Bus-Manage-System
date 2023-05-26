const Complaint = require('../models/Complaint');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const createComplaint = async (req, res) => {
	const cC = await Complaint.create(req.body);

	res.status(StatusCodes.OK).json({ cC });
};

const getAllComplaint = async (req, res) => {
	const gC = await Complaint.find({});

	res.status(StatusCodes.OK).json({ gC });
};

module.exports = {
	createComplaint,
	getAllComplaint,
};
