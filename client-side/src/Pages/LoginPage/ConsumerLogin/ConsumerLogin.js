import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAuthentication from '../../../hooks/useAuthentication';
import userLogin from '../../../Images/user-login.png';

const initialInputs = [
	{
		inputType: 'Email', property: 'email'
	},
	{
		inputType: 'password', property: 'password'
	},
];

const ConsumerLogin = () => {
	// form submit
	const { handleLoginConsumer } = useAuthentication();
	console.log(handleLoginConsumer);
	const { register, handleSubmit, reset } = useForm();
	const { handleConsumerLogin } = useAuth();
	const navigate= useNavigate();

	const onSubmit = (data) => {
		console.log(data);

		handleConsumerLogin(data, navigate);

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
						Consumer Login
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						fill the forms to login as a user
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
								value={'Sign In'}
								className='w-1/2 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</form>
					{/* signup link */}

					<p className='mt-5'>
						Already have an account ?
						<Link
							className='form-link text-base text-[#0E1C36] font-semibold ml-2'
							to='/consumerRegister'
						>
							Sign Up
						</Link>
					</p>
				</article>
			</div>
		</section>
	);
};

export default ConsumerLogin;
