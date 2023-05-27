import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const initialStats = [
	{ title: 'No. of Bus', value: 10 },
	{ title: 'No. of Routes', value: 10 },
	{ title: 'No. of Students', value: 10 },
	{ title: 'No. of Teachers', value: 10 },
	{ title: 'No. of Stuffs', value: 10 },
];

const AdminDashboardHome = () => {
	const [dashboardList, setDashboardList] = useState();

	useEffect(() => {
		axios
			.get('/dashboard/get')
			.then((res) => {
				setDashboardList(res.data.info);
				console.log(res.data.info);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div className='p-[25px]'>
			<div className='grid grid-cols-5 gap-2'>
				{dashboardList &&
					dashboardList.map(
						({ _id, route, bus, student, teacher, staff }) => (
							<div
								key={_id}
								className='border rounded-lg shadow bg-white p-[25px]'
							>
								<h2>No. of Bus</h2>
								<h5>{bus}</h5>
								<h2>No. of Routes</h2>
								<h5>{route}</h5>
								<h2>No. of Students</h2>
								<h5>{student}</h5>
								<h2>No. of Teachers</h2>
								<h5>{teacher}</h5>
								<h2>No. of Staffs</h2>
								<h5>{staff}</h5>
							</div>
						)
					)}
			</div>
		</div>
	);
};

export default AdminDashboardHome;
