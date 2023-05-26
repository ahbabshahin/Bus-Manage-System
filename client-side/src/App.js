import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBusInventory from './Pages/Dashboard/AdminDashboard/AdminBusInventory/AdminBusInventory';
import ConsumerBusInventory from './Pages/Dashboard/ConsumerDashboard/ConsumerBusInventory/ConsumerBusInventory';
import AdminBusInventoryAdd from './Pages/Dashboard/AdminDashboard/AdminBusInventoryAdd/AdminBusInventoryAdd';
import AdminBusInventoryUpdate from './Pages/Dashboard/AdminDashboard/AdminBusInventoryUpdate/AdminBusInventoryUpdate';
import AdminBusRoute from './Pages/Dashboard/AdminDashboard/AdminBusRoute/AdminBusRoute';
import AdminBusRouteAdd from './Pages/Dashboard/AdminDashboard/AdminBusRouteAdd/AdminBusRouteAdd';
import AdminBusRouteUpdate from './Pages/Dashboard/AdminDashboard/AdminBusRouteUpdate/AdminBusRouteUpdate';
import AdminBusStoppage from './Pages/Dashboard/AdminDashboard/AdminBusStoppage/AdminBusStoppage';
import AdminBusStoppageAdd from './Pages/Dashboard/AdminDashboard/AdminBusStoppageAdd/AdminBusStoppageAdd';
import AdminBusStoppageUpdate from './Pages/Dashboard/AdminDashboard/AdminBusStoppageUpdate/AdminBusStoppageUpdate';

import ConsumerDashboardProfile from './Pages/Dashboard/ConsumerDashboard/ConsumerDashboardProfile/ConsumerDashboardProfile';

import AdminLogin from './Pages/LoginPage/AdminLogin/AdminLogin';
import AdminRegister from './Pages/LoginPage/AdminRegister/AdminRegister';
import ConsumerBusDetails from './Pages/LoginPage/ConsumerBusDetails/ConsumerBusDetails';
import ConsumerRegister from './Pages/LoginPage/ConsumerRegister/ConsumerRegister';
import ConsumerLogin from './Pages/LoginPage/ConsumerLogin/ConsumerLogin';
// import ConsumeRequestSeat from './Pages/Dashboard/ConsumerDashboard/ConsumerRequestSeat/ConsumeRequestSeat';

import NotFound from './Pages/NotFoundPage/NotFound/NotFound';

import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import AdminDashboardHome from './Pages/Dashboard/AdminDashboard/AdminDashboardHome/AdminDashboardHome';

import Home from './Pages/Home/Home/Home';
import Register from './Pages/HomePage/Home/Register.js';
import ConsumerSeatStatus from './Pages/Dashboard/ConsumerDashboard/ConsumerSeatStatus/ConsumerSeatStatus';
import IAmIn from './Pages/Dashboard/ConsumerDashboard/IAmIn/IAmIn';
import Reached from './Pages/Dashboard/ConsumerDashboard/Reached/Reached';
// import ConsumerDashboardHome from './Pages/Dashboard/ConsumerDashboard/ConsumerDashboardHome/ConsumerDashboardHome';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='register' element={<Register />} />
				<Route path='adminlogin' element={<AdminLogin />} />
				<Route path='adminRegister' element={<AdminRegister />} />
				<Route path='consumerRegister' element={<ConsumerRegister />} />
				<Route path='consumerLogin' element={<ConsumerLogin />} />
				{/* <Route path='header' element={<Header />}></Route> */}
				<Route
					path='/consumerBusInfo'
					element={<ConsumerBusDetails />}
				/>
				<Route
					path='consumerInventory'
					element={<ConsumerBusInventory />}
				/>
				<Route path='dashboard/*' element={<DashboardHome />}>
					<Route path='inventory' element={<AdminBusInventory />} />
					<Route
						path='consumerSeatStatus'
						element={<ConsumerSeatStatus />}
					/>
					<Route path='iAmIn' element={<IAmIn />} />
					<Route path='reached' element={<Reached />} />

					<Route
						path='admindashboard'
						element={<AdminDashboardHome />}
					/>
					{/* <Route
						path='consumerDashboard'
						element={<ConsumerDashboardHome />}
					/> */}
					<Route
						path='profile'
						element={<ConsumerDashboardProfile />}
					/>
					<Route path='addBus' element={<AdminBusInventoryAdd />} />
					{/* <Route path='request' element={<ConsumeRequestSeat />} /> */}
					<Route
						path='routeUpdate/:routeId'
						element={<AdminBusRouteUpdate />}
					/>
					<Route path='stoppages' element={<AdminBusStoppage />} />
					<Route
						path='addstoppage'
						element={<AdminBusStoppageAdd />}
					/>
					<Route
						path='busUpdate/:busId'
						element={<AdminBusInventoryUpdate />}
					/>
					<Route path='routes' element={<AdminBusRoute />} />
					<Route path='addRoute' element={<AdminBusRouteAdd />} />
					<Route
						path='stoppageUpdate/:stoppageId'
						element={<AdminBusStoppageUpdate />}
					/>
					<Route path='adminlogin' element={<AdminLogin />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
