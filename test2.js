const express = require('express');

const app = express();
const port = 3000;

// Restaurant data
let restaurantData = [];

// GET route for /api/getRestaurantData
app.get('/api/getRestaurantData', (req, res) => {
  // Retrieve restaurant data from the database or any data source
  // In this example, we'll return the restaurantData array
  res.json(restaurantData);
});

// POST route for /api/insertRestaurantData
app.post('/api/insertRestaurantData', (req, res) => {
  // Extract the restaurant data from the request body
  const { id, name, introduction, address, location, region, phone, price, business_hour, moods, characteristics, images, menus, reviews, rating } = req.body;

  // Create a new restaurant object
  const newRestaurant = {
    id,
    name,
    introduction,
    address,
    location,
    region,
    phone,
    price,
    business_hour,
    moods,
    characteristics,
    images,
    menus,
    reviews,
    rating
  };

  // Add the new restaurant to the restaurantData array
  restaurantData.push(newRestaurant);

  // Send a response indicating success
  res.json({ message: 'Restaurant data inserted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

