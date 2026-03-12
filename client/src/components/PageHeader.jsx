import React from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, breadcrumb }) => {
    return (
        <section className="page-header">
            <div className="container">
                <div className="header-content">
                    <h1>{title}</h1>
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span className="current">{breadcrumb}</span>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
