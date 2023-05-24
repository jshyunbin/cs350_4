const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON bodies for incoming requests
app.use(bodyParser.json());

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST requests to the '/api' endpoint
app.post('/api', (req, res) => {
  const requestData = req.body;
  // Process the request data
  // ...

  // Send a response
  res.json({ message: 'API request received', data: requestData });
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

