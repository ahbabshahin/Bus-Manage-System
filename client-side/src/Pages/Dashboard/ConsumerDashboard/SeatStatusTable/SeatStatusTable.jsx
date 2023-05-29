import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SeatStatusTable = () => {
	const [search, setSearch] = useState('');
	const [busList, setBusList] = useState([]);
	const [filterBus, setFilterBus] = useState([]);
	// const navigate = useNavigate();

	const columns = [
		{
			name: 'Route',
			selector: (row) => row.routeNo,
		},
		{
			name: 'Bus Number',
			selector: (row) => row.busNo,
		},
		{
			name: 'Empty Seat',
			selector: (row) => row.emptySeat,
		},
	];

	useEffect(() => {
		axios
			.get('/iAmIn/get')
			.then((res) => {
				setBusList(res.data.emptySeat);
				setFilterBus(res.data.emptySeat);
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
			title='Available Seat'
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

export default SeatStatusTable;
