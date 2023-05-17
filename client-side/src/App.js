import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBusInventory from './Pages/Dashboard/AdminDashboard/AdminBusInventory/AdminBusInventory';
//import AdminLogin from './Pages/LoginPage/AdminLogin/AdminLogin';
function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='inventory' element={<AdminBusInventory />} />
      {/* <Route path='adminlogin' element={<AdminLogin />} /> */}
      </Routes>

    </div>
  );
}

export default App;
