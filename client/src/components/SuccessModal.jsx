import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ onClose }) => {
    return (
        <div className="success-modal-overlay">
            <div className="success-modal-card">
                <div className="success-checkmark-circle">
                    <div className="success-checkmark"></div>
                </div>
                <h2>Form submitted successfully!</h2>
                <p className="success-message-main">Thank you for reaching out to us.</p>
                <p className="success-message-sub">We'll review your submission and get back to you soon.</p>
                <button className="go-back-btn" onClick={onClose}>
                    <i className="fas fa-arrow-left"></i> Go Back
                </button>
                <div className="web3forms-footer">
                    This form is powered by <span>Web3Forms</span>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
