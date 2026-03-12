const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const submitContactForm = async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message' });
    }

    try {
        const newContact = await Contact.create({
            name,
            email,
            phone,
            service,
            message
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.ADMIN_EMAIL,
            subject: `New Custom Quote Request from ${name} - Edge Sheet Metal`,
            html: `
                <h2>New Contact / Quote Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Service Requested:</strong> ${service || 'General'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        try {
            if (process.env.EMAIL_USER && process.env.EMAIL_USER !== 'your-email@gmail.com') {
                await transporter.sendMail(mailOptions);
                console.log('Admin notification email sent');
            }
        } catch (emailError) {
            console.error('Failed to send email:', emailError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Form submitted successfully',
            data: newContact
        });

    } catch (error) {
        console.error('Error submitting form:', error.message);
        res.status(500).json({ error: 'An error occurred while saving your request' });
    }
};

module.exports = { submitContactForm };
