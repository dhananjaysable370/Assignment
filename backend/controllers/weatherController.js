const axios = require('axios');
const Weather = require('../models/WeatherModel');

const fetchWeatherData = async (req, res) => {
    const { city } = req.body;
    const apiKey = process.env.API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = response.data;

    const tempCelsius = data.main.temp - 273.15;
    const weather = new Weather({ city, data: { temp: tempCelsius, main: data.weather[0].main } });
    await weather.save();
    res.json(weather);
};

module.exports = { fetchWeatherData };
