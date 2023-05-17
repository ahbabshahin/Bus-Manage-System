import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Pages/LoginPage/AdminLogin/AdminLogin';
function App() {
  return (
    <div className='App'>
      <Routes>
      <Route path='adminlogin' element={<AdminLogin />} />
      </Routes>

    </div>
  );
}

export default App;
