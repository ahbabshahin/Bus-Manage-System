const RouteStart = require('../models/RouteStart');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getAllRoutes = async (req, res) => {
	const routes = await RouteStart.find({});

	res.status(StatusCodes.OK).json({ routes, count: routes.length });
};

const getSingleRoute = async (req, res) => {
	const { id } = req.params;

	const route = await RouteStart.findById(id);

	if (!route) {
		throw new NotFoundError(`No route wit id ${id}`);
	}
	res.status(StatusCodes.OK).json({ route });
};

const updateRoute = async (req, res) => {
	const { routeId } = req.params;
	console.log(routeId, 'query');
	const routeStart = await RouteStart.findOneAndUpdate(routeId, req.body, {
		new: true,
		runValidators: true,
	});

	if (!routeStart) {
		throw new NotFoundError(`No route with id ${routeId}`);
	}

	res.status(StatusCodes.OK).json({ routeStart });
};

const createRoute = async (req, res) => {
	const routeStart = await RouteStart.create(req.body);

	res.status(StatusCodes.OK).json({ routeStart });
};

const deleteRoute = async (req, res) => {
	const {
		params: { id: routeId },
	} = req;

	const route = await RouteStart.findByIdAndRemove({ _id: routeId });

	if (!route) {
		throw new NotFoundError(`No route with id ${routeId}`);
	}

	res.status(StatusCodes.OK).send({ msg: 'successfully deleted' });
};

const deleteAllRoutes = async (req, res) => {
	const routeIds = await RouteStart.find({}, { _id: 1 });
	const check = await RouteStart.find({}, { _id: 1 }).countDocuments();

	console.log(routeIds);
	console.log(check);

	let deleteRoutes;
	if (check) {
		for (let i = 0; i < check; i++) {
			deleteRoutes = await RouteStart.findOneAndDelete({ _id: routeIds });
		}
	}

	if (!check) {
		res.status(StatusCodes.OK).json({
			msg: `No route information is available`,
		});
	}

	res.status(StatusCodes.OK).json({
		msg: `Route informations are deleted successfully`,
	});

	// res.status(StatusCodes.OK).send('Hey');
};

module.exports = {
	createRoute,
	updateRoute,
	getAllRoutes,
	getSingleRoute,
	deleteRoute,
	deleteAllRoutes,
};
