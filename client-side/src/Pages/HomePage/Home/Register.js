import React from 'react';
import LoginStarter from '../LoginStarter/LoginStarter';
import Header from '../../shared/Header/Header';

const Home = () => {
	// className='container'
	return (
		<div>
			<Header />
			<LoginStarter />
			{/* <Navbar />
			<Footer /> */}
		</div>
	);
};

export default Home;
