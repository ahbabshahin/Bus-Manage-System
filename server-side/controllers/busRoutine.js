const Bus = require('../models/BusInventory');
const TimeSlot = require('../models/TimeSlot');
const Stoppages = require('../models/RouteStoppages');
const { NotFoundError } = require('../errors');
const { StatusCodes } = require('http-status-codes');

const getBusRoutine = async (req, res) => {
	const busIds = await Bus.find({}, { _id: 1 });

	const bus = await Bus.find({ _id: busIds }, { routeNo: 1, busNo: 1 });

	let timeSlot = [];
	let stoppages = [];

	for (let i = 0; i < busIds.length; i++) {
		// console.log(bus[i].routeNo, bus[i].busNo);
		timeSlot[i] = await TimeSlot.findOne(
			{
				routeNo: bus[i].routeNo,
				busNo: bus[i].busNo,
			},
			{ timeSlot: 1 }
		);
		// if (!timeSlot) {
		// 	console.log('No time slot found');
		// } else console.log('hey');

		stoppages[i] = await Stoppages.findOne(
			{ routeNo: bus[i].routeNo },
			{ label: 1 }
		);

		// if (!stoppages) {
		// 	console.log('No stoppages found');
		// } else console.log(stoppages.label);
	}
	// console.log(busIds);
	// console.log(timeSlot[0]);
	let busRoutine = [];
	for (let i = 0; i < busIds.length; i++) {
		busRoutine[i] = {
			routeNo: bus[i] ? bus[i].routeNo : 'No route information found',
			busNo: bus[i] ? bus[i].busNo : 'No bus information found',
			timeSlot: timeSlot[i] ? timeSlot[i].timeSlot : 'No time Slot found',
			label: stoppages[i] ? stoppages[i].label : 'No stoppages found',
		};
	}
	res.status(StatusCodes.OK).json({ busRoutine });
};

module.exports = {
	getBusRoutine,
};
