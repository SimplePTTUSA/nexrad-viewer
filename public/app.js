// Example NEXRAD sites (expand to your full list as needed)
const NEXRAD_SITES = [
  { id: "KTLX", name: "Oklahoma City, OK", lat: 35.3331, lon: -97.2775 },
  { id: "KHGX", name: "Houston/Galveston, TX", lat: 29.4719, lon: -95.0789 },
  { id: "KDVN", name: "Davenport, IA", lat: 41.6111, lon: -90.5806 },
  { id: "KGRR", name: "Grand Rapids, MI", lat: 42.8931, lon: -85.5444 },
  // ...add your full list here...
];

const map = L.map('map').setView([39.8283, -98.5795], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let radarOverlay = null;

function populateSiteSelect() {
  const sel = document.getElementById('siteSelect');
  NEXRAD_SITES.forEach(site => {
    const opt = document.createElement('option');
    opt.value = site.id;
    opt.textContent = `${site.id} - ${site.name}`;
    sel.appendChild(opt);
  });
}

function loadRadarOverlay() {
  const siteId = document.getElementById('siteSelect').value;
  const product = document.getElementById('productSelect').value;
  const frame = 0; // always use latest frame
  if (!siteId) return;
  if (radarOverlay) map.removeLayer(radarOverlay);

  // Use proxy to avoid CORS
  const url = `https://nexrad-viewer.onrender.com/${siteId}/${product}/${frame}`;


  // Calculate bounds (approx 230km range)
  const site = NEXRAD_SITES.find(s => s.id === siteId);
  const kmToDeg = 230 / 111.32;
  const bounds = [
    [site.lat - kmToDeg, site.lon - kmToDeg],
    [site.lat + kmToDeg, site.lon + kmToDeg]
  ];

  radarOverlay = L.imageOverlay(url, bounds, { opacity: 0.7, zIndex: 300 });
  radarOverlay.addTo(map);
  map.setView([site.lat, site.lon], 8);
}

// Populate drop-downs and set up event listeners
populateSiteSelect();
document.getElementById('loadRadar').onclick = loadRadarOverlay;

// Optionally load initial radar
document.getElementById('siteSelect').selectedIndex = 0;
loadRadarOverlay();

// Polygons for warnings (optional, demo)
async function loadPolygons() {
  try {
    const resp = await fetch('https://api.weather.gov/alerts/active?event=Tornado%20Warning,Severe%20Thunderstorm%20Warning');
    const data = await resp.json();
    data.features.forEach(feature => {
      if (!feature.geometry || !feature.geometry.coordinates) return;
      let polygons = [];
      if (feature.geometry.type === "Polygon") polygons = [feature.geometry.coordinates];
      if (feature.geometry.type === "MultiPolygon") polygons = feature.geometry.coordinates;
      polygons.forEach(polyCoords => {
        const latlngs = polyCoords.map(ring => ring.map(([lon, lat]) => [lat, lon]));
        const color = feature.properties.event === "Tornado Warning" ? "#dc2626" : "#ffe600";
        L.polygon(latlngs, {
          fillColor: color,
          fillOpacity: 0.3,
          color: color,
          weight: 2
        }).addTo(map);
      });
    });
  } catch (e) { console.error(e); }
}
loadPolygons();
setInterval(loadPolygons, 60000);
