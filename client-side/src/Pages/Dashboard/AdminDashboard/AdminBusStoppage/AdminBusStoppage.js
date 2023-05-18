import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const AdminBusStoppage = () => {
	const [stoppageList, setStoppageList] = useState();

	useEffect(() => {
		axios
			.get('/stoppage')
			.then((res) => {
				setStoppageList(res.data.stoppages);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const navigate = useNavigate();
	return (
		<div>
			{/* add new routes */}
			<div onClick={() => navigate('/dashboard/addstoppage')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Stoppage
				</h2>
			</div>
			{/* update Route Title */}
			<article>
				{' '}
				<div className='flex items-center text-xl font-semibold mb-10'>
					<span>
						<FaBus className='text-dark mr-3' />
					</span>
					<h2 className=' text-dark '>List of Existing Stoppages</h2>
				</div>
				{/* Existing Bus Update list */}
				<div className='grid grid-cols-3 gap-3'>
					{stoppageList &&
						stoppageList.map(
							({ _id, routeNo, label, latitude, longitude }) => (
								<div
									key={_id}
									className='border-2 border-gray-200 hover:border-dark   rounded-xl p-5 duration-200 ease-in-out'
								>
									<div className='text-lg font-semibold  text-center '>
										<p className=''>Label : {label}</p>
										<p className='text-base'>
											Route Number : {routeNo}
										</p>
									</div>
									<div className='border border-light shadow-sm h-0 bg-light mb-5'></div>
									<div className='text-base font-medium text-center'>
										<p className='space-x-2'>
											<span>Latitude {latitude}</span>
											<span>Longitude {longitude}</span>
										</p>
										<div className='text-center mx-auto'>
											<button
												onClick={() =>
													navigate(
														`/dashboard/stoppageUpdate/${_id}`
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

export default AdminBusStoppage;
