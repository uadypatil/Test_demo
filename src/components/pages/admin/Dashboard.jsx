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
                <div className="col-12 ">
                    <div className="explore-event w-100 text-end">
                        <a href="events/all" className='border border-1 shadow rounded-4 text-white btn btn-lg card-blue'>Explore Event</a>
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
