// Initialize the Map
var map = L.map('map').setView([12.9716, 77.5946], 13); // Default location (Bangalore)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample Traffic Data (You can replace this with real API)
var trafficData = [
    { lat: 12.9721, lng: 77.5933, congestion: "High" },
    { lat: 12.9755, lng: 77.5985, congestion: "Medium" }
];

// Show Traffic Congestion Points
trafficData.forEach(point => {
    let color = point.congestion === "High" ? "red" : "orange";
    L.circleMarker([point.lat, point.lng], {
        radius: 8,
        color: color,
        fillOpacity: 0.8
    }).addTo(map).bindPopup(`Traffic: ${point.congestion}`);
});

// Route Optimization (Basic Example)
function findBestRoute() {
    alert("Route optimization feature coming soon!");
}
