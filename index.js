const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Enable CORS
app.use(cors());

// Routes
app.use('/api/search', require('./routes/searchResults.js'));

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(`${__dirname}/public`));
}

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
