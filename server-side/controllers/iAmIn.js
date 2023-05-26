const EmptySeat = require('../models/CheckEmptySeat');
const { StatusCodes } = require('http-status-codes');
// const User = require('../models/Users');
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

	console.log(seat);
	let es = seat.capacity - 1;
	console.log(es);
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
						emptySeat: es - st[st.length - 1].seat,
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
						emptySeat: es,
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

// const getAllEntries = async (req, res) => {
// 	// const busIds = await Bus.find({}, { _id: 1 });
// 	const cnt = await Bus.find({}, { routeNo: 1, busNo: 1 });
// 	for (let i = 0; i < cnt.length; i++)
// 		console.log(cnt[i].routeNo, cnt[i].busNo);
// 	// const cnt = await CheckEmptySeat.find({routeNo, })
// 	let emptySeat = [];
// 	for (let i = 0; i < cnt.length; i++)
// 		emptySeat[i] = await CheckEmptySeat.findOne(
// 			{ routeNo: cnt[i].routeNo, busNo: cnt[i].busNo },
// 			{ routeNo: 1, busNo: 1, emptySeat: 1 }
// 		);
// 	console.log(emptySeat);
// 	// let seat = emptySeat[st[cnt.length - 1]];
// 	// console.log(seat);
// 	let seat = [];
// 	for (let i = 0; i < emptySeat.length; i++) {
// 		seat[i] = {
// 			routeNo: emptySeat ? emptySeat.routeNo : 'no way',
// 			busNo: emptySeat[emptySeat.length - 1]
// 				? emptySeat[emptySeat.length - 1].busNo
// 				: 'No way',
// 			emptySeat: emptySeat[emptySeat.length - 1]
// 				? emptySeat[emptySeat.length - 1].emptySeat
// 				: 'No way',
// 		};
// 	}
// 	// console.log(seat);
// 	res.status(StatusCodes.OK).json({
// 		seat,
// 		count: seat.length,
// 	});
// };

// const getAllEntries = async (req, res) => {
// 	const emptySeat = await CheckEmptySeat.find(
// 		{ routeNo: 'Chottor' },
// 		{ routeNo: 1, busNo: 1, emptySeat: 1 }
// 	);

// 	res.status(StatusCodes.OK).json({ emptySeat, count: emptySeat.length });
// };

const getAllEntries = async (req, res) => {
	const bus = await Bus.find({}, { routeNo: 1 });
	for (let i = 0; i < bus.length; i++) {
		console.log(bus[i].routeNo);
		const chottor = await CheckEmptySeat.find(
			{ routeNo: bus[i].routeNo },
			{ busNo: 1, emptySeat: 1 }
		);
		console.log(chottor[i].busNo);
	}

	const kazirB = await CheckEmptySeat.find(
		{ routeNo: 'Kazir Bazar' },
		{ busNo: 1, emptySeat: 1 }
	);

	const dsntC = await CheckEmptySeat.distinct('busNo', {
		routeNo: 'Chottor',
	});

	console.log('DistC ', dsntC.length);

	const dsntK = await CheckEmptySeat.distinct('busNo', {
		routeNo: 'Kazir Bazar',
	});

	// console.log(cnt);
	console.log('Distk ', dsntK.length);
	// console.log(cnt);

	// const set = new Set(chottor);
	// console.log(set.has());
	// console.log(chottor);
	let seatC = [];
	for (let i = 0; i < chottor.length; i++) {
		seatC[i] = await CheckEmptySeat.find(
			{ busNo: chottor[i].busNo },
			{ emptySeat: 1 }
		);
	}

	let seatK = [];
	for (let i = 0; i < kazirB.length; i++) {
		seatK[i] = await CheckEmptySeat.find(
			{ busNo: kazirB[i].busNo },
			{ emptySeat: 1 }
		);
	}

	// console.log(chottor.length);

	for (let i = 0; i < dsntC.length; i++) {
		// if (i == cnt) {
		for (let j = seatC[i].length - 1; j >= 0; j--) {
			console.log(seatC[i][j].emptySeat);
			break;
		}
		// break;
		// }
	}

	for (let i = 0; i < dsntK.length; i++) {
		// if (i == cnt) {
		for (let j = seatK[i].length - 1; j >= 0; j--) {
			console.log(seatK[i][j].emptySeat);
			break;
		}
		// break;
		// }
	}

	let infoC = [];
	for (let i = 0; i < dsnt.length; i++) {
		infoC[i] = {
			routeNo: 'Chottor',
			busNo: chottor[i].busNo,
			emptySeat: seat[i][seat[i].length - 1].emptySeat,
		};
		// console.log(infoC[i].emptySeat);
	}

	let infoK = [];
	for (let i = 0; i < dsntK.length; i++) {
		infoK[i] = {
			routeNo: 'Kazir Bazar',
			busNo: kazirB[i].busNo,
			emptySeat: seatK[i][seatK[i].length - 1].emptySeat,
		};
	}

	// const set = new Set(chottor);
	// console.log(set.has());
	// console.log(chottor);

	// console.log(chottor.length);

	let comRoute = [];
	for (let i = 0; i < 2; i++) {
		comRoute[i] = {
			chottor: chottor,
			kazirB: kazirB,
		};
	}
	// res.status(StatusCodes.OK).json({ emptySeat, count: emptySeat.length });
	// res.status(StatusCodes.OK).json({ bus, count: bus.length });
	// res.status(StatusCodes.OK).json({ seat, count: seat.length });
	// res.status(StatusCodes.OK).json({ seatK, count: seatK.length });
	// res.status(StatusCodes.OK).json({ infoC });
	res.status(StatusCodes.OK).json({ infoK });
	// res.status(StatusCodes.OK).json({ comRoute });
};

module.exports = {
	iAmIn,
	getAllEntries,
};
