
let lat= -42.411667;
let lng= 173.682222;
let zoom = 13; 


let map = L.map('map').setView([lat,lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let marker = L.marker([lat, lng]).addTo(map);

marker.bindPopup(`
<h2>Kaikoura!</h2>
<ul>
<li> Breite: ${lat.toFixed(5)}
<li> Länge: ${lng.toFixed(5)}}
</ul> 
`).openPopup();

