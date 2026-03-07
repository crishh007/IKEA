import React, { useState } from 'react';
import './Footer.css';
import SuccessModal from './SuccessModal';
import gallery1 from '../assets/gallery/gallery-1.png';
import gallery2 from '../assets/gallery/gallery-2.png';
import gallery3 from '../assets/gallery/gallery-3.png';
import gallery4 from '../assets/gallery/gallery-4.png';

const Footer = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <footer className="footer">
            {isSubmitted && <SuccessModal onClose={() => setIsSubmitted(false)} />}
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col contact-info">
                        <h3>Contact Info</h3>
                        <p><i className="fas fa-map-marker-alt"></i> Unit 16/17, 20 Baywood Rd, Etobicoke, Ontario, Canada, M9V 4A8</p>
                        <p><i className="fas fa-phone"></i> +1 416 741 5140</p>
                        <p><i className="fas fa-envelope"></i> info@theedgesheetmetal.com</p>
                        <p><i className="fas fa-envelope"></i> daniel@theedgesheetmetal.ca</p>
                        <div className="social-links-footer">
                            <a href="https://www.facebook.com/people/The-Edge-Sheet-Metal/61582330217873/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/the_edge_sheet_metal" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/the-edge-sheet-metal-aluminum-ltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div className="footer-col quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> About Us</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Our Services</a></li>
                            <li><a href="#"><i className="fas fa-chevron-right"></i> Projects</a></li>
                        </ul>
                    </div>

                    <div className="footer-col project-gallery">
                        <h3>Project Gallery</h3>
                        <div className="gallery-grid">
                            <img src={gallery1} alt="Project Gallery 1" />
                            <img src={gallery2} alt="Project Gallery 2" />
                            <img src={gallery3} alt="Project Gallery 3" />
                            <img src={gallery4} alt="Project Gallery 4" />
                        </div>
                    </div>

                    <div className="footer-col newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe to get updates on our latest sheet metal and aluminum fabrication projects.</p>
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input type="email" placeholder="Your email" required />
                            <button type="submit">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; The Edge Sheet Metal & Aluminum Ltd., All Right Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
