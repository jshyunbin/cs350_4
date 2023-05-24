const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define route handlers
app.get('/api/getRestaurantData', (req, res) => {
  // Handle GET request for getting restaurant data
  // Replace the following code with your implementation
  const restaurantData = { name: 'Restaurant', location: 'City' };
  res.json(restaurantData);
});

app.post('/api/insertRestaurantData', (req, res) => {
  // Handle POST request for inserting restaurant data
  // Replace the following code with your implementation
  const { name, location } = req.body;
  const insertedData = { name, location };
  res.json(insertedData);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server is listening on port ${port}`);
});

