import React from 'react';
import './TeamMember.css';

const TeamMember = () => {
    return (
        <section className="team-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Team Member</span>
                    <h2 className="section-title">Experienced Team Member</h2>
                </div>
                <div className="team-grid">
                    <div className="team-card card-premium">
                        <div className="team-card-content">
                            <h3 className="member-name">Daniel Vilarinho</h3>
                            <p className="member-role">President</p>
                            <div className="member-contact">
                                <p>Cell: +1 416-741-5140</p>
                                <p>Email: daniel@theedgesheetmetal.ca</p>
                            </div>
                            <div className="member-social">
                                <a href="https://www.facebook.com/people/The-Edge-Sheet-Metal/61582330217873/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.linkedin.com/company/the-edge-sheet-metal-aluminum-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/the_edge_sheet_metal" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMember;
