// Dark Mode Toggle
const toggleMode = document.getElementById("toggle-mode");
toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleMode.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});

// Live Time Traffic Simulation
function updateTrafficStatus() {
    const trafficBoxes = document.querySelectorAll(".traffic-box");
    const statuses = ["Smooth Traffic", "Moderate Congestion", "Heavy Traffic", "Roadblock Detected"];
    const colors = ["#4CAF50", "#FFC107", "#FF5722", "#D32F2F"];

    trafficBoxes.forEach((box) => {
        let randomIndex = Math.floor(Math.random() * statuses.length);
        box.innerHTML = `
            <h3>${statuses[randomIndex]}</h3>
            <p>Status updated: ${new Date().toLocaleTimeString()}</p>
        `;
        box.style.backgroundColor = colors[randomIndex];
    });
}

// Auto Update Traffic Every 5 Seconds
setInterval(updateTrafficStatus, 5000);
updateTrafficStatus(); // Initial Call

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Button Hover Animation
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Dynamic Hero Text Effect
const heroText = document.getElementById("hero-text");
const words = ["Traffic Management", "Smart City Optimization", "AI-Powered Routing", "Real-Time Updates"];
let wordIndex = 0;

function changeHeroText() {
    heroText.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length;
}
setInterval(changeHeroText, 3000);

// Fade-in Effect on Scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(element => observer.observe(element));
