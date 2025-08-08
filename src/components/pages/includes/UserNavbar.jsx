import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../../assets/logo.png';

function UserNavbar() {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-dark bg-primary m-2 rounded-5 px-3">
                <div className="container-fluid">
                    {/* Brand / Logo */}
                    <a className="navbar-brand d-lg-none" href="#">
                        <img src={logo} alt="Logo" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                    </a>

                    {/* Toggler for small screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible Content */}
                    <div className="collapse navbar-collapse justify-content-between" id="navbarResponsive">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold text-white" href="/em/dashboard">
                                    <i className="fa-solid fa-house me-2"></i>Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/em/revenue/report">
                                    <i className="fa-solid fa-book me-2"></i>Revenue Report
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/em/profile/me">
                                    <i className="fa-solid fa-book me-2"></i>My Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/logout">
                                    <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
                                </a>
                            </li>
                        </ul>

                        {/* Logo (visible on large screens) */}
                        <div className="d-none d-lg-block">
                            <img src={logo} alt="Logo" className="img-fluid" style={{ width: '120px', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default UserNavbar;
