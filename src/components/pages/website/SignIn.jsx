import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for dropdowns & toggler
import axios from 'axios'; // At the top of your file
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import api_url from '../../../config';

function SignIn() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(api_url +'Main/authenticateUser', formData);

            console.log('API response:', response.data);
            alert('Login successful!');
            // Example: Store token or redirect
            localStorage.setItem("isLoggedIn", true);
            if (response.data.response.role == "event_manager") {
                navigate('/user/home');
            } else if (response.data.response.role == "organizer") {
                navigate('/admin/dashboard'); // < -- if you're using react-router

            }
        } catch (error) {
            console.error('API error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };


    return (
        <>
            <div className="d-flex justify-content-center align-items-center sign-in-body" style={{ height: '100dvh', width: '100dvw' }}>
                <div className="sign-in-container border shadow rounded-5">
                    <form action="" onSubmit={handleSubmit}>
                        <h1 className='mt-4 text-dark text-center'>Sign In</h1>

                        <div className="row my-5">
                            <div className="col-12">
                                <label htmlFor="" className='form-label'>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder='Please enter username'
                                    className='form-control'
                                    required
                                />
                            </div>

                            <div className="col-12 mt-4">
                                <label htmlFor="" className='form-label'>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder='Please enter password'
                                    className='form-control'
                                    required
                                />
                            </div>

                            <div className="col-12 mt-4">
                                <div className="d-flex gap-2 sign-in-check-box-flex">
                                    <input type="checkbox" name="" id="confirmMe" className='form-check' required />
                                    <label htmlFor="" className='form-label'>By checking, I confirm to be logged in!</label>
                                </div>
                            </div>

                            <div className="col-12 mt-4 text-center">
                                <button type='submit' className='btn btn-success '>
                                    Submit
                                </button>
                            </div>

                            <div className="col-12 mt-4 text-center">
                                <label htmlFor="" className='form-label'>Don't have account, <a href="/signup">sign up</a> now!</label>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
