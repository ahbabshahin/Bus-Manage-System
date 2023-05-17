import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = (props) => {
	const { to, name } = props.nav;
	return (
		<>
			<li>
				<Link
					to={to}
					className='block py-2 md:px-0  rounded 
                   md:hover:bg-[#dbeafe] text-lg  hover:text-pink-700  md:hover:underline 
                   md:hover:underline-offset-8 hover:decoration-2 hover:bg-blue-200'
					aria-current='page'
				>
					{name}
				</Link>
			</li>
		</>
	);
};

export default NavigationLink;
