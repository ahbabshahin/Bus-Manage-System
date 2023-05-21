import React from 'react';

const routes = [1, 2, 3, 4, 5, 6];
const timeSlots = ['9.00 AM', '11.00 AM', '2:00 PM', '4:00 PM', '7:00 PM'];

const ConsumeRequestSeat = () => {
	return (
		<section>
			{/* selecting routes */}
			<div>
				<h2 className='text-xl font-semibold mb-5'>Select Routes</h2>
				<div className='flex flex-wrap gap-3'>
					{routes.map((index, route) => (
						<article
							key={index}
							className=' border-2 border-gray-300 route p-10 rounded shadow'
						>
							<div>
								<h2 className='text-dark'>Route {route}</h2>
							</div>
							<div>
								<p>Zindabazar, Ambarkhana</p>
							</div>
						</article>
					))}
				</div>
			</div>
			{/* selecting time slots */}
			<div className='mt-8'>
				<h2 className='text-xl font-semibold mb-5'>
					Select Time slots
				</h2>
				<div className='flex flex-wrap gap-3'>
					{timeSlots.map((time, index) => (
						<article
							key={index}
							className=' border-2 border-gray-300 route p-10 rounded shadow'
						>
							<div>
								<p>{time}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default ConsumeRequestSeat;
