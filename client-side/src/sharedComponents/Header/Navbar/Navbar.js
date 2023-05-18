import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMedrt } from 'react-icons/fa';
import NavigationLink from '../NavigationLink/NavigationLink';

const navigation = [
	{ id: 1, to: '/home', name: 'Home' },
	{ id: 2, to: '/about', name: 'About' },
	{ id: 3, to: '/services', name: 'Services' },
	{ id: 4, to: '/department', name: 'Department' },
	{ id: 5, to: '/doctor', name: 'Doctor' },
	{ id: 6, to: '/blog', name: 'Blog' },
	{ id: 7, to: '/contact', name: 'contact' },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className=' border-gray-200 px-2 sm:px-4 py-2.5 rounded '>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				{/* logo and title */}
				<div className='flex items-center gap-3'>
					<div className='flex items-center'>
						<FaMedrt className='text-4xl  text-pink-700 ml-5' />
					</div>
					<span className='self-center  font-semibold whitespace-nowrap text-black text-4xl'>
						Medics
					</span>
				</div>
				<div className='flex items-center md:order-2'>
					{/* profile drop down */}

					<button
						onClick={() => setOpen(!open)}
						data-collapse-toggle='mobile-menu-2'
						type='button'
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg '
						aria-controls='mobile-menu-2'
						aria-expanded='false'
					>
						<span className='sr-only'>Open main menu</span>

						{/* menu bar*/}
						<div
							onClick={() => setOpen(!open)}
							className='md:hidden'
						>
							{open ? (
								<AiOutlineClose className='w-7 h-7' />
							) : (
								<AiOutlineMenu className='w-7 h-7' />
							)}
						</div>
					</button>
				</div>
				<div
					id='mobile-menu-2'
					className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${
						!open ? 'hidden' : 'block'
					} `}
				>
					<ul
						className='flex flex-col p-4 mt-4 rounded-lg 
          border border-gray-400 md:flex-row md:space-x-8 md:mt-0 md:text-sm 
          md:font-medium md:border-0  '
					>
						{navigation.map((nav) => (
							<NavigationLink key={nav.id} nav={nav} />
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
