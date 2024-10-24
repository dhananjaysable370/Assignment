const express = require('express');
const { fetchWeatherData } = require('../controllers/weatherController');
const router = express.Router();

router.post('/fetch', fetchWeatherData);

module.exports = router;
