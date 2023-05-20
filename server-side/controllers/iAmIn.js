const EmptySeat = require('../models/CheckEmptySeat');
const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const Bus = require('../models/BusInventory');
const CheckEmptySeat = require('../models/CheckEmptySeat');
const { NotFoundError } = require('../errors');

const iAmIn = async (req, res) => {
	// Fetching values from user's data entry

	const routeNo = req.body.routeNo;
	const busNo = req.body.busNo;
	const studentId = req.body.studentId;
	const role = req.body.role;

	const seat = await Bus.findOne(
		{ routeNo: routeNo, busNo: busNo },
		{ capacity: 1 }
	);

	if (seat) {
		const st = await EmptySeat.find(
			{ routeNo: routeNo, busNo: busNo },
			{ seat: 1 }
		);
		const stc = await EmptySeat.find({
			routeNo: routeNo,
			busNo: busNo,
		}).countDocuments();

		let amIn;

		console.log(seat.capacity);
		console.log(role);

		if (role !== 'driver') {
			// fetching number of seat from emptyseats data table

			// const stc = await EmptySeat.find({
			// 	routeNo: routeNo,
			// 	busNo: busNo,
			// }).countDocuments();

			const isEmpty = await EmptySeat.find({}).countDocuments();

			// console.log(st[st.length - 1].seat);
			console.log(stc);

			if (isEmpty >= 1 && stc >= 1) {
				console.log('if');
				if (st[st.length - 1].seat < seat.capacity) {
					amIn = await EmptySeat.create({
						routeNo: routeNo,
						busNo: busNo,
						studentId: studentId,
						role: role,
						seat: st[st.length - 1].seat + 1,
					});
				}
			} else {
				console.log('else');
				if (stc == 0) {
					amIn = await EmptySeat.create({
						routeNo: routeNo,
						busNo: busNo,
						studentId: studentId,
						role: role,
						seat: 1,
					});
				}
			}
		} else {
			// fetching all ids of the given route & bus number

			const allIds = await EmptySeat.find(
				{
					routeNo: routeNo,
					busNo: busNo,
				},
				{ _id: 1 }
			);

			console.log(allIds);

			for (let i = 0; i < allIds.length; i++) {
				// deleting all entries matching the ids after drivers input

				amIn = await EmptySeat.findOneAndDelete({ _id: allIds });
			}
		}

		if (role == 'driver') {
			res.status(StatusCodes.OK).json({
				msg: `Bus has reached it's destination`,
			});
		} else if (stc == 0) {
			res.status(StatusCodes.OK).json({ amIn });
		} else if (st[st.length - 1].seat < seat.capacity) {
			res.status(StatusCodes.OK).json({ amIn });
		} else {
			res.status(StatusCodes.OK).json({ msg: `No seat is available` });

			// res.status(StatusCodes.OK).send('Hey');
		}
	}

	res.status(StatusCodes.OK).json({
		msg: `No route or bus information is found`,
	});
};

const getAllEntries = async (req, res) => {
	const emptySeat = await CheckEmptySeat.find(
		{},
		{ routeNo: 1, busNo: 1, seat: 1 }
	);

	res.status(StatusCodes.OK).json({ emptySeat, count: emptySeat.length });
};

module.exports = {
	iAmIn,
	getAllEntries,
};
