import React, { useEffect, useState } from 'react';

import HeaderDashboard from '../../../shared/Header/HeaderDashboard';
import SeatStatusTable from '../SeatStatusTable/SeatStatusTable';

const ConsumerSeatStatus = () => {
	return (
		<div>
			<HeaderDashboard />

			<SeatStatusTable />
		</div>
	);
};
export default ConsumerSeatStatus;
