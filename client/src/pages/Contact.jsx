import React from 'react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';

import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
    useScrollReveal();
    return (
        <>
            <PageHeader title="Contact Us" breadcrumb="Contact" />
            <section className="contact-page-section reveal" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="contact-info-boxes">
                                <span className="section-subtitle">Contact Details</span>
                                <h2 className="section-title">Get In Touch With Us</h2>
                                <p className="mb-4">We are here to help you with your next metal siding, cladding or roofing project. Contact us today for a free consultation.</p>
                                
                                <div className="info-box d-flex align-items-center mb-4">
                                    <div className="icon" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-location-dot"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Our Location</h5>
                                        <p className="mb-0 text-muted">Unit 16/17, 20 Baywood Rd, Etobicoke, ON, Canada</p>
                                    </div>
                                </div>

                                <div className="info-box d-flex align-items-center mb-4">
                                    <div className="icon" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Phone Number</h5>
                                        <p className="mb-0 text-muted">+1 416 741 5140</p>
                                    </div>
                                </div>

                                <div className="info-box d-flex align-items-center mb-0">
                                    <div className="icon" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-color)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h5 className="mb-1">Email Address</h5>
                                        <p className="mb-0 text-muted">info@theedgesheetmetal.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Map Placeholder */}
            <div className="map-container" style={{ height: '450px', backgroundColor: '#eee', marginBottom: '-5px' }}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.2625244585144!2d-79.57683932341999!3d43.74665407109819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a270db8731f%3A0x7d0a2f8b5f1f8b8e!2s20%20Baywood%20Rd%2C%20Etobicoke%2C%20ON%20M9V%204A8%2C%20Canada!5e0!3m2!1sen!2sus!4v1710220000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;
