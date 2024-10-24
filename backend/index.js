const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ruleRoutes = require('./routes/ruleRoutes'); // Importing rule routes
const weatherRoutes = require('./routes/weatherRoutes'); // Importing weather routes
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Register the API routes
app.use('/api/rules', ruleRoutes);
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
