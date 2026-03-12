import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import TeamMember from '../components/TeamMember';

import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    useScrollReveal();
    return (
        <>
            <PageHeader title="About Us" breadcrumb="About" />
            <div className="reveal"><AboutSection /></div>
            <div className="reveal"><StatsSection /></div>
            <div style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }} className="reveal">
                <TeamMember />
            </div>
        </>
    );
};

export default About;
