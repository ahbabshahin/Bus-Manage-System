import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import userLogin from '../../../Images/user-login.png';

const initialInputs = [
	{
		inputType: 'Name',
	},
	{
		inputType: 'Email',
	},
	{
		inputType: 'password',
	},
	{
		inputType: 'contact Number',
	},
];

const AdminRegister = () => {
	// form submit
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);

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
						Admin Register
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						fill the forms to login as an admin
					</p>
					{/* input forms */}
					<form onSubmit={handleSubmit(onSubmit)}>
						{initialInputs.map(({ inputType }, index) => (
							<div key={index} className=' py-2'>
								<input
									className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500'
									type={inputType}
									name={inputType}
									placeholder={inputType}
									{...register(`${inputType}`, {
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
								value={'Register'}
								className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</form>
					{/* signup link */}

					<p className='mt-5'>
						Already have an account ?
						<Link
							className='form-link text-base text-[#0E1C36] font-semibold ml-2'
							to='/adminLogin'
						>
							Sign Up
						</Link>
					</p>
				</article>
			</div>
		</section>
	);
};

export default AdminRegister;
