import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const routes = ['Chottor', 'Kazir Bazar', 'Temuki'];

const inputs = [
	{
		inputType: 'text',
		inputTitle: 'Bus Number',
		inputData: 'busNo',
	},
	{
		inputType: 'text',
		inputTitle: 'Route',
		inputData: { routes },
	},
	{
		inputType: 'number',
		inputTitle: 'Capacity',
		inputData: 'capacity',
	},
	{
		inputType: 'text',
		inputTitle: 'Driver Name',
		inputData: 'name',
	},
	{
		inputType: 'text',
		inputTitle: 'Driver Contact Number',
		inputData: 'contactNumber',
	},
];

const AdminBusInventoryAdd = () => {
	const { register, handleSubmit, reset } = useForm();
	const isActiveRef = useRef(false);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const { routeNo, busNo, capacity, name, contactNumber } = data;
		try {
			const res = await axios.post('/bus/create', {
				routeNo,
				busNo,
				capacity,
				driverInfo: { name, contactNumber },
				isActive: isActiveRef.current.checked,
			});
			navigate('/dashboard/inventory');
		} catch (error) {
			console.log(error);
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
								Bus Inventory
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
					<div>
						<input
							type='checkbox'
							ref={isActiveRef}
							className='p-5 inline-block'
						/>
						<p className='inline-block ml-3 text-base'>
							Bus is Active
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};
export default AdminBusInventoryAdd;
