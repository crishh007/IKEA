const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic Route
app.get('/api/stats', (req, res) => {
    res.json([
        { id: 1, label: 'Happy Customers', value: 3453, icon: 'users' },
        { id: 2, label: 'Project Done', value: 4234, icon: 'check-circle' },
        { id: 3, label: 'Awards Win', value: 3123, icon: 'award' },
        { id: 4, label: 'Expert Workers', value: 1831, icon: 'user-friends' }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
