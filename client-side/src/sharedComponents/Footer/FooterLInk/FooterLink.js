import React from 'react';

const FooterLink = (props) => {
	const { title, links, icon1, time, emailLink, support, phone, icon2 } =
		props.footerLinks;

	return (
		<div>
			{/* title */}
			<h2 className='text-xl text-[#0E1C36] font-semibold'>{title}</h2>
			<div className='w-12 border-b-4 border-pink-700 mt-3 mb-6'></div>
			{/* links */}
			<div className='space-y-3'>
				{links?.map((link) => (
					<p
						key={link}
						className='text-gray-700 hover:text-pink-600 '
					>
						{link}
					</p>
				))}
			</div>
			<div className='space-y-3 '>
				<p className='flex gap-3 text-gray-700 hover:text-pink-600'>
					<span className='block  text-xl'>{icon1 && icon1}</span>
					<span className='block text-base'>{time && time}</span>
				</p>
				<p className='text-xl font-semibold'>
					{emailLink && emailLink}
				</p>
				<p className='flex gap-3 text-gray-700 hover:text-pink-600'>
					<span className='block  text-2xl'>{icon2 && icon2}</span>
					<span className='block text-base '>
						{support && support}
					</span>
				</p>
				<p className='text-2xl font-semibold'>{phone && phone}</p>
			</div>
		</div>
	);
};

export default FooterLink;
