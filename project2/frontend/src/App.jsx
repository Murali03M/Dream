import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appbar from './pages/appbar';
import Sidebar from './pages/sidebar';
import Home from './pages/home';
import Welcome from './pages/Welcome';
import Login from './components/Login';
import Register from './components/register';
import AddTodo from './pages/addTodo';
import ShowTodo from './pages/showTodo';
import UpdateTodo from './pages/updateTodo';

function App() {
  const [authenticated, setAuthenticated] = useState(false);



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuthenticated(false);
  };

  return (
    <div >
      <BrowserRouter>
        <Appbar authenticated={authenticated} onLogout={handleLogout} />
            <div className='flex'>
           {authenticated && <Sidebar />}
            <Routes>
              <Route path="/" element={authenticated ?  <Home/>:<Welcome />} />
              <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />  
              <Route path="/addtodo" element={<AddTodo />} />  
              <Route path="/showtodo" element={<ShowTodo />} />  
              <Route path="/updateTodo/:id" element={<UpdateTodo />} />  
            </Routes>
            </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
