import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/about-building.png';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-image reveal-left">
                        <img src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg" alt="Canada's Trusted Experts in Metal" />
                    </div>
                    <div className="about-content reveal-right">
                        <span className="section-subtitle">About Us</span>
                        <h2 className="section-title">Canada's Trusted Experts in Metal Siding, Cladding & Roofing Solutions</h2>
                        <p className="about-text">
                            Since 2016, The Edge Sheet Metal & Aluminum Ltd. has been delivering premium exterior systems across Canada.
                            With over 9 years of hands-on expertise, we specialize in metal siding, cladding, fascia and gutter systems,
                            roofing solutions, and custom panel fabrication. From sourcing top-grade materials to precision installation,
                            our end-to-end services are built to match the vision and demands of each unique project.
                        </p>
                        <div className="about-features">
                            <div className="feature card-premium">
                                <i className="fas fa-check-circle"></i>
                                <span>High-precision sheet metal fabrication</span>
                            </div>
                            <div className="feature card-premium">
                                <i className="fas fa-check-circle"></i>
                                <span>Custom aluminum solutions for diverse industries</span>
                            </div>
                            <div className="feature card-premium">
                                <i className="fas fa-check-circle"></i>
                                <span>Trusted partner for industrial-grade projects</span>
                            </div>
                        </div>
                        <button className="read-more-btn btn-premium">Explore More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
