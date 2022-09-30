import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {Route, Routes, useNavigate} from 'react-router-dom'
function App() {
  return (
    <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
