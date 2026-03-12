import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import TopBar from './TopBar';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <TopBar />
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img src={logo} alt="The Edge Logo" />
                        <div className="brand-text">
                            <span className="main-name">The Edge Sheet Metal & Aluminum Ltd.</span>
                            <span className="tagline">Canada's Metal Exterior Experts</span>
                        </div>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><NavLink to="/" end onClick={closeMenu}>HOME</NavLink></li>
                            <li><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink></li>
                            <li><NavLink to="/service" onClick={closeMenu}>SERVICE</NavLink></li>
                            <li><NavLink to="/project" onClick={closeMenu}>PROJECT</NavLink></li>
                            <li><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>
                        </ul>
                        <Link to="/quote" className="quote-btn" onClick={closeMenu}>
                            Get A Quote <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                <button className="mobile-toggle" onClick={toggleMenu}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </nav>
    </>
    );
};

export default Navbar;
