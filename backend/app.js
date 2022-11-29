const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Create app
const app = express();

// Imported routes
const weatherRoutes = require('./routes/weatherRoutes');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Request information
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/weather', weatherRoutes);

// Route error handler
app.use((req, res) => {
  res.status(404).json({ error: 'There is no such API route.' });
});

// Starting server
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}.`);
});
