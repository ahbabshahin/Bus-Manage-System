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

	const bus = await Bus.findOne(
		{
			routeNo: routeNo,
			busNo: busNo,
			isActive: true,
		},
		{ capacity: 1 }
	);

	let es = bus.capacity;
	// console.log(es);
	const amIn = await EmptySeat.findOne(
		{ routeNo: routeNo, busNo: busNo },
		{ _id: 1 }
	);

	// console.log(amIn);
	if (role !== 'driver') {
		if (bus && !amIn) {
			// console.log('if');
			const eS = await EmptySeat.create({
				routeNo: routeNo,
				busNo: busNo,
				emptySeat: es - 1,
			});
			res.status(StatusCodes.OK).json({ eS });
		} else {
			// console.log('else');
			const amIn = await EmptySeat.findOne(
				{ routeNo: routeNo, busNo: busNo },
				{ _id: 1 }
			);
			console.log(amIn._id);
			const seat = await EmptySeat.findOne(
				{
					_id: amIn._id,
				},
				{ emptySeat: 1 }
			);
			let cnt = seat.emptySeat;

			const eS = await EmptySeat.findOneAndUpdate(
				{ _id: amIn._id },
				{ emptySeat: cnt - 1 }
			);

			res.status(StatusCodes.OK).json({ eS });
		}
	} else {
		const amIn = await EmptySeat.findOne(
			{ routeNo: routeNo, busNo: busNo },
			{ _id: 1 }
		);
		const dlt = await EmptySeat.findByIdAndUpdate(
			{ _id: amIn._id },
			{
				emptySeat: es,
			}
		);

		res.status(StatusCodes.OK).send('Reached');
	}

	// console.log(flag);

	// res.status(StatusCodes.OK).send('hey');
};

const getAllEntries = async (req, res) => {
	const emptySeat = await EmptySeat.find({});
	res.status(StatusCodes.OK).json({ emptySeat });
};

module.exports = {
	iAmIn,
	getAllEntries,
};
