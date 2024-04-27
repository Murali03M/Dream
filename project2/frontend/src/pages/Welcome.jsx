// Welcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

const Welcome = () => {
    return (
        <div className='flex justify-center items-center h-screen fixed w-screen'>
            <div className='text-center flex justify-center flex-col '>
                <h1 className='text-3xl '>Welcome to Our Website!</h1>
                <p className='text-xl mt-1'>This is the welcome page of our website.</p>
                <p className='text-xl mt-1'>Please explore our site and feel free to navigate to other pages after registering your data</p>
                <div className='mt-5'>
                    <Link to={'/register'}> <Button name="Register" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
