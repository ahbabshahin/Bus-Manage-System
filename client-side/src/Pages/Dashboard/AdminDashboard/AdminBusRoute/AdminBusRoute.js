import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminBusRoute = () => {
	const navigate = useNavigate();
	const [routeList, setRouteList] = useState();

	useEffect(() => {
		axios
			.get('/routeStart/get')
			.then((res) => {
				setRouteList(res.data.routes);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{/* add new routes */}
			<div onClick={() => navigate('/dashboard/addRoute')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Routes
				</h2>
			</div>
			{/* update Route Title */}
			<article>
				{' '}
				<div className='flex items-center text-xl font-semibold mb-10'>
					<span>
						<FaBus className='text-dark mr-3' />
					</span>
					<h2 className=' text-dark '>List of Existing Routes</h2>
				</div>
				{/* Existing Bus Update list */}
				<div className='grid grid-cols-3 gap-3'>
					{routeList &&
						routeList.map(
							({ _id, routeNo, startLocation, startTime }) => (
								<div
									key={_id}
									className='border-2 border-gray-200 hover:border-dark   rounded-xl'
								>
									<div className='text-lg font-semibold  text-center py-4'>
										<p>Route Number : {routeNo}</p>
										<p>start Time: {startTime}</p>
									</div>
									<div className='border border-light shadow-sm h-0 bg-light mb-5'></div>
									<div className='text-base font-medium text-center'>
										<p className='text-base '>
											Start Location Label :{' '}
											{startLocation?.label}
										</p>
										<p className='flex flex-col justify-center items-center'>
											<span>
												Latitude{' '}
												{startLocation.latitude}
											</span>
											<span>
												
												Longitude{' '}
												{startLocation.longitude}
											</span>
										</p>
										<div className='text-center mx-auto'>
											<button
												onClick={() =>
													navigate(
														`/dashboard/routeUpdate/${_id}`
													)
												}
												className='block mx-auto w-full mt-5 py-2 border bg-secondary  rounded-lg hover:bg-dark hover:text-white'
											>
												Edit
											</button>
										</div>
									</div>
								</div>
							)
						)}
				</div>
			</article>
		</div>
	);
};

export default AdminBusRoute;
