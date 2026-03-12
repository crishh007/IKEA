import React, { useState } from 'react';
import './ProjectSection.css';

const projects = [
    {
        id: 1,
        title: 'Metal Siding',
        description: 'Custom siding solutions including Vinyl, Aluminum, Steel & Metal panels designed for durability.',
        category: 'metal siding',
        image: 'https://theedgesheetsmetal.com/img/Picture1.jpg'
    },
    {
        id: 2,
        title: 'Metal Cladding',
        description: 'Composite metal wall panels delivering sleek design, flat appearance & high-performance.',
        category: 'metal siding',
        image: 'https://theedgesheetsmetal.com/img/Pics2.jpg'
    },
    {
        id: 3,
        title: 'Roofing',
        description: 'Flat roof repairs by expert technicians—restoring durability, preventing leaks & extending roof lifespan.',
        category: 'roofing',
        image: 'https://theedgesheetsmetal.com/img/Pics3.jpg'
    },
    {
        id: 4,
        title: 'Standing Seam Roofing',
        description: 'Standing Seam metal roofing with concealed clips, watertight seals & modern design.',
        category: 'roofing',
        image: 'https://theedgesheetsmetal.com/img/Pics4.jpg'
    },
    {
        id: 5,
        title: 'Custom Fabrication',
        description: 'ACM panels fabricated with advanced technology, customized detailing & premium finishes.',
        category: 'custom fabrication',
        image: 'https://theedgesheetsmetal.com/img/carousel-2.jpg'
    },
    {
        id: 6,
        title: 'Metal Product Services',
        description: 'Aluminum Soffit & Fascia, Flat Stock & Gutter Coil, Eavestrough & Downspouts, Drip Edge.',
        category: 'metal siding',
        image: 'https://theedgesheetsmetal.com/img/carousel-1.jpg'
    }
];

const ProjectSection = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section className="project-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Our Projects</span>
                    <h2 className="section-title">Explore Our Latest Metal Siding,<br />Roofing & Cladding Works</h2>
                </div>

                <div className="filter-container">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button 
                        className={`filter-btn ${filter === 'metal siding' ? 'active' : ''}`}
                        onClick={() => setFilter('metal siding')}
                    >Metal Siding</button>
                    <button 
                        className={`filter-btn ${filter === 'roofing' ? 'active' : ''}`}
                        onClick={() => setFilter('roofing')}
                    >Roofing</button>
                    <button 
                        className={`filter-btn ${filter === 'custom fabrication' ? 'active' : ''}`}
                        onClick={() => setFilter('custom fabrication')}
                    >Custom Fabrication</button>
                </div>

                <div className="project-grid">
                    {filteredProjects.map(project => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
