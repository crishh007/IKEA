import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="The Edge Logo" />
                    <div className="brand-text">
                        <span className="main-name">The Edge Sheet Metal & Aluminum Ltd.</span>
                        <span className="tagline">Canada's Metal Exterior Experts</span>
                    </div>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#" className="active">ABOUT</a></li>
                        <li><a href="#">SERVICE</a></li>
                        <li><a href="#">PROJECT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                    <button className="quote-btn">Get A Quote <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
