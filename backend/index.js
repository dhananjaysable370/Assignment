
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use('/api/rules', ruleRoutes);
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));