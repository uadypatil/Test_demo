import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import AdminSidebar from '../includes/AdminSidebar';
import qrcode from '../../../assets/qrcode.png';
import DurationSelector from '../../utils/DurationSelector';

function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        // Simulated fetch from backend or API
        const fetchDashboardData = () => {

            setEvents([
                {
                    id: 1,
                    name: 'Bhandara',
                    organizer: 'Smart Vidya Kala Mandir',
                    revenue: 3949,
                    location: 'College Road, Nashik',
                },
                {
                    id: 2,
                    name: 'Ganesh Mahotsav',
                    organizer: 'Sanskriti Samiti',
                    revenue: 5400,
                    location: 'Canada Corner, Nashik',
                },
                {
                    id: 3,
                    name: 'Charity Event',
                    organizer: 'Helping Hands Org',
                    revenue: 2500,
                    location: 'Indira Nagar, Nashik',
                },
                {
                    id: 2,
                    name: 'Ganesh Mahotsav',
                    organizer: 'Sanskriti Samiti',
                    revenue: 5400,
                    location: 'Canada Corner, Nashik',
                },
                {
                    id: 3,
                    name: 'Charity Event',
                    organizer: 'Helping Hands Org',
                    revenue: 2500,
                    location: 'Indira Nagar, Nashik',
                },
                // Add more objects here
            ]);
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="wrap-content h-100 w-100 border-3 border-secondary shadow rounded-5 p-3">
            <div className="row">
                <div className="col-12">
                    <h4 className="fw-semibold">Dashboard</h4>
                </div>
            </div>
            <div className="col-12 my-3">
                <button className='btn btn-success'>
                    Save
                </button>
            </div>

            <div className="row event-form-flex mt-5" style={{ display: 'flex' }}>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 border-1 shadow rounded-4 pb-5">
                    <div className="no-bg-important my-3">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="form-control fw-semibold fs-4"
                            placeholder="Festival/ event name"
                        />
                        <DurationSelector />

                        <div className='mt-3'>
                            <label htmlFor="" className='form-label'>From date</label>
                            <input type="date" name="" id="" className='form-control' />
                        </div>

                        <div className='mt-3'>
                            <label htmlFor="" className='form-label'>To date</label>
                            <input type="date" name="" id="" className='form-control' />
                        </div>

                        <div className="d-flex gap-3 flex-direction-adjust mt-3">
                            <div className="card shadow flex-fill-1 p-4">
                                <h4>Event Managers</h4>
                                <h1 className='text-success'>0</h1>
                            </div>
                            <div className="card shadow flex-fill-1 p-4">
                                <h4>Receipts</h4>
                                <h1 className='text-success'>0</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-2 border-1 shadow rounded-4">
                    <div className="d-flex image-events-fluid w-100">
                        <img src={qrcode} alt="" className='img-fluid rounded-3' />
                    </div>
                    <p className='text-center'>Event Manager Registration</p>

                </div>
            </div>

        </div>
    );
}

export default Events;
