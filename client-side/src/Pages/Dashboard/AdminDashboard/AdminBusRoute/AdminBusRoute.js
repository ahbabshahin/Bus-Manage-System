import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import RoutesTable from '../RoutesTable/RoutesTable';

const AdminBusRoute = () => {
	const navigate = useNavigate();

	return (
		<div>
			{/* add new routes */}
			<div onClick={() => navigate('/dashboard/addRoute')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Routes
				</h2>
			</div>
			<RoutesTable />
		</div>
	);
};

export default AdminBusRoute;
