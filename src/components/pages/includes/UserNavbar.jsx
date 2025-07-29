import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../../../assets/logo.png'; // Adjust the path accordingly

function UserNavbar() {
    return (
        <>
            {/* Sidebar */}
            <div className="bg-white text-white m-2 rounded rounded-5  card-blue">
                <div className="d-flex justify-content-between align-items-center">
                    <ul className="nav flex-row p-3 ">
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

                    <div className="pe-4">
                        <img src={logo} alt="Logo" className="me-2 img-fluid" style={{ width: '120px', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserNavbar;
