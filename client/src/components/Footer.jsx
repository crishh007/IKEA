import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import SuccessModal from './SuccessModal';
import gallery1 from '../assets/gallery/gallery-1.png';
import gallery2 from '../assets/gallery/gallery-2.png';
import gallery3 from '../assets/gallery/gallery-3.png';
import gallery4 from '../assets/gallery/gallery-4.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setEmail('');
            } else {
                setError(data.error || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server');
        }
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
                            <li><Link to="/about"><i className="fas fa-chevron-right"></i> About Us</Link></li>
                            <li><Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link></li>
                            <li><Link to="/service"><i className="fas fa-chevron-right"></i> Our Services</Link></li>
                            <li><Link to="/project"><i className="fas fa-chevron-right"></i> Projects</Link></li>
                            <li><Link to="/quote"><i className="fas fa-chevron-right"></i> Free Quote</Link></li>
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
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit">SignUp</button>
                        </form>
                        {error && <p className="error-message" style={{ color: '#ff4d4d', marginTop: '10px', fontSize: '14px' }}>{error}</p>}
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
