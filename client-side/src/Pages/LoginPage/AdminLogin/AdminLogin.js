import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import userLogin from '../../../Images/user-login.png';

const initialInputs = [
	{
		inputType: 'Email',
		property: 'email',
	},
	{
		inputType: 'password',
		property: 'password',
	},
];

const AdminLogin = () => {
	// form submit
	const { register, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const { handleLoginAdmin } = useAuth();

	const onSubmit = (data) => {
		console.log(data);
		handleLoginAdmin(data, navigate);
		reset();
	};

	return (
		<section className='mx-auto'>
			<div className='grid grid-cols-2 justify-center space-x-5 items-center'>
				{/* image */}
				<article className=''>
					<img src={userLogin} alt='' />
				</article>
				<article className=''>
					<h2 className='text-dark font-semibold text-3xl mb-2'>
						Admin Login
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						fill the forms to login as an admin
					</p>
					{/* input forms */}
					<form onSubmit={handleSubmit(onSubmit)}>
						{initialInputs.map(({ inputType, property }, index) => (
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
								{/* 	<small className='text-red-500 block mt-2 text-sm'>
									{error}
								</small> */}
							</div>
						))}

						<div className='py-2 '>
							<input
								type='submit'
								value={'Login'}
								className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</form>
				</article>
			</div>
		</section>
	);
};

export default AdminLogin;
