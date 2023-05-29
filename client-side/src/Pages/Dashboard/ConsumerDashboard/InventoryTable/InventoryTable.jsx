import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
const InventoryTable = () => {
	const [search, setSearch] = useState('');
	const [busList, setBusList] = useState([]);
	const [filterBus, setFilterBus] = useState([]);
	// const navigate = useNavigate();

	const columns = [
		{
			name: 'Bus Number',
			selector: (row) => row.busNo,
		},
		{
			name: 'Route',
			selector: (row) => row.routeNo,
		},
		{
			name: 'Capacity',
			selector: (row) => row.capacity,
		},
		{
			name: 'Contacts',
			selector: (row) => row.driverInfo.contactNumber,
		},
		{
			name: 'Bus Status',
			selector: (row) => (row.isActive ? 'active' : 'inactive'),
			sortable: true,
		},
		// {
		// 	name: 'Action',
		// 	cell: (row) => (
		// 		<Button
		// 			className='btn btn-primary'
		// 			onClick={() => alert(row._id)}
		// 		>
		// 			Edit
		// 		</Button>
		// 	),
		// },
	];

	useEffect(() => {
		axios
			.get('/bus/get')
			.then((res) => {
				setBusList(res.data.bus);
				setFilterBus(res.data.bus);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		const result = busList.filter((bus) => {
			return bus.routeNo.toLowerCase().match(search.toLocaleLowerCase());
		});
		setFilterBus(result);
	}, [search]);
	return (
		<DataTable
			title='List of Existing Bus'
			columns={columns}
			data={filterBus}
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

export default InventoryTable;
