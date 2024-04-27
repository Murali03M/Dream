import React, { useState, useEffect } from 'react';
import Button from '../components/button';
import { Link, useNavigate } from 'react-router-dom';

const Appbar = () => {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false);


  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    setAuthenticated(!!token);
  };

  useEffect(() => {
    checkAuthentication();
  }, []); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };

  return (
    <div className='w-full h-14 bg-slate-50 border-b'>
      <div className='flex justify-between align-center bg-slate-50 p-2'>
        <div className='p-2 text-xl'>Panel</div>
        <div className='flex flex-col justify-center'>
          {authenticated ? (
            <Button className='h-10 w-10 rounded-full bg-slate-600' name='Logout' onClick={handleLogout} />
          ) : (
            <Link to='/login'>
              <Button className='h-10 w-10 rounded-full bg-slate-600' name='Login' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
