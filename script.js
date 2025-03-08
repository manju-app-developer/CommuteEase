// Initialize Map
var map = L.map('map').setView([12.9716, 77.5946], 13); // Default to Bangalore

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample Traffic Data (For Demo)
var trafficData = [
    { lat: 12.9721, lng: 77.5933, type: "High Congestion" },
    { lat: 12.9755, lng: 77.5985, type: "Medium Congestion" },
    { lat: 12.9780, lng: 77.5900, type: "Accident Reported" }
];

// Add Traffic Markers
trafficData.forEach(point => {
    let color = point.type.includes("High") ? "red" : "orange";
    L.circleMarker([point.lat, point.lng], {
        radius: 8,
        color: color,
        fillOpacity: 0.8
    }).addTo(map).bindPopup(`🚦 Traffic: ${point.type}`);
});

// Function to Optimize Route (Basic Alert for Now)
function optimizeRoute() {
    alert("🚗 Route Optimization Coming Soon!");
}

// Function to Report Traffic Issue
function reportIssue() {
    let location = document.getElementById("location").value;
    let issueType = document.getElementById("issue-type").value;
    
    if (location === "") {
        alert("📍 Please enter a location!");
        return;
    }
    
    alert(`✅ Issue reported: ${issueType} at ${location}`);
}
