import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';

const RoutesTable = () => {
	const [search, setSearch] = useState('');
	const [routeList, setRouteList] = useState([]);
	const [filterRoute, setFilterRoute] = useState([]);
	const navigate = useNavigate();

	const columns = [
		{
			name: 'Route',
			selector: (row) => row.routeNo,
		},
		{
			name: 'BusNo',
			selector: (row) => row.busNo,
		},
		{
			name: 'Start Time',
			selector: (row) => row.timeSlot,
		},
		// {
		// 	name: 'Contacts',
		// 	selector: (row) => row.driverInfo.contactNumber,
		// },
		// {
		// 	name: 'Bus Status',
		// 	selector: (row) => (row.isActive ? 'active' : 'inactive'),
		// 	sortable: true,
		// },
		{
			name: 'Edit',
			cell: (row) => (
				<button
					className='btn'
					onClick={() =>
						navigate(`/dashboard/stoppageUpdate/${row._id}`)
					}
				>
					Edit
				</button>
			),
		},

		{
			name: 'Delete',
			cell: (row) => (
				<button className='btn' onClick={() => handleClick(row._id)}>
					Delete
				</button>
			),
		},
	];

	// const navigate = useNavigate();
	// const [routeList, setRouteList] = useState();

	useEffect(() => {
		getRoutes();
	}, []);
	const getRoutes = () => {
		axios
			.get('/timeSlots/get')
			.then((res) => {
				setRouteList(res.data.timeSlots);
				setFilterRoute(res.data.timeSlots);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const result = routeList.filter((route) => {
			return route.routeNo
				.toLowerCase()
				.match(search.toLocaleLowerCase());
		});
		setFilterRoute(result);
	}, [search]);

	const handleClick = async (routeId) => {
		try {
			const res = await axios.delete(`/timeSlots/${routeId}`);
			// setBusList(res.data.cC);
			getRoutes();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DataTable
			title='Routes List'
			columns={columns}
			data={filterRoute}
			pagination
			fixedHeader
			fixedHeaderScrollHeight='450px'
			highlightOnHover
			subHeader
			subHeaderComponent={
				<input
					type='text'
					placeholder='search here'
					className='w-25 form-control'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			}
		/>
	);
};

export default RoutesTable;
