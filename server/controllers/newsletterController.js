const Newsletter = require('../models/Newsletter');

const subscribeNewsletter = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Check if already subscribed
        const existing = await Newsletter.findOne({ email });
        if (existing) {
            return res.status(400).json({ error: 'Email already subscribed' });
        }

        const newSubscription = await Newsletter.create({ email });

        res.status(201).json({
            success: true,
            message: 'Successfully subscribed to newsletter',
            data: newSubscription
        });
    } catch (error) {
        if (error.code === 11000) { // Duplicate key error just in case
            return res.status(400).json({ error: 'Email already subscribed' });
        }
        console.error('Newsletter subscription error:', error.message);
        res.status(500).json({ error: 'An error occurred while subscribing' });
    }
};

module.exports = { subscribeNewsletter };
