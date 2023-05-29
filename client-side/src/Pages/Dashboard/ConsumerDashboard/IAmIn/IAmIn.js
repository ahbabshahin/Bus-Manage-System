import axios from 'axios';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// const routes = ['Chottor', 'Kazir Bazar', 'Temuki'];

const inputs = [
	{
		inputType: 'text',
		inputTitle: 'Bus Number',
		inputData: 'busNo',
	},
	{
		inputType: 'text',
		inputTitle: 'Route',
		inputData: 'routeNo',
	},
	{
		inputType: 'text',
		inputTitle: 'Student Id',
		inputData: 'studentId',
	},
	{
		inputType: 'text',
		inputTitle: 'Role',
		inputData: 'role',
	},
];

const IAmIn = () => {
	const { register, handleSubmit, reset } = useForm();
	// const isActiveRef = useRef(false);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		const { routeNo, busNo, studentId, role } = data;
		try {
			const res = await axios.post('/iAmIn/create', {
				routeNo,
				busNo,
				studentId,
				role,
			});
			navigate('/consumerSeatStatus');
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
								Update Seat Status
							</h2>
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
					<div></div>
				</form>
			</div>
		</section>
	);
};
export default IAmIn;
