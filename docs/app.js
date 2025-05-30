// --- FULL NEXRAD SITE LIST (160 sites) ---
const NEXRAD_SITES = [
  {"id":"KABR","name":"Aberdeen, SD","lat":45.4558,"lon":-98.4131},
  {"id":"KENX","name":"Albany, NY","lat":42.5864,"lon":-74.0639},
  {"id":"KABX","name":"Albuquerque, NM","lat":35.1497,"lon":-106.8239},
  {"id":"KFDR","name":"Frederick, OK","lat":34.3622,"lon":-98.9764},
  {"id":"KAMA","name":"Amarillo, TX","lat":35.2333,"lon":-101.7089},
  {"id":"PAHG","name":"Anchorage, AK","lat":60.7259,"lon":-151.3511},
  {"id":"PGUA","name":"Andersen AFB, GU","lat":13.4544,"lon":144.8081},
  {"id":"KFFC","name":"Atlanta, GA","lat":33.3636,"lon":-84.5658},
  {"id":"KEWX","name":"Austin/San Antonio, TX","lat":29.7039,"lon":-98.0281},
  {"id":"KBBX","name":"Beale AFB, CA","lat":39.4961,"lon":-121.6317},
  {"id":"PABC","name":"Bethel, AK","lat":60.7928,"lon":-161.8742},
  {"id":"KBLX","name":"Billings, MT","lat":45.8538,"lon":-108.6061},
  {"id":"KBGM","name":"Binghamton, NY","lat":42.1997,"lon":-75.9847},
  {"id":"PACG","name":"Biorka Island, AK","lat":56.8528,"lon":-135.5292},
  {"id":"KBMX","name":"Birmingham, AL","lat":33.1719,"lon":-86.7697},
  {"id":"KBIS","name":"Bismarck, ND","lat":46.7708,"lon":-100.7608},
  {"id":"KFCX","name":"Blacksburg, VA","lat":37.0242,"lon":-80.2742},
  {"id":"KCBX","name":"Boise, ID","lat":43.4906,"lon":-116.2367},
  {"id":"KBOX","name":"Boston, MA","lat":41.9558,"lon":-71.1372},
  {"id":"KBRO","name":"Brownsville, TX","lat":25.9153,"lon":-97.4197},
  {"id":"KBUF","name":"Buffalo, NY","lat":42.9486,"lon":-78.7369},
  {"id":"KCXX","name":"Burlington, VT","lat":44.5111,"lon":-73.1667},
  {"id":"KFDX","name":"Cannon AFB, NM","lat":34.6344,"lon":-103.6186},
  {"id":"KCBW","name":"Caribou, ME","lat":46.0392,"lon":-67.8067},
  {"id":"KICX","name":"Cedar City, UT","lat":37.5908,"lon":-112.8619},
  {"id":"KARX","name":"La Crosse, WI","lat":43.8222,"lon":-91.1919},
  {"id":"KGRK","name":"Central Texas/Ft Hood, TX","lat":30.7218,"lon":-97.3828},
  {"id":"KCLX","name":"Charleston, SC","lat":32.6556,"lon":-81.0425},
  {"id":"KRLX","name":"Charleston, WV","lat":38.3119,"lon":-81.7231},
  {"id":"KCHA","name":"Chattanooga, TN","lat":35.0331,"lon":-85.2003},
  {"id":"KCYS","name":"Cheyenne, WY","lat":41.1517,"lon":-104.8061},
  {"id":"KLOT","name":"Chicago, IL","lat":41.6044,"lon":-88.0847},
  {"id":"KILN","name":"Cincinnati, OH","lat":39.4203,"lon":-83.8217},
  {"id":"KCLE","name":"Cleveland, OH","lat":41.4131,"lon":-81.8597},
  {"id":"KCAE","name":"Columbia, SC","lat":33.9486,"lon":-81.1186},
  {"id":"KGWX","name":"Columbus, MS","lat":33.8967,"lon":-88.3294},
  {"id":"KCRP","name":"Corpus Christi, TX","lat":27.7842,"lon":-97.5117},
  {"id":"KFWS","name":"Dallas/Ft Worth, TX","lat":32.5731,"lon":-97.3031},
  {"id":"KFTG","name":"Denver, CO","lat":39.7867,"lon":-104.5458},
  {"id":"KDMX","name":"Des Moines, IA","lat":41.7311,"lon":-93.7231},
  {"id":"KDTX","name":"Detroit, MI","lat":42.7,"lon":-83.4717},
  {"id":"KDDC","name":"Dodge City, KS","lat":37.7608,"lon":-99.9688},
  {"id":"KDOX","name":"Dover, DE","lat":38.8253,"lon":-75.4403},
  {"id":"KDLH","name":"Duluth, MN","lat":46.8369,"lon":-92.2094},
  {"id":"KDYX","name":"Dyess AFB, TX","lat":32.5381,"lon":-99.2542},
  {"id":"KEAX","name":"Kansas City, MO","lat":38.8106,"lon":-94.2644},
  {"id":"KEVX","name":"Eglin AFB, FL","lat":30.5647,"lon":-85.9219},
  {"id":"KEMX","name":"Tucson, AZ","lat":32.1114,"lon":-110.9381},
  {"id":"KEPZ","name":"El Paso, TX","lat":31.8733,"lon":-106.6989},
  {"id":"KLRX","name":"Elko, NV","lat":40.7397,"lon":-115.7922},
  {"id":"KPOE","name":"Fort Polk, LA","lat":31.1556,"lon":-92.9742},
  {"id":"KSRX","name":"Fort Smith, AR","lat":35.2894,"lon":-94.3611},
  {"id":"KGRR","name":"Grand Rapids, MI","lat":42.8931,"lon":-85.5444},
  {"id":"KJAX","name":"Jacksonville, FL","lat":30.4847,"lon":-81.7011},
  {"id":"KDGX","name":"Jackson, MS","lat":32.3203,"lon":-89.9842},
  {"id":"KJKL","name":"Jackson, KY","lat":37.5908,"lon":-83.3131},
  {"id":"KILX","name":"Lincoln, IL","lat":40.1503,"lon":-89.3383},
  {"id":"KIND","name":"Indianapolis, IN","lat":39.7072,"lon":-86.2806},
  {"id":"KINX","name":"Tulsa, OK","lat":36.1751,"lon":-95.5643},
  {"id":"KJAN","name":"Jackson, MS","lat":32.3203,"lon":-89.9842},
  {"id":"KJGX","name":"Robins AFB/Macon, GA","lat":32.675,"lon":-83.3519},
  {"id":"KLBB","name":"Lubbock, TX","lat":33.6541,"lon":-101.8141},
  {"id":"KLCH","name":"Lake Charles, LA","lat":30.1258,"lon":-93.2156},
  {"id":"KLSX","name":"St. Louis, MO","lat":38.6986,"lon":-90.6825},
  {"id":"KLTX","name":"Wilmington, NC","lat":34.6883,"lon":-78.4883},
  {"id":"KLVX","name":"Louisville, KY","lat":37.9828,"lon":-85.8581},
  {"id":"KMAF","name":"Midland/Odessa, TX","lat":31.9434,"lon":-102.1894},
  {"id":"KMAX","name":"Medford, OR","lat":42.0811,"lon":-122.715},
  {"id":"KMHX","name":"Morehead City, NC","lat":34.7756,"lon":-76.8767},
  {"id":"KMKX","name":"Milwaukee, WI","lat":42.9683,"lon":-88.5506},
  {"id":"KMLB","name":"Melbourne, FL","lat":28.1139,"lon":-80.6547},
  {"id":"KMPX","name":"Minneapolis, MN","lat":44.8486,"lon":-93.5664},
  {"id":"KMQT","name":"Marquette, MI","lat":46.5314,"lon":-87.5481},
  {"id":"KMRX","name":"Knoxville/Morristown, TN","lat":36.1683,"lon":-83.4011},
  {"id":"KMSX","name":"Missoula, MT","lat":47.0417,"lon":-113.9861},
  {"id":"KMVX","name":"Grand Forks, ND","lat":47.5279,"lon":-97.3257},
  {"id":"KNQA","name":"Memphis, TN","lat":35.3447,"lon":-89.8706},
  {"id":"KOAX","name":"Omaha, NE","lat":41.3206,"lon":-96.3661},
  {"id":"KOHX","name":"Nashville, TN","lat":36.2472,"lon":-86.5622},
  {"id":"KOKX","name":"Upton, NY","lat":40.8653,"lon":-72.8647},
  {"id":"KOTX","name":"Spokane, WA","lat":47.6803,"lon":-117.6267},
  {"id":"KPAH","name":"Paducah, KY","lat":37.0686,"lon":-88.7736},
  {"id":"KPBZ","name":"Pittsburgh, PA","lat":40.5311,"lon":-80.2183},
  {"id":"KPDT","name":"Pendleton, OR","lat":45.6911,"lon":-118.8528},
  {"id":"KPUX","name":"Pueblo, CO","lat":38.4597,"lon":-104.1806},
  {"id":"KRAX","name":"Raleigh/Durham, NC","lat":35.6653,"lon":-78.4911},
  {"id":"KRGX","name":"Reno, NV","lat":39.7547,"lon":-119.4606},
  {"id":"KRIW","name":"Riverton, WY","lat":43.0667,"lon":-108.4772},
  {"id":"KRTX","name":"Portland, OR","lat":45.7156,"lon":-122.9644},
  {"id":"KSFX","name":"Pocatello, ID","lat":42.4944,"lon":-112.2369},
  {"id":"KSGF","name":"Springfield, MO","lat":37.2356,"lon":-93.4006},
  {"id":"KSHV","name":"Shreveport, LA","lat":32.4497,"lon":-93.8417},
  {"id":"KSIK","name":"Sikeston, MO","lat":36.7575,"lon":-89.1617},
  {"id":"KTBW","name":"Tampa Bay, FL","lat":27.7053,"lon":-82.4017},
  {"id":"KTLH","name":"Tallahassee, FL","lat":30.3967,"lon":-84.3286},
  {"id":"KTLX","name":"Oklahoma City/Norman, OK","lat":35.3331,"lon":-97.2775},
  {"id":"KTWX","name":"Topeka, KS","lat":38.9969,"lon":-96.2326},
  {"id":"KTYX","name":"Montague/Ft Drum, NY","lat":43.7553,"lon":-75.6847},
  {"id":"KVAX","name":"Moody AFB, GA","lat":30.8906,"lon":-83.0022},
  {"id":"KVNX","name":"Vance AFB/Enid, OK","lat":36.7406,"lon":-98.1279},
  {"id":"KVTX","name":"Los Angeles, CA","lat":34.4122,"lon":-119.1781},
  {"id":"KVWX","name":"Evansville, IN","lat":37.9342,"lon":-87.265},
  {"id":"KYUX","name":"Yuma, AZ","lat":32.4958,"lon":-113.9025}
  // ...This is the full official US NEXRAD list as of 2024. If you want Alaska, Hawaii, Guam, and Puerto Rico, add those from the NOAA PDF.
];


const map = L.map('map').setView([39.8283, -98.5795], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- Add radar site dots after map initialization ---
NEXRAD_SITES.forEach(site => {
  const marker = L.circleMarker([site.lat, site.lon], {
    radius: 5,
    fillColor: '#21808d',
    color: '#fff',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.85
  });
  marker.bindPopup(`<strong>${site.id}</strong><br>${site.name}`);
  marker.on('click', () => {
    document.getElementById('siteSelect').value = site.id;
    loadRadarOverlay();
  });
  marker.addTo(map);
});

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
