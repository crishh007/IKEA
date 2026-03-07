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

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'users': return <i className="fas fa-users"></i>;
            case 'check-circle': return <i className="fas fa-check-circle"></i>;
            case 'award': return <i className="fas fa-award"></i>;
            case 'user-friends': return <i className="fas fa-user-friends"></i>;
            default: return <i className="fas fa-chart-line"></i>;
        }
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
