import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';
<link
	rel='stylesheet'
	href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
></link>;
const InventoryTable = () => {
	const [search, setSearch] = useState('');
	const [busList, setBusList] = useState([]);
	const [filterBus, setFilterBus] = useState([]);
	const navigate = useNavigate();

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
		{
			name: 'Edit',
			cell: (row) => (
				<button
					className='btn'
					onClick={() => navigate(`/dashboard/busUpdate/${row._id}`)}
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
			// ),
		},
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
	const getBus = () => {
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
	};

	useEffect(() => {
		const result = busList.filter((bus) => {
			return bus.routeNo.toLowerCase().match(search.toLocaleLowerCase());
		});
		setFilterBus(result);
	}, [search]);

	const handleClick = async (busId) => {
		try {
			const res = await axios.delete(`/bus/delete/${busId}`);
			// setBusList(res.data.cC);
			getBus();
		} catch (error) {
			console.log(error);
		}
	};

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
