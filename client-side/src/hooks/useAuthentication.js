import { useEffect, useState } from 'react';
import axios from 'axios';
// import { redirect } from 'react-router-dom';

const useAuthentication = () => {
	const [user, setUser] = useState({});
	const [isAdmin, setIsAdmin] = useState(false);

	const handleConsumerRegister = async (user, navigate) => {
		console.log(user);

		try {
			const response = await axios.post('auth/register', user);
			setUser(response.data.user);
			// console.log(response.data.user);
			navigate('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	const handleAdminRegister = async (user, navigate) => {
		console.log(user);

		try {
			const response = await axios.post('auth/register', user);
			setUser(response.data.user);
			// console.log(response.data.user);
			navigate('/dashboard');
		} catch (error) {
			console.log(error);
		}
	};

	const handleConsumerLogin = async (user, navigate) => {
		// console.log(user);

		try {
			const response = await axios.post('auth/login', user);
			setUser(response.data.user);
			// console.log(response.data.user);
			navigate('/dashboard');
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const handleLoginAdmin = async (data, navigate) => {
		console.log(data);

		try {
			const response = await axios.post('auth/admin-login', data);
			setUser(response.data.user);
			// console.log(response.data.user);
			navigate('/dashboard');
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const handleLogout = async (navigate) => {
		try {
			const response = await axios.get('/auth/logout');
			setUser(null);
			window.location.href = 'http://localhost:3000/';

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		axios
			.get('/users/showMe')
			.then((res) => {
				setUser(res.data.user);
			})
			.catch((err) => {
				setUser(null);
			});
	}, []);

	return {
		user,
		handleAdminRegister,
		handleConsumerRegister,
		handleConsumerLogin,
		handleLoginAdmin,
		handleLogout,
	};
};

export default useAuthentication;
