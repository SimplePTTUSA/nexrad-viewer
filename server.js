const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/radar/:site/:product/:frame', async (req, res) => {
  const { site, product, frame } = req.params;
  const url = `https://radar.weather.gov/ridge/RadarImg/${product}/${site}_${product}_${frame}.png`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Content-Type', 'image/png');
      return res.status(404).end();
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'image/png');
    response.body.pipe(res);
  } catch (err) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'image/png');
    res.status(500).end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
