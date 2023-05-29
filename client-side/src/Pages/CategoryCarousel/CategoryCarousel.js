import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import metroBus from '../../Images/metroBus.jpeg';
import seatStatus from '../../Images/seatStatus.jpg';

const CategoryCarousel = () => {
	return (
		<div>
			<section className='container py-20 mx-auto'>
				<SectionTitle title='Explore by' />
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
					<div className='relative '>
						<div>
							<img
								src={metroBus}
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							{/* <p className='text-sm text-gray-400 py-1'>
								
								
							</p> */}
							<h2 className='text-2xl font-medium text-gray-700'>
								<a href='/consumerInventory'>Bus Details</a>
							</h2>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src={seatStatus}
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							{/* <p className='text-sm text-gray-400 py-1'>
								B E A C H
							</p> */}
							<h2 className='text-2xl font-medium text-gray-700'>
								<a href='/consumerSeatStatus'>Seat Status</a>
							</h2>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://gecexchanges.com/wp-content/uploads/teach-english-in-thailand-banner.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<h2 className='text-2xl font-medium text-gray-700'>
								<a href='/consumerStoppages'>Stoppages</a>
							</h2>
						</div>
					</div>
					<div className='relative '>
						<div>
							<img
								src='https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg'
								alt='category'
								className='lg:h-80 md:h-48 w-full object-cover object-center rounded-2xl'
							/>
						</div>

						<div className='shadow-2xl bg-white p-10 rounded-2xl w-10/12 mx-auto translate-middle absolute top-56 left-7'>
							<h2 className='text-2xl font-medium text-gray-700'>
								<a href='/consumerRoutes'>Routes Details</a>
							</h2>
						</div>
					</div>
				</div>
			</section>
			{/* <section className='container py-48 mx-auto'>
				<BannerCard />
			</section> */}
		</div>
	);
};

export default CategoryCarousel;
