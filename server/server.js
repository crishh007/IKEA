require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static Files - serve from the production build directory
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Stats API
app.get('/api/stats', (req, res) => {
    res.json([
        { id: 1, label: 'Happy Customers', value: 3453, icon: 'users' },
        { id: 2, label: 'Project Done', value: 4234, icon: 'check-circle' },
        { id: 3, label: 'Awards Win', value: 3123, icon: 'award' },
        { id: 4, label: 'Expert Workers', value: 1831, icon: 'user-friends' }
    ]);
});

// All other routes serve React index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
