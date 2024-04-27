import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_URL } from '../../config'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSubmit =async (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            toast(newErrors.email);
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            toast(newErrors.password)
        }
        if (Object.keys(newErrors).length === 0) {
            try {
               
                const response = await axios.post(`${BACKEND_URL}/users/signin`, {
                    email: formData.email,
                    password: formData.password
                 
                })
                
                localStorage.setItem('token', response.data.token);
                navigate('/welcome');

           } catch (error) {
               toast(error)
               
           }
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8  sm:rounded-xl sm:px-10">
            <div className="w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="user@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                                required
                            />
                           
                        </div>
                        <div className="relative mt-6">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 focus:border-gray-500 focus:outline-none"
                                required
                            />
                            <span
                                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                        <div className="my-6">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                            >
                                Sign in
                            </button>
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            Don't have an account yet?
                            <Link
                                to="/register"
                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                            >
                                Register
                            </Link>
                            .
                        </p>
                    </form>
                    
                </div>
                    <ToastContainer 
                position="bottom-right"
                  autoClose={5000}
                 hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
              rtl={false}
                 pauseOnFocusLoss
              draggable
             pauseOnHover
                theme="dark"
            transition: Bounce
        />

            </div>
        </div>
    );
};

export default Login;
