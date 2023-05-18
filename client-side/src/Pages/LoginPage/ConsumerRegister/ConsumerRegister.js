import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAuthentication from '../../../hooks/useAuthentication';
import userLogin from '../../../Images/user-login.png';
const initialInputs = [
	{
		inputType: 'Full Name',
		property: 'name',
	},
	{
		inputType: 'Email',
		property: 'email',
	},
	{
		inputType: 'password',
		property: 'password',
	},
	{
		inputType: 'Contact Number',
		property: 'contacts',
	},
];

const ConsumerRegister = () => {
	const [finInputList, setFinInputList] = useState(initialInputs);
	const [role, setRole] = useState('student');

	// form submit
	const { register, handleSubmit, reset } = useForm();

	// custom hooks
	const { handleConsumerRegister } = useAuth();
	const navigate = useNavigate();

	const handleRole = (newRole) => {
		setRole((prevRole) => newRole);

		if (newRole === 'student') {
			setFinInputList((prevList) => [
				...initialInputs,
				{ inputType: 'Student ID', property: 'studentId' },
			]);
		} else {
			setFinInputList((prevList) => [...initialInputs]);
		}
	};

	const onSubmit = (data) => {
		console.log(data);
		data.role = role;

		handleConsumerRegister(data, navigate);
		reset();
	};

	return (
		<section className='mx-auto'>
			<div className='grid grid-cols-12 grid-gap-[25px] justify-center items-center'>
				{/* image */}
				<div className='col-span-5'>
					<img src={userLogin} alt='' />
				</div>
				<div className='p-[25px] col-span-7'>
					<h2 className='text-dark font-semibold text-3xl mb-2'>
						Consumer Register
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						fill the forms to login as a user
					</p>
					{/* input forms */}
					<form onSubmit={handleSubmit(onSubmit)}>
						{finInputList.map(({ inputType, property }, index) => (
							<div key={index} className=' py-2'>
								<input
									className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500'
									type={inputType}
									name={inputType}
									placeholder={inputType}
									{...register(`${property}`, {
										required: true,
									})}
								/>
								{/*     <small className='text-red-500 block mt-2 text-sm'>
                                    {error}
                                </small> */}
							</div>
						))}

						{/*     <small className='text-red-500 block mt-2 text-sm'>
                                    {error}
                                </small> */}

						{/* student role */}
						<div className='flex space-x-4 items-center my-3'>
							<div
								className={`px-5 py-3 rounded text-dark hover:bg-gray-400 capitalize shadow ${
									role === 'student'
										? 'bg-gray-500 text-white'
										: 'bg-gray-200'
								}`}
								onClick={() => handleRole('student')}
							>
								student
							</div>
							<div
								className={`px-5 py-3 rounded text-dark hover:bg-gray-400 capitalize shadow ${
									role === 'teacher'
										? 'bg-gray-500 text-white'
										: 'bg-gray-200'
								}`}
								onClick={() => handleRole('teacher')}
							>
								teacher
							</div>
							<div
								className={`px-5 py-3 rounded text-dark hover:bg-gray-400 capitalize shadow ease-in-out duration-100 ${
									role === 'staff'
										? 'bg-gray-500 text-white'
										: 'bg-gray-200'
								}`}
								onClick={() => handleRole('staff')}
							>
								staff
							</div>
						</div>

						<div className='py-2 '>
							<input
								type='submit'
								value={'Register'}
								className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</form>
					{/* signup link */}

					<p className='mt-5'>
						Don't have an account ?
						<Link
							className='form-link text-base text-[#0E1C36] font-semibold ml-2'
							to='/consumerLogin'
						>
							Sign In
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ConsumerRegister;
