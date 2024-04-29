import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        phone:'',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            toast(newErrors.email);
        }

        // First name validation
        if (!formData.firstname) {
            newErrors.firstname = 'First name is required';
            toast(newErrors.firstname);
        }

        // Last name validation
        if (!formData.lastname) {
            newErrors.lastname = 'Last name is required';
            toast(newErrors.lastname)
        }
        if (!formData.phone) {
            newErrors.phone = 'phone number is required';
            toast(newErrors.phone);
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            toast(newErrors.password);
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Passwords do not match';
            toast(newErrors.confirmPassword);
        }

       
        // If there are no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(`${BACKEND_URL}/users/adduser`, {
                    email: formData.email,
                    password: formData.password,
                    firstName: formData.firstname,
                    lastName: formData.lastname,
                    phone: formData.phone
                });
                await toast(response.data.message)
                localStorage.setItem('token', response.data.token);
                 navigate('/home');
            } catch (error) {
                // Handle error, if required
                console.error('Error occurred during registration:', error);
                toast.error('An error occurred during registration. Please try again.');
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 sm:rounded-xl sm:px-10">
            <div className="w-full">
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

                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                       <div className="relative mt-6">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="user@gmail.com" className="peer mt-1 w-full border-b-2 text-slate-600 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none" autoComplete="off" required />
                        </div>

                        <div className="relative mt-6">
                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Jhon" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none" autoComplete="off" required />
                        </div>

                        <div className="relative mt-6">
                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Doe" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none" autoComplete="off" required />
                        </div>

                        <div className="relative mt-6">
                            <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none" autoComplete="off" required />
                        </div>

                        <div className="relative mt-6">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none"
                                required
                            />
                           
                            <span
                                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>

                        <div className="relative mt-6">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1  focus:border-gray-500 focus:outline-none"
                                required
                            />
                            <span
                                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {showConfirmPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>


                        <div className="my-6">
                            <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Register</button>
                        </div>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?{' '}
                            <Link to={"/login"} className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Login</Link>.
                        </p>
                    </form>
                </div>
            

            </div>
        </div>
    );
};

export default Register;
