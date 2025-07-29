import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import AdminSidebar from '../includes/AdminSidebar';

function Dashboard() {
    const [summary, setSummary] = useState({
        eventsToday: 0,
        revenueToday: 0,
        receiptsToday: 0,
    });

    const [events, setEvents] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        // Simulated fetch from backend or API
        const fetchDashboardData = () => {
            // Static data for now; replace with API call
            setSummary({
                eventsToday: 27,
                revenueToday: 36483,
                receiptsToday: 2384,
            });

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

            <div className="row">
                <DashboardCard title="Current Receipt Number" classes="card-orange" value={summary.eventsToday} />
                <DashboardCard title="Today's Revenue" classes="card-blue" value={`₹${summary.revenueToday}/-`} />
                <DashboardCard title="Today's Receipts" classes="card-green" value={summary.receiptsToday} />
            </div>

            <div className="row mt-5 px-4">
                <div className="col-12 border-1 shadow rounded-4">
                    <div className="table-responsive w-100" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                        <table className="table rounded-4 w-100">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Event Name</th>
                                    <th>Event Organizer</th>
                                    <th>Event Revenue</th>
                                    <th>Event Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.length > 0 ? (
                                    events.map((event, index) => (
                                        <tr key={event.id}>
                                            <td>{index + 1}</td>
                                            <td>{event.name}</td>
                                            <td>{event.organizer}</td>
                                            <td>{event.revenue}/-</td>
                                            <td>{event.location}</td>
                                            <td>
                                                <button className="btn btn-success btn-sm">View</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No events available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

// ✅ Reusable Card Component
function DashboardCard({ title, value, classes }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-4">
            <div className={`card border shadow rounded-4 h-100 ${classes}`}>
                <div className="card-body text-center text-white">
                    <h4>{title}</h4>
                    <h1 className="display-5 fw-semibold">{value}</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
