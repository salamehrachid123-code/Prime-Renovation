const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Test endpoint
app.post('/api/contact', (req, res) => {
  console.log('Contact form received:', req.body);
  res.json({ success: true, message: 'Test successful!' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
