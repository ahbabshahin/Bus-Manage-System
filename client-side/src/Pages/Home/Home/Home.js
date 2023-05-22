import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../shared/Header/Header';
// import SearchBar from '../../shared/Header/Searchbar/Searchbar';
import Footer from '../../shared/Footer/Footer';
import CategoryCarousel from '../../CategoryCarousel/CategoryCarousel';

const Home = () => {
	return (
		<div>
			<Header />
			{/* <SearchBar></SearchBar> */}
			<Banner />
			<CategoryCarousel />
			<Footer />
		</div>
	);
};
export default Home;
