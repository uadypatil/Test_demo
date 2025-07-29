import React, {  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../../assets/logo.png';

function AdminSidebar() {


    return (
        <>
            {/* Toggle Button - Only visible on small screens */}
            <button
                className="btn btn-primary d-lg-none m-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSidebar"
                aria-controls="offcanvasSidebar"
                style={{ height: '50px', width: '70px' }}
            >
                Menu
            </button>

            {/* Sidebar for large screens */}
            <div className="bg-white text-white m-2 rounded rounded-5 admin-sidebar card-blue d-none d-lg-block" style={{ position: 'fixed' }}>
                <div className="mb-4 d-flex justify-content-center text-center w-100" style={{ flexDirection: 'column' }}>
                    <img src={logo} alt="Logo" className="me-2 img-fluid" />
                </div>
                <ul className="nav flex-column p-3">
                    <li className="nav-item text-end">
                        <a className="nav-link text-white fw-semibold" href="dashboard">
                            <i className="fa-solid fa-house me-2"></i> Dashboard
                        </a>
                    </li>
                    <li className="nav-item text-end">
                        <a className="nav-link text-white" href="reports">
                            <i className="fa-solid fa-book me-2"></i> Revenue Report
                        </a>
                    </li>
                    <li className="nav-item text-end">
                        <a className="nav-link text-white" href="#">
                            <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                        </a>
                    </li>
                </ul>
            </div>

            {/* Offcanvas Sidebar for small scre ens */}
            <div
                className="offcanvas offcanvas-start d-lg-none admin-sidebar card-blue"
                tabIndex="-1"
                id="offcanvasSidebar"
                aria-labelledby="offcanvasSidebarLabel"
            >
                <div className="offcanvas-header" style={{ height: '50px' }}>
                    <h5 className="offcanvas-title text-dark" id="offcanvasSidebarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-dark">
                    <div className="mb-4 d-flex justify-content-center text-center w-100" style={{ flexDirection: 'column' }}>
                        <img src={logo} alt="Logo" className="me-2 img-fluid" />
                    </div>
                    <ul className="nav flex-column p-3">
                        <li className="nav-item text-end">
                            <a className="nav-link text-dark fw-semibold" href="dashboard">
                                <i className="fa-solid fa-house me-2"></i> Dashboard
                            </a>
                        </li>
                        <li className="nav-item text-end">
                            <a className="nav-link text-dark" href="reports">
                                <i className="fa-solid fa-book me-2"></i> Revenue Report
                            </a>
                        </li>
                        <li className="nav-item text-end">
                            <a className="nav-link text-dark" href="#">
                                <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AdminSidebar;
