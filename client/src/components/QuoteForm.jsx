import React, { useState } from 'react';
import './QuoteForm.css';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Quote request sent successfully! We will contact you soon.' });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Server error. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quote-form-container">
            <span className="section-subtitle">Free Quote</span>
            <h2 className="section-title">Request A Free Quote</h2>
            {status.message && (
                <div className={`status-message ${status.type}`}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-group">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Your Phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select A Service</option>
                        <option value="Metal Siding">Metal Siding</option>
                        <option value="Metal Cladding">Metal Cladding</option>
                        <option value="Roofing">Roofing & Gutter</option>
                        <option value="Custom Fabrication">Custom Fabrication</option>
                    </select>
                </div>
                <div className="form-group full-width">
                    <textarea 
                        name="message" 
                        placeholder="Special Note" 
                        rows="4" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn btn-premium" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit Request'}
                </button>
            </form>
        </div>
    );
};

export default QuoteForm;
