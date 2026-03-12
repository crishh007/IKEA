import React from 'react';
import './WhyChooseUs.css';
import cityImage from '../assets/about-building.png'; // Reusing or using a high-quality placeholder

const features = [
    { title: 'On-Time', description: 'Delivery', icon: 'fa-check' },
    { title: 'Experienced', description: 'Team', icon: 'fa-user-group' },
    { title: 'Custom', description: 'Fabrication', icon: 'fa-drafting-compass' },
    { title: 'Dedicated', description: 'Support', icon: 'fa-headset' }
];

const WhyChooseUs = () => {
    return (
        <section className="why-choose-us">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 text-container reveal-left">
                        <div className="content-wrapper">
                            <span className="section-subtitle">Why Choose Us!</span>
                            <h2 className="section-title">Canada-Wide Metal Siding, Cladding & Roofing Solutions</h2>
                            <p className="description">
                                With over 9 years of hands-on experience, The Edge Sheet Metal & Aluminum Ltd. delivers custom, 
                                high-performance metal exteriors across Canada. We provide end-to-end services — 
                                from sourcing and fabrication to expert installation.
                            </p>
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <div className="feature-item card-premium" key={index} style={{ padding: '15px', borderRadius: '8px' }}>
                                        <div className="feature-icon">
                                            <i className={`fas ${feature.icon}`}></i>
                                        </div>
                                        <div className="feature-text">
                                            <span className="small-text">{feature.title}</span>
                                            <h4 className="main-text">{feature.description}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 image-container reveal-right">
                        <img src="https://theedgesheetsmetal.com/img/carousel-1.jpg" alt="Building Architecture" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
