import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className='py-20 bg-darklight text-gray-200'>
			<div className='container mx-auto'>
				<div className='pt-11'>
					<div className='flex'>
						<div>
							<p className=' text-gray-500'>
								Copyright © 2003 - 2050{' '}
								<a
									href='https://metrouni.edu.bd/'
									className='pb-4 text-yellow-600'
								>
									Metropolitan University.
								</a>{' '}
								All rights reserved.
							</p>
						</div>

						<div className='pl-11 flex'>
							{/* <div className='mb-10 pr-10'>
								<h4 className='text-sm font-bold'>
									<a
										href='/#'
										className='pb-4 hover:text-yellow-600'
									>
										Terms of Use
									</a>
								</h4>
							</div>
							<div className='mb-10 pr-10'>
								<h4 className='text-sm font-bold'>
									<a
										href='/#'
										className='pb-4 hover:text-yellow-600'
									>
										Privacy Policy
									</a>
								</h4>
							</div> */}

							<i className='inline pr-2.5'>
								<a
									href='https://www.facebook.com/groups/metrouni'
									className='pb-4 text-blue-600'
								>
									<FaFacebookF />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='https://www.instagram.com/metropolitanuniversity/'
									className='pb-4 text-red-600'
								>
									<BsInstagram />
								</a>
							</i>

							<i className='inline pr-2.5'>
								<a
									href='https://www.linkedin.com/school/metrouni-edu-bd/'
									className='pb-4 text-blue-600'
								>
									<BsLinkedin />
								</a>
							</i>
							<i className='inline pr-2.5'>
								<a
									href='https://www.youtube.com/@metropolitanuniversity346'
									className='pb-4 text-red-600'
								>
									<BsYoutube />
								</a>
							</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
