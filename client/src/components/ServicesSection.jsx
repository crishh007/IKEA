import React from 'react';
import './ServicesSection.css';

const services = [
    {
        title: 'Estimation',
        description: 'Accurate, transparent quotes to help you plan with confidence, just solid numbers.',
        icon: 'fa-calculator',
        image: 'https://www.shutterstock.com/image-vector/businessmen-calculating-budget-resources-vector-600nw-2321329397.jpg'
    },
    {
        title: 'Design',
        description: 'Customized engineering and metalwork designs built to meet your exact project needs.',
        icon: 'fa-pen-ruler',
        image: 'https://theedgesheetsmetal.com/img/Pics3.jpg'
    },
    {
        title: 'Supply',
        description: 'Reliable sourcing and timely delivery of high-grade sheet metal and aluminum materials.',
        icon: 'fa-box-open',
        image: 'https://static.vecteezy.com/system/resources/previews/008/516/826/non_2x/supply-chain-management-vector.jpg'
    },
    {
        title: 'Support',
        description: 'Ongoing technical assistance and customer service long after the job is done.',
        icon: 'fa-handshake-angle',
        image: 'https://theedgesheetsmetal.com/img/Pics2.jpg'
    },
    {
        title: 'Fabrication',
        description: 'Precision-crafted sheet metal and aluminum components, tailored to your specs.',
        icon: 'fa-hammer',
        image: 'https://theedgesheetsmetal.com/img/Pics1.jpg'
    },
    {
        title: 'Quality Assurance',
        description: 'Rigorous inspections and testing ensure that every product meets our high standards.',
        icon: 'fa-clipboard-check',
        image: 'https://theedgesheetsmetal.com/img/Picture1.jpg'
    }
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Services</span>
                    <h2 className="section-title">Leading Excellence in Sheet Metal & Aluminum Solutions</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card card-premium" key={index}>
                            <div className="card-image">
                                <img src={service.image} alt={service.title} />
                                <div className="card-icon">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href="/service" className="read-more-link">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
