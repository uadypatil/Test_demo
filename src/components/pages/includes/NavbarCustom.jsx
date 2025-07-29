import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for dropdowns & toggler
import logo from '../../../assets/logo.png'; // Adjust the path based on your project

function NavbarCustom() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-fluid">

        {/* Left: Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" height="30" className="me-2" />
          <span style={{ fontSize: '14px' }}>India</span>
        </a>

        {/* Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle: Nav links */}
        <div className="collapse navbar-collapse justify-content-start" id="mainNavbar">
          <ul className="navbar-nav ms-3">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contribute</a></li>
          </ul>
        </div>

        {/* Right: Contact, Help, Sign In, Cart */}
        <div className="d-flex align-items-center ms-auto">
          <a className="nav-link px-2" href="#">Contact Us</a>
          <a className="nav-link px-2" href="#">Help</a>
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle px-2" href="#" role="button" data-bs-toggle="dropdown">
              Sign In
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="/signin">Sign In</a></li>
            </ul>
          </div>
          <a className="nav-link px-2" href="#"><i className="bi bi-cart" style={{ fontSize: '1.2rem' }}></i></a>
        </div>

      </div>
    </nav>
  );
}

export default NavbarCustom;
