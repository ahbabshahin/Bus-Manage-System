import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const AdminBusInventoryUpdate = () => {
	const [bus, setBus] = useState();
	const { busId: id } = useParams();
	const navigate = useNavigate();
	const isActiveRef = useRef(false);
	const { register, handleSubmit, reset } = useForm();

	useEffect(() => {
		axios
			.get(`/bus/get/${id}`)
			.then((res) => {
				setBus(res.data.bus);
				reset(res.data.bus);
				isActiveRef.current.checked = res.data.bus.isActive;
				console.log(res.data.bus);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const onSubmit = async (data) => {
		// console.log(data);
		const { routeNo, busNo, capacity, name, contactNumber } = data;

		const sendData = {
			routeNo,
			busNo,
			capacity,
			driverInfo: {
				name,
				contactNumber,
			},
			isActive: isActiveRef.current.checked,
		};

		console.log(sendData, 'senddata');

		try {
			const res = await axios.put(`/bus/${id}`, sendData);
			setBus(res.data.bus);
			// console.log(res.data.bus);
			navigate('/dashboard/inventory');
		} catch (error) {
			console.log(error);
		}

		reset();
	};

	const inputs = [
		{
			id: 1,
			inputType: 'text',
			inputTitle: 'Route',
			inputData: 'routeNo',
			value: bus?.routeNo,
		},
		{
			id: 2,
			inputType: 'text',
			inputTitle: 'Bus No',
			inputData: 'busNo',
			value: bus?.busNo,
		},
		{
			id: 3,
			inputType: 'number',
			inputTitle: 'Capacity',
			inputData: 'capacity',
			value: bus?.capacity,
		},

		{
			id: 4,
			inputType: 'text',
			inputTitle: 'Driver Name',
			inputData: 'name',
			value: bus?.driverInfo.name,
		},
		{
			id: 5,
			inputType: 'number',
			inputTitle: 'Driver Contact Number',
			inputData: 'contactNumber',
			value: bus?.driverInfo.contactNumber,
		},
	];
	return (
		<div>
			<div className='flex flex-col justify-center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex justify-between '>
						<div>
							<h2 className='text-2xl font-semibold'>
								Update Bus
							</h2>
							<p className='text-sm text-gray-600'>
								updating bus to inventory
							</p>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'submit'}
								className=' border py-3 px-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
					{/* update the form */}
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
										{...register(`${inputData}`, {})}
									/>
								</div>
							</div>
						)
					)}
					<div>
						<input
							ref={isActiveRef}
							type='checkbox'
							className='p-5 inline-block'
						/>
						<p className='inline-block ml-3 text-base'>
							Bus is Active
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdminBusInventoryUpdate;
