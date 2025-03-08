function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 12.9716, lng: 77.5946 }, // Default to Bangalore
        zoom: 12,
    });
}

window.onload = initMap;
