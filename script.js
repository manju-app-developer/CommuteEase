// Dark Mode Toggle (Now Saves Preference)
const toggleMode = document.getElementById("toggle-mode");
const body = document.body;

// Check for saved mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleMode.textContent = "☀️ Light Mode";
}

toggleMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleMode.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleMode.textContent = "🌙 Dark Mode";
    }
});

// Live Traffic Simulation (Dynamic UI Updates)
function updateTrafficStatus() {
    const trafficDisplay = document.querySelector(".traffic-display");
    const statuses = ["🟢 Smooth Traffic", "🟡 Moderate Congestion", "🔴 Heavy Traffic", "🚧 Roadblock Detected"];
    const colors = ["#4CAF50", "#FFC107", "#FF5722", "#D32F2F"];

    trafficDisplay.innerHTML = ""; // Clear previous statuses
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * statuses.length);
        let trafficBox = document.createElement("p");
        trafficBox.textContent = `${statuses[randomIndex]} - Updated: ${new Date().toLocaleTimeString()}`;
        trafficBox.style.color = colors[randomIndex];
        trafficDisplay.appendChild(trafficBox);
    }
}
setInterval(updateTrafficStatus, 5000);
updateTrafficStatus(); // Initial Call

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Button Hover Animation
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("mouseover", () => button.style.transform = "scale(1.1)");
    button.addEventListener("mouseleave", () => button.style.transform = "scale(1)");
});

// Dynamic Hero Text Animation
const heroText = document.querySelector(".hero h2");
const words = ["Smart Traffic Solutions", "AI-Powered Routing", "Real-Time Updates", "Modern City Planning"];
let wordIndex = 0;

function changeHeroText() {
    heroText.textContent = `🚗 ${words[wordIndex]}`;
    wordIndex = (wordIndex + 1) % words.length;
}
setInterval(changeHeroText, 3000);

// Fade-in Effect on Scroll
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

fadeElements.forEach(element => observer.observe(element));

// AI Chatbot Basic Simulation
const chatbox = document.querySelector(".chatbox");
const userInput = document.getElementById("user-input");
const sendMessage = document.getElementById("send-message");

sendMessage.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        const userText = document.createElement("p");
        userText.innerHTML = `<strong>You:</strong> ${userMessage}`;
        chatbox.appendChild(userText);

        // Simulated bot response
        setTimeout(() => {
            const botResponse = document.createElement("p");
            botResponse.innerHTML = `<strong>Bot:</strong> Traffic updates are optimized for smooth flow! 🚦`;
            chatbox.appendChild(botResponse);
        }, 1000);

        userInput.value = ""; // Clear input field
    }
});
