import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './pages/appbar';
import Sidebar from './pages/sidebar';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Login from './components/Login';
import Register from './components/register';

function App() {

   
  return (
    <div>
      <BrowserRouter>
         <Appbar />
         <Sidebar /> 
         <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
