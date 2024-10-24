const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
    city: { type: String, required: true },
    data: { type: Object, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);
