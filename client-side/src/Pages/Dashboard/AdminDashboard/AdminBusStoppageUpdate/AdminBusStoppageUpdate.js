import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const AdminBusStoppageUpdate = () => {
	const { stoppageId: id } = useParams();
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const [ stoppage, setStoppage ] = useState();

	useEffect(() => {
		axios
			.get(`/stoppages/get/${id}`)
			.then((res) => {
				setStoppage(res.data.stoppage);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	const inputs = [
		{
			inputType: 'number',
			inputTitle: 'Route Number',
			inputData: 'routeNo',
			value: stoppage?.routeNo,
		},
		{
			inputType: 'text',
			inputTitle: 'label',
			inputData: 'label',
			value: stoppage?.label,
		},
		{
			inputType: 'text',
			inputTitle: 'Latitude',
			inputData: 'latitude',
			value: stoppage?.latitude,
		},
		{
			inputType: 'text',
			inputTitle: 'Longitude',
			inputData: 'longitude',
			value: stoppage?.longitude,
		},
	];

	const onSubmit =  async (data) => {
		try {
			const res = await axios.post('/stoppage/update/:id', data);
			navigate('/dashboard/stoppages');
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
								Bus Stoppage
							</h2>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'Update'}
								className=' border py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
					{inputs.map(
						(
							{ inputType, inputTitle, inputData, value },
							index
						) => (
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
										defaultValue={value}
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

export default AdminBusStoppageUpdate;
