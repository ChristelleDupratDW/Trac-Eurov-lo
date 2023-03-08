var map = L.map('map').setView([50.9651981, 1.8630496], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



var gpx = 'Troncons/aire-sur-la-lys-st-venant.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {async: true}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
  
}).addTo(map);


    

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}



map.on('click', onMapClick);
