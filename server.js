const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();

// Add CORS headers to all responses to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/radar/:site/:product/:frame', async (req, res) => {
  const { site, product, frame } = req.params;
  const url = `https://radar.weather.gov/ridge/RadarImg/${product}/${site}_${product}_${frame}.png`;
  try {
    const response = await fetch(url);
    if (!response.ok) return res.status(404).send('Not found');
    res.set('Content-Type', 'image/png');
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send('Proxy fetch error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
