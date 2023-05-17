import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBusInventory from './Pages/Dashboard/AdminDashboard/AdminBusInventory/AdminBusInventory';
import AdminBusInventoryAdd from './Pages/Dashboard/AdminDashboard/AdminBusInventoryAdd/AdminBusInventoryAdd';
//import AdminLogin from './Pages/LoginPage/AdminLogin/AdminLogin';



import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='inventory' element={<AdminBusInventory />} />

        <Route path='dashboard/*' element={<DashboardHome />}>
          <Route path='addBus' element={<AdminBusInventoryAdd />} />
        </Route>
        {/* <Route path='adminlogin' element={<AdminLogin />} /> */}
      </Routes>

    </div>
  );
}

export default App;
