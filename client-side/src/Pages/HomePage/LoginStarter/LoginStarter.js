import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const LoginStarter = () => {
	const navigate = useNavigate();

	const userType = [
		{
			type: 'consumer',
			text: 'click here, if you are a teacher, students or staff.',
			icon: <FaUsers className='inline-block text-5xl text-slate-900' />,
			handler: () => navigate('/consumerRegister'),
		},
		{
			type: 'admin',
			text: 'click here, if you are a transport managerial administrative system',
			icon: (
				<GrUserAdmin className='inline-block text-5xl text-slate-900' />
			),
			handler: () => navigate('/adminLogin'),
		},
	];

	return (
		<section className='container mx-auto '>
			<div className='mt-20 mx-auto text-center'>
				{/* title */}
				<article>
					<h2 className='text-3xl font-semibold text-dark'>
						Select User Type
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						To continue please select your role in this project
					</p>
				</article>
				{/* user type card */}
				<article className='flex justify-center items-center gap-5 mt-14'>
					{userType.map(({ type, icon, text, handler }, index) => (
						<div
							onClick={handler}
							key={index}
							className='border border-gray-300 shadow w-[460px] h-[260px] pt-10 rounded-md focus:ring-1 hover:border-purple-700'
						>
							<p>{icon}</p>
							<p className='text-xl py-5 capitalize'>{type}</p>
							<p className='text-sm '>{text}</p>
						</div>
					))}
				</article>
			</div>
		</section>
	);
};

export default LoginStarter;
