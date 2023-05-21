const RouteStoppages = require('../models/RouteStoppages');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');
const RouteStart = require('../models/RouteStart');

const getRouteStoppages = async (req, res) => {
	const stoppages = await RouteStoppages.find({});

	res.status(StatusCodes.OK).json({ stoppages, count: stoppages.length });
};

const getSingleStoppages = async (req, res) => {
	const { id } = req.params;

	const stoppages = await RouteStoppages.findById(id);

	if (!stoppages) {
		throw new NotFoundError(`No stoppages with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ stoppages });
};

const updateRouteStoppages = async (req, res) => {
	const { id } = req.params;

	const stoppages = await RouteStoppages.findByIdAndUpdate(id, req.body, {
		new: true,

		runValidators: true,
	});

	if (!stoppages) {
		throw new NotFoundError(`No stoppages with id ${id}`);
	}

	res.status(StatusCodes.OK).json({ stoppages });
};

const createRouteStoppages = async (req, res) => {
	const stoppages = await RouteStoppages.create(req.body);

	res.status(StatusCodes.OK).json({ stoppages });
	// res.status(StatusCodes.OK).send('Hey');
};

const deleteRouteStoppages = async (req, res) => {
	const { id } = req.params;

	const stoppages = await RouteStoppages.findByIdAndRemove(id);

	if (!stoppages) {
		throw new NotFoundError(`No stoppages with id ${id}`);
	}

	res.status(StatusCodes.OK).send({ msg: 'successfully deleted' });
};

const deleteAllStoppages = async (req, res) => {
	const stoppagesIds = await RouteStoppages.find({}, { _id: 1 });
	const check = await RouteStoppages.find({}, { _id: 1 }).countDocuments();

	// console.log(stoppagesIds);
	// console.log(check);

	for (let i = 0; i < check; i++) {
		const dlelteStoppages = await RouteStoppages.findOneAndDelete({
			_id: stoppagesIds,
		});
	}

	res.status(StatusCodes.OK).json({
		msg: `Route stoppage informations are deleted successfully`,
	});
	// res.status(StatusCodes.OK).send('Hey');
};

module.exports = {
	getRouteStoppages,
	getSingleStoppages,
	createRouteStoppages,
	updateRouteStoppages,
	deleteRouteStoppages,
	deleteAllStoppages,
};
