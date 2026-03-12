import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectSection from '../components/ProjectSection';

import useScrollReveal from '../hooks/useScrollReveal';

const Project = () => {
    useScrollReveal();
    return (
        <>
            <PageHeader title="Our Projects" breadcrumb="Projects" />
            <div className="reveal"><ProjectSection /></div>
        </>
    );
};

export default Project;
