const express = require('express');
const router = express.Router();
const axios = require('axios');
const url = require('url');

router.get('/:query', async (req, res) => {
  try {
    // Add api key & query strings
    const params = new URLSearchParams({
      access_token: process.env.API_KEY,
      ...url.parse(req.url, true).query,
    });
    const query = req.params.query;
    const results = await axios(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`
    );

    // Format data to include city and state
    results.data.features.forEach((item) => {
      // Init set to null
      item.city = null;
      item.state = null;

      // Cycle through content results
      item.context.forEach((type) => {
        if (type.id.includes('place')) {
          item.city = type.text;
        } else if (type.id.includes('region')) {
          item.state = type.text;
        }
      });
    });
    const data = results.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
