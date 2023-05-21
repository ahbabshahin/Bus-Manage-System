import React from 'react';

import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
	return (
		<section className='flex flex-col'>
			<div className='mx-auto  text-center flex items-center justify-center my-4'>
				<div className='w-52 border border-gray-300 h-0 bg-gray-300 '></div>
				<p className='mx-2'>or</p>
				<div className='w-52 border border-gray-300 h-0 bg-gray-300 '></div>
			</div>
			<button className='mx-auto w-1/3 border-2 py-3 pl-3 rounded-lg focus:outline-none focus:ring-1  focus:border-blue-500'>
				<FcGoogle className='inline-block text-xl' /> sign in with
				google
			</button>
		</section>
	);
};

export default SocialLogin;
