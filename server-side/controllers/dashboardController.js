const Bus = require('../models/BusInventory');
const User = require('../models/Users');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const getDashboardInfo = async (req, res) => {
	// res.status(StatusCodes.OK).send('hey');
	const bus = await Bus.find({}, { busNo: 1 });
	// console.log(bus.length);
	const route = await Bus.distinct('routeNo');

	const student = await User.find({ role: 'student' });
	const teacher = await User.find({ role: 'teacher' });
	const staff = await User.find({ role: 'staff' });
	// console.log(student);

	let info = {
		bus: bus.length,
		route: route.length,
		student: student.length,
		teacher: teacher.length,
		staff: staff.length,
	};

	res.status(StatusCodes.OK).json({ info });
	// res.status(StatusCodes.OK).send('hey');
};

module.exports = { getDashboardInfo };
