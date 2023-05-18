import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const inputs = [
	{
		inputType: 'number',
		inputTitle: 'Route Number',
		inputData: 'routeNo',
	},
	{
		inputType: 'text',
		inputTitle: 'label',
		inputData: 'label',
	},
	{
		inputType: 'text',
		inputTitle: 'Latitude',
		inputData: 'latitude',
	},
	{
		inputType: 'text',
		inputTitle: 'Longitude',
		inputData: 'longitude',
	},
	{
		inputType: 'text',
		inputTitle: 'Start Time',
		inputData: 'startTime',
	},
];

const AdminBusRouteAdd = () => {
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const {licenseNo, startTime, label, latitude, longitude} = data;
		console.log(data);

		try {
			const res = await axios.post('/routeStart/create', {
				licenseNo,
				startTime,
				startLocation: { label, latitude, longitude },
			});
			navigate('/dashboard/routes');
		} catch (error) {
			console.log(error)
		}

		reset();
	};

	return (
		<section className='justify-center mt-20'>
			{/* input forms */}

			<div className='flex flex-col justify-center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex justify-between '>
						<div>
							<h2 className='text-2xl font-semibold'>
								Bus Routes
							</h2>
							<p className='text-sm text-gray-600'>
								adding new bus Routes
							</p>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'Add'}
								className=' border py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
					{inputs.map(
						({ inputType, inputTitle, inputData }, index) => (
							<div
								key={index}
								className='grid grid-cols-12 justify-between py-2 '
							>
								<div className='col-span-4'>
									<label>{inputTitle}</label>
								</div>
								<div className='col-span-8'>
									<input
										className='w-full bg-light border  py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500 border-secondary'
										type={inputType}
										name={inputTitle}
										placeholder={inputTitle}
										{...register(`${inputData}`, {
											required: true,
										})}
									/>
								</div>
							</div>
						)
					)}
				</form>
			</div>
		</section>
	);
};

export default AdminBusRouteAdd;
