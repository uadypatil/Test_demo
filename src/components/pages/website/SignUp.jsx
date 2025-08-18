import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'; // At the top of your file
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import api_url from '../../../config';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // Event Manager fields
        event_id: 'EVISCNSK001',
        event_manager_name: '',
        event_manager_contact_number: '',
        username: '',
        password: '',
        agreement: false,

        // Doner fields
        event_organizer_name: '',
        event_organizer_contact: '',
        doner_username: '',
        doner_password: '',
        doner_agreement: false
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.event_manager_name) newErrors.event_manager_name = 'Please enter the organizer name.';
        if (!formData.event_manager_contact_number) newErrors.event_manager_contact_number = 'Enter valid 10-digit contact.';
        if (!formData.agreement) newErrors.agreement = 'You must agree before submitting.';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const fieldValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
        setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form data:', formData);
            setSubmitted(true);
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const redirectRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const [showDonerForm, setDonerShowForm] = useState(false);

    const loadEventForm = () => {
        redirectRef.current.style.display = 'none';
        setShowForm(true);
    };

    const loadDonerForm = () => {
        redirectRef.current.style.display = 'none';
        setDonerShowForm(true);
    };


    // HANDLE SUBMIT FOR ADD EVENT MANAGER FORM
    const handleEventManagerSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await axios.post(api_url+'EventManager/save', {
                event_id: formData.event_id,
                event_manager_name: formData.event_manager_name,
                event_manager_contact_number: formData.event_manager_contact_number,
                username: formData.username,
                password: formData.password,
            });


            console.log('API response:', response.data);
            if (response.data.status == "success") {
                alert('SignUp successful!');
                navigate('/signin');
            } else {
                alert('Failed To Sign up!');
                console.log(response.data)
            }

        } catch (error) {
            console.error('API error:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    const handleDonerSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.event_organizer_name || !formData.event_organizer_contact || !formData.doner_username || !formData.doner_password) {
            alert('Please fill all required fields.');
            return;
        }

        if (!formData.doner_agreement) {
            alert('You must agree before submitting.');
            return;
        }

        try {
            const response = await axios.post('http://localhost/eDengiSystem/EventOrganizer/save', {
                organizer_name: formData.event_organizer_name,
                organizer_contact_number: formData.event_organizer_contact,
                username: formData.doner_username,
                password: formData.doner_password,
            });

            console.log('API response:', response.data);

            if (response.data.status === 'success') {
                alert('SignUp successful!');
                navigate('/signin');
            } else {
                alert('Sign up failed. Try again.');
            }
        } catch (error) {
            console.error('API error:', error);
            alert('An error occurred during signup.');
        }
    };

    // ✅ Define the form as a function inside the component
    const renderAddEventForm = () => {
        return (
            <div className="sign-in-container p-4 rounded-5">
                <form
                    onSubmit={handleEventManagerSubmit}
                    noValidate
                    style={{ height: '80dvh', overflowY: 'scroll' }}
                >
                    <h1 className='mt-4 text-dark text-center'>Register Event Manager</h1>

                    <div className="form-group mt-3">
                        <input
                            type="text"
                            name="event_id"
                            value={formData.event_id}
                            onChange={handleChange}
                            readOnly
                        />
                        {errors.event_name && <span className="error">{errors.event_name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="event_manager_name"
                            value={formData.event_manager_name}
                            onChange={handleChange}
                        />
                        {errors.event_manager_name && <span className="error">{errors.event_manager_name}</span>}
                    </div>

                    <div className="form-group">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            name="event_manager_contact_number"
                            value={formData.event_manager_contact_number}
                            onChange={handleChange}
                        />
                        {errors.event_manager_contact_number && <span className="error">{errors.event_manager_contact_number}</span>}
                    </div>

                    <div className="form-group">
                        <label>Create Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>

                    <div className="form-group">
                        <label>Create Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <div className="form-group mt-4">
                        <button type="submit" className='btn btn-success'>Submit</button>
                    </div>
                    {submitted && <div className="success-msg">Form submitted successfully!</div>}
                </form>
            </div>
        );
    };

    const renderAddDonerForm = () => {
        return (
            <div className="sign-in-container rounded-5 py-3" style={{}}>
                <form
                    onSubmit={handleDonerSubmit}
                    style={{ height: '80dvh', overflowY: 'scroll' }}>
                    <h1 className='mt-4 text-dark text-center'>Register Event Organizer</h1>

                    <div className="row my-5">
                        <div className="col-12">
                            <label className='form-label'>Full Name</label>
                            <input
                                type="text"
                                name="event_organizer_name"
                                value={formData.event_organizer_name}
                                onChange={handleChange}
                                placeholder='Please enter full name'
                                className='form-control'
                                required
                            />
                        </div>
                        <div className="col-12 mt-4">
                            <label className='form-label'>Contact Number</label>
                            <input
                                type="text"
                                name="event_organizer_contact"
                                value={formData.event_organizer_contact}
                                onChange={handleChange}
                                placeholder='Please enter contact number'
                                className='form-control'
                                required
                            />
                        </div>
                        <div className="col-12 mt-4">
                            <label className='form-label'>Username</label>
                            <input
                                type="text"
                                name="doner_username"
                                value={formData.doner_username}
                                onChange={handleChange}
                                placeholder='Please enter username'
                                className='form-control'
                                required
                            />
                        </div>

                        <div className="col-12 mt-4">
                            <label className='form-label'>Password</label>
                            <input
                                type="password"
                                name="doner_password"
                                value={formData.doner_password}
                                onChange={handleChange}
                                placeholder='Please enter password'
                                className='form-control'
                                required
                            />
                        </div>

                        <div className="col-12 mt-4">
                            <div className="d-flex gap-2">
                                <input
                                    type="checkbox"
                                    name="doner_agreement"
                                    checked={formData.doner_agreement}
                                    onChange={handleChange}
                                />
                                <label htmlFor="confirmMe" className='form-label'>By checking, I confirm to be logged in!</label>
                            </div>
                        </div>

                        <div className="col-12 mt-4 text-center">
                            <button type="submit" className='btn btn-success'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-center align-items-center sign-in-body" style={{ height: '100dvh', width: '100dvw' }}>

            {/* Card Selection */}
            <div className="sign-in-container rounded-5" ref={redirectRef}>
                <div className="row p-5">
                    <div className="col-lg-6 p-2 rounded-4">
                        <div onClick={loadDonerForm} className="card border-2 shadow text-dark" style={{ height: '200px', background: 'none', cursor: 'pointer' }}>
                            <div className="card-body d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                                <p>Register As</p>
                                <h1 className='text-center'>Event Organizer</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 p-2 rounded-4">
                        <div onClick={loadEventForm} className="card border-2 shadow text-dark" style={{ height: '200px', background: 'none', cursor: 'pointer' }}>
                            <div className="card-body d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                                <p>Register As</p>
                                <h1 className='text-center'>Event Manager</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form rendered conditionally using internal function */}
            {showForm && (
                <div data-aos="zoom-in-up">
                    {renderAddEventForm()}
                </div>
            )}

            {showDonerForm && (
                <div data-aos="zoom-in-up">
                    {renderAddDonerForm()}
                </div>
            )}



        </div>
    );
}

export default SignUp;
