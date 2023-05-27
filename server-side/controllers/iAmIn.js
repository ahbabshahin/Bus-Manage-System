const EmptySeat = require('../models/CheckEmptySeat');
const { StatusCodes } = require('http-status-codes');
// const User = require('../models/Users');
const Bus = require('../models/BusInventory');
// const CheckEmptySeat = require('../models/CheckEmptySeat');
const { NotFoundError } = require('../errors');

const iAmIn = async (req, res) => {
	const routeNo = req.body.routeNo;
	const busNo = req.body.busNo;
	const studentId = req.body.studentId;
	const role = req.body.role;

	const seat = await Bus.find(
		{ routeNo: routeNo, busNo: busNo },
		{ capacity: 1 }
	);

	let es = seat.capacity;

	const check = await EmptySeat.find({ routeNo: routeNo, busNo: busNo });
	let amIn;
	if (!check) {
		if (role !== 'driver') {
			amIn = EmptySeat.create({
				routeNo: routeNo,
				busNo: busNo,
				emptySeat: es - 1,
			});
			console.log(amIn);
			// res.status(StatusCodes.OK).json({ amIn });
		} else {
			amIn = EmptySeat.create({
				routeNo: routeNo,
				busNo: busNo,
				emptySeat: es,
			});
			console.log(amIn);
			// res.status(StatusCodes.OK).json({ amIn });
		}
	}
	res.status(StatusCodes.OK).json({ amIn });

	// else{

	// }
};
module.exports = {
	iAmIn,
	// getAllEntries,
};
