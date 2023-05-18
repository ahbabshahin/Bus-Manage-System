import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiBus } from 'react-icons/bi';
import { RiMapPinTimeFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ConsumerBusDetails = () => {
	const [routes, setRoutes] = useState([]);
	const [timeSlots, setTimeSlots] = useState([]);
	const [routeNo, setRouteNo] = useState(null);
	const [timeSlot, setTimeSlot] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get('/routeStart/get')
			.then((res) => {
				setRoutes(res.data.routes);
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get('/timeSlots')
			.then((res) => {
				setTimeSlots(res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleUpdateProfile = async () => {
		if (!routeNo || !timeSlot) return;
		try {
			await axios.post('/users/updateUser', {
				routeNo,
				timeSlot,
			});
			navigate('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='bg-light p-[100px]'>
			<div className='bg-white rounded-lg shadow p-[25px] gap-4 space-y-[25px]'>
				{/* select routes */}
				<div className='space-y-[25px]'>
					<h4 className='text-2xl font-bold text-dark tracking-wide'>
						Select Routes
					</h4>
					<div className='grid grid-cols-4 gap-4'>
						{routes &&
							routes.map(({ _id, routeNo: route, startLocation }) => (
								<article
									key={_id}
									onClick={() => setRouteNo(route)}
									className={`p-[25px] rounded-lg shadow border flex flex-col ${
										routeNo === route
											? 'border border-primary'
											: 'border border-white'
									}`}
								>
									<div>
										<BiBus
											className='text-gray-700 '
											size={25}
										/>
									</div>
									<h4 className='text-xl font-bold text-dark tracking-wide'>
										Route No{' '}
										<span className='text-3xl'>
											{route}
										</span>
									</h4>
									<p className='text-gray-500'>
										Starting From {startLocation?.label}
									</p>
								</article>
							))}
					</div>
				</div>

				{/* select time slots */}
				<div className='space-y-[25px]'>
					<h4 className='text-2xl font-bold text-dark tracking-wide'>
						Select Your Time Slot
					</h4>
					<div className='grid grid-cols-4 gap-4'>
						{timeSlots &&
							timeSlots.map(({ _id, timeSlot: time }) => (
								<article
									key={_id}
									onClick={() => setTimeSlot(time)}
									className={`p-[25px] rounded-lg shadow border flex flex-col space-y-2 ${
										timeSlot === time
											? 'border border-primary'
											: 'border border-white'
									}`}
								>
									<RiMapPinTimeFill
										className='text-gray-700 '
										size={20}
									/>

									<h4 className='text-lg font-bold text-dark tracking-wide'>
										Starts At{' '}
										<span className='text-xl'>{time}</span>
									</h4>
								</article>
							))}
					</div>
				</div>
			</div>
			<div className='flex justify-end'>
				<button
					onClick={handleUpdateProfile}
					className='mt-[25px] text-xl font-medium px-4 py-4 rounded-lg shadow bg-white'
				>
					Proceed to Dashboard
				</button>
			</div>
		</div>
	);
};

export default ConsumerBusDetails;
