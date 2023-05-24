const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define example restaurant data
let restaurantData = {
  id: 1,
  name: "Asobu",
  introduction: "A best place for KAIST students",
  address: "14, Eoeun-ro 48beon-gil, Yuseong-gu, Daejeon-si",
  location: [XX.XX, XX.XX],
  region: "Eueon-dong",
  phone: "042-XXX-XXXX",
  price: 9500,
  business_hour: {
    monday: [0, 0, 0, 0, ...],
    // Define business hours for other days as well
  },
  moods: ["Cozy", "Affordable"],
  characteristics: ["Sushi", "Donburi"],
  images: ["path/to/image1", ...],
  menus: [
    {
      name: "menu A",
      price: 9500,
    },
    {
      name: "menu B",
      price: 11000,
    },
    // Define other menus
  ],
  reviews: [
    {
      username: "minji",
      content: "Good",
    },
    // Define other reviews
  ],
  rating: 4.6,
};

// Define route handlers
app.get('/api/getRestaurantData', (req, res) => {
  // Handle GET request for getting restaurant data
  res.json(restaurantData);
});

app.post('/api/insertRestaurantData', (req, res) => {
  // Handle POST request for inserting restaurant data
  const newData = req.body;
  restaurantData = { ...restaurantData, ...newData };
  res.json(restaurantData);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server is listening on port ${port}`);
});

