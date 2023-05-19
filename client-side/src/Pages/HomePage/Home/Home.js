import React from 'react';
import SecondHome from '../../SecondHome/SecondHome';
import LoginStarter from '../LoginStarter/LoginStarter';




const Home = () => {
	return (
		<div className='container'>
			<LoginStarter></LoginStarter>
			<SecondHome></SecondHome>

				{/* <Navbar></Navbar> */}
			 {/* <Footer></Footer> */}
		</div>
	);
};

export default Home;
