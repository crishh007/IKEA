import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'John Doe',
        position: 'Architect',
        text: 'The Edge Sheet Metal delivered exceptional quality on our latest commercial project. Their attention to detail in cladding is unmatched.',
        image: 'https://theedgesheetsmetal.com/img/testimonial-1.jpg'
    },
    {
        name: 'Sarah Smith',
        position: 'Business Owner',
        text: 'Reliable and professional. They completed the roofing on my warehouse ahead of schedule and within budget.',
        image: 'https://theedgesheetsmetal.com/img/testimonial-2.jpg'
    },
    {
        name: 'Mike Johnson',
        position: 'Homeowner',
        text: 'Extremely happy with the custom aluminum gutters. They look great and function perfectly. Highly recommend their fabrication services.',
        image: 'https://theedgesheetsmetal.com/img/testimonial-3.jpg'
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with center card

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const getCardClass = (index) => {
        if (index === activeIndex) return 'center';
        if (index === (activeIndex - 1 + testimonials.length) % testimonials.length) return 'left';
        return 'right';
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Testimonial</span>
                    <h2 className="section-title">What Our Clients Say!</h2>
                </div>
                <div className="testimonials-container">
                    <div className="testimonial-wrapper">
                        {testimonials.map((t, index) => (
                            <div 
                                key={index} 
                                className={`testimonial-card ${getCardClass(index)}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="card-top">
                                    <img src={t.image} alt={t.name} />
                                    <div className="info">
                                        <h4>{t.name}</h4>
                                        <span>{t.position}</span>
                                    </div>
                                    <i className="fas fa-quote-right quote-icon"></i>
                                </div>
                                <div className="card-bottom">
                                    <p>{t.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button onClick={prevSlide} className="control-btn"><i className="fas fa-arrow-left"></i></button>
                        <button onClick={nextSlide} className="control-btn"><i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
