let lat = -42.411667;
let lng = 173.682222;
let zoom = 13;

let map = L.map('map', {
    center: [lat, lng],
    zoom: zoom
}
);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let jsonPunkt = {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [lng, lat]
    },
    "properties": {
        "name": "Kaikoura"
    }
};

L.geoJSON(jsonPunkt, {}).bindPopup(function (layer) {
    return `
    <h2>${layer.feature.properties.name}</h2>
    <ul>
    <li> Breite: ${layer.feature.geometry.coordinates [1].toFixed(5)}
    <li> Länge: ${layer.feature.geometry.coordinates [0].toFixed(5)}}
    </ul> 
    `;
}).addTo(map);