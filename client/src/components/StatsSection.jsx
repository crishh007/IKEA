import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css';

const StatsSection = () => {
    const [stats, setStats] = useState([]);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error('Error fetching stats:', err));
    }, []);

    const getIcon = () => {
        return <i className="fa-solid fa-circle-check"></i>;
    };

    return (
        <section className="stats-section" ref={ref}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map(stat => (
                        <div className="stat-item" key={stat.id}>
                            <div className="stat-icon-wrapper">
                                {getIcon(stat.icon)}
                            </div>
                            <div className="stat-info">
                                <h2 className="stat-number">
                                    {inView ? <CountUp end={stat.value} duration={2.5} /> : '0'}
                                </h2>
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-desc">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
