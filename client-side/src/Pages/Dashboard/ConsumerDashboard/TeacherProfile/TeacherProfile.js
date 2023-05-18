import React from 'react';
import { useForm } from 'react-hook-form';

const inputs = [
	{
		inputType: 'Full Name',
		inputData: 'name',
		text: '',
	},
	{
		inputType: 'Batch No',
		inputData: 'batch',
		text: '',
	},
	{
		inputType: 'section',
		inputData: 'section',
		text: '',
	},
];

const TeacherProfile = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log(data);

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
								Your Profile
							</h2>
							<p className='text-sm text-gray-600'>
								Update your profile with name, batch and section
							</p>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'save'}
								className=' border py-3 px-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
					{inputs.map(({ inputType }, index) => (
						<div
							key={index}
							className='grid grid-cols-12 justify-between py-2 mt-5'
						>
							<div className='col-span-4'>
								<label>Your {inputType}</label>
							</div>
							<div className='col-span-8'>
								<input
									className='w-full bg-light border  py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500 border-secondary'
									type={inputType}
									name={inputType}
									placeholder={inputType}
									{...register(`${inputType}`, {
										required: true,
									})}
								/>
							</div>
						</div>
					))}
				</form>
				<div className='mt-20'>
					<p>User Info</p>
					<h2 className='text-2xl font-medium'>Taylor Silora</h2>
					<h3>taylorSilora@gmail.com</h3>
					<h4>+880349499493</h4>
				</div>
			</div>
		</section>
	);
};

export default TeacherProfile;
