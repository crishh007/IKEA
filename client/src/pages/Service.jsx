import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/ServicesSection';
import QuoteForm from '../components/QuoteForm';

import useScrollReveal from '../hooks/useScrollReveal';

const Service = () => {
    useScrollReveal();
    return (
        <>
            <PageHeader title="Our Services" breadcrumb="Services" />
            <div className="reveal"><ServicesSection /></div>
            <div style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }} className="reveal text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
