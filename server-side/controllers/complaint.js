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

const deleteComplaint = async (req, res) => {
	const {
		params: { id: complaintId },
	} = req;

	const cC = await Complaint.findByIdAndRemove({ _id: complaintId });

	console.log(cC, req.params);
	if (!cC) {
		throw new NotFoundError(`No complaint found with id ${complaintId}`);
	}
	res.status(StatusCodes.OK).send({ msg: 'successfully deleted' });
};

module.exports = {
	createComplaint,
	getAllComplaint,
	deleteComplaint,
};
