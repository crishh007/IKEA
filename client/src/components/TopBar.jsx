import React from 'react';
import './TopBar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="contact-info">
                    <span><i className="fas fa-map-marker-alt"></i> Unit 16/17, 20 Baywood Rd, Etobicoke, Ontario, Canada, M9V 4A8</span>
                    <span><i className="far fa-clock"></i> Mon - Fri : 7.00 AM - 5.00 PM & Sat : 7.00 AM - 12.00 PM</span>
                </div>
                <div className="social-links">
                    <span className="phone"><i className="fas fa-phone"></i> +1 416 741 5140</span>
                    <a href="https://www.facebook.com/people/The-Edge-Sheet-Metal/61582330217873/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.linkedin.com/company/the-edge-sheet-metal-aluminum-ltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/the_edge_sheet_metal" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
