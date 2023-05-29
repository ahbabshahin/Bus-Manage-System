import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from 'react-router-dom';

const StoppagesTable = () => {
	const [search, setSearch] = useState('');
	const [stopList, setStopList] = useState([]);
	const [filterStop, setFilterStop] = useState([]);
	const navigate = useNavigate();

	const columns = [
		{
			name: 'Route',
			selector: (row) => row.routeNo,
		},
		{
			name: 'Stoppages',
			selector: (row) => row.label,
		},
		// {
		// 	name: 'Capacity',
		// 	selector: (row) => row.capacity,
		// },
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

	useEffect(() => {
		getStop();
	}, []);
	const getStop = () => {
		axios
			.get('/stoppage/get')
			.then((res) => {
				setStopList(res.data.stoppages);
				setFilterStop(res.data.stoppages);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		const result = stopList.filter((stop) => {
			return stop.routeNo.toLowerCase().match(search.toLocaleLowerCase());
		});
		setFilterStop(result);
	}, [search]);

	const handleClick = async (stopId) => {
		try {
			const res = await axios.delete(`/stoppage/${stopId}`);
			// setBusList(res.data.cC);
			getStop();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DataTable
			title='Stoppages List'
			columns={columns}
			data={filterStop}
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

export default StoppagesTable;
