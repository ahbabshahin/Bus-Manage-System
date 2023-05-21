import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const AdminBusInventoryUpdate = () => {
	const [bus, setBus] = useState();
	const { busId : id } = useParams();
	const navigate = useNavigate();
	const isActiveRef = useRef(false);

	useEffect(() => {
		axios
			.get(`/bus/get/${id}`)
			.then((res) => {
				setBus(res.data.bus);
				console.log(res.data.bus);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const { register, handleSubmit, reset } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
			const { licenseNo, codeName, capacity, name, contacts } = data;

		try {
			const res = await axios.post('/bus/update/:id', {licenseNo, codeName, capacity, driverInfo: {name, contacts},  isActive: isActiveRef.current.checked});
			navigate('/dashboard/inventory');
		} catch (error) {
			console.log(error)
		}

		reset();
	};

	const inputs = [
		{
			id: 1,
			inputType: 'number',
			inputTitle: 'License Number',
			inputData: 'licenseNo',
			value: bus?.licenseNo,
		},
		{
			id: 2,
			inputType: 'number',
			inputTitle: 'Codename',
			inputData: 'codeName',
			value: bus?.codeName,
		},
		{
			id: 3,
			inputType: 'text',
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
			inputType: 'text',
			inputTitle: 'Driver Contact Number',
			inputData: 'contacts',
			value: bus?.driverInfo.contacts,
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
								adding new bus to inventory
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
										{...register(`${inputData}`, {
										})}
									/>
								</div>
							</div>
						)
					)}
					<div>
						<input
							defaultValue={bus?.isActive}
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
