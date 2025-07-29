import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../App.css';
import AdminSidebar from '../includes/AdminSidebar';

function Base() {
    return (
        <div className="wrapper d-flex">
            <AdminSidebar />
            <div className="main-wrapper flex-grow-1 px-4 py-2 my-3 me-3" data-aos="fade-up">
                  <Outlet /> {/* This will render nested route components */}
            </div>
        </div>
    );
}

export default Base;
