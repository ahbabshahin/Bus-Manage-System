import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect, useState } from 'react';

const RoutineTable = () => {
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
			name: 'Time Slot',
			selector: (row) => row.timeSlot,
		},
		{
			name: 'Stoppages',
			selector: (row) => row.label,
		},
	];

	useEffect(() => {
		axios
			.get('/busRoutine/getBusRoutine')
			.then((res) => {
				setBusList(res.data.busRoutine);
				setFilterBus(res.data.busRoutine);
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
			title='Bus Routine'
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

export default RoutineTable;
