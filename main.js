
var map = L.map('map').setView([-42.411667, 173.682222], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([-42.411667, 173.682222]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br> This is Kaikoura.").openPopup();
