import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <section className="home-hero">
            <div className="container">
                <div className="home-hero-content reveal-left">
                    <span className="hero-subtitle">Canada's Metal Exterior Experts</span>
                    <h1>Canada's Trusted Experts in <br />Metal Siding, Cladding & <br />Roofing Solutions</h1>
                    <p>Trusted by residential, commercial, and industrial clients for 9+ years of reliable service.</p>
                    <div className="hero-btns">
                        <a href="/quote" className="btn-quote btn-premium">Get A Quote <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
