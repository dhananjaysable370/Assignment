const express = require('express');
const { fetchWeatherData } = require('../controllers/weatherController');
const router = express.Router();

// Ensure this POST route exists
router.post('/fetch', fetchWeatherData);

module.exports = router;
