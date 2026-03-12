import React from 'react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import useScrollReveal from '../hooks/useScrollReveal';

const Quote = () => {
    useScrollReveal();
    return (
        <>
            <PageHeader title="Free Quote" breadcrumb="Quote" />
            <div className="reveal" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
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

export default Quote;
