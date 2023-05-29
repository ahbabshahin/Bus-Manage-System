import React, { useEffect, useState } from 'react';

import Header from '../../../shared/Header/Header';
import SeatStatusTable from '../SeatStatusTable/SeatStatusTable';

const ConsumerSeatStatus = () => {
	return (
		<div>
			<Header />

			<SeatStatusTable />
		</div>
	);
};
export default ConsumerSeatStatus;
