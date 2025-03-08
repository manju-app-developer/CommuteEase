// Dark Mode Toggle (Now Saves Preference and Animates Transition)
const toggleMode = document.getElementById("toggle-mode");
const body = document.body;

// Load saved mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    enableDarkMode();
}

toggleMode.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
    toggleMode.textContent = "☀️ Light Mode";
    toggleMode.style.background = "#444";
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
    toggleMode.textContent = "🌙 Dark Mode";
    toggleMode.style.background = "#fff";
}

// Real-Time Traffic Simulation (Enhanced with AI-like Randomization)
function updateTrafficStatus() {
    const trafficDisplay = document.querySelector(".traffic-display");
    const statuses = [
        { text: "🟢 Smooth Traffic", color: "#4CAF50" },
        { text: "🟡 Moderate Congestion", color: "#FFC107" },
        { text: "🔴 Heavy Traffic", color: "#FF5722" },
        { text: "🚧 Roadblock Detected", color: "#D32F2F" }
    ];

    trafficDisplay.innerHTML = ""; // Clear previous statuses
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * statuses.length);
        let trafficBox = document.createElement("p");
        trafficBox.textContent = `${statuses[randomIndex].text} - Updated: ${new Date().toLocaleTimeString()}`;
        trafficBox.style.color = statuses[randomIndex].color;
        trafficBox.style.fontWeight = "bold";
        trafficBox.style.transition = "all 0.4s ease-in-out";
        trafficDisplay.appendChild(trafficBox);
    }
}
setInterval(updateTrafficStatus, 5000);
updateTrafficStatus(); // Initial Call

// Smooth Scroll Effect for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Dynamic Hero Text Animation (More Engaging)
const heroText = document.querySelector(".hero h2");
const words = ["Smart Traffic Solutions", "AI-Powered Routing", "Real-Time Updates", "Modern City Planning"];
let wordIndex = 0;

function changeHeroText() {
    heroText.style.opacity = 0;
    setTimeout(() => {
        heroText.textContent = `🚗 ${words[wordIndex]}`;
        heroText.style.opacity = 1;
        wordIndex = (wordIndex + 1) % words.length;
    }, 500);
}
setInterval(changeHeroText, 3000);

// Fade-in Effect on Scroll (More Responsive)
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

fadeElements.forEach(element => observer.observe(element));

// AI Chatbot Enhanced (More Intelligent Responses)
const chatbox = document.querySelector(".chatbox");
const userInput = document.getElementById("user-input");
const sendMessage = document.getElementById("send-message");

sendMessage.addEventListener("click", sendChatMessage);
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendChatMessage();
    }
});

function sendChatMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        addChatMessage("You", userMessage);
        generateBotResponse(userMessage);
        userInput.value = ""; // Clear input field
    }
}

function addChatMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateBotResponse(userMessage) {
    let botResponse = "I’m still learning, but I can help with traffic updates! 🚦";

    if (userMessage.toLowerCase().includes("traffic")) {
        botResponse = "Traffic is being monitored. Expect updates soon! 🚘";
    } else if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I assist you today? 😊";
    } else if (userMessage.toLowerCase().includes("roadblock")) {
        botResponse = "🚧 Roadblocks are being checked. Stay alert!";
    } else if (userMessage.toLowerCase().includes("weather")) {
        botResponse = "☀️ I can't check the weather yet, but I recommend a weather app!";
    }

    setTimeout(() => {
        addChatMessage("Bot", botResponse);
    }, 1000);
}

// Floating Action Button (FAB) Click Effect
const fab = document.querySelector(".fab");
fab.addEventListener("click", () => {
    alert("🚀 Quick Action Activated!");
    fab.style.transform = "rotate(360deg)";
    setTimeout(() => {
        fab.style.transform = "rotate(0deg)";
    }, 500);
});

// CTA Button Hover Animation
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("mouseover", () => button.style.transform = "scale(1.15)");
    button.addEventListener("mouseleave", () => button.style.transform = "scale(1)");
});

// Time-Based Background Color Change (Dynamic UI)
function updateBackground() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
        body.style.background = "linear-gradient(135deg, #f4f4f4, #e0e0e0)";
    } else {
        body.style.background = "linear-gradient(135deg, #121212, #1a1a1a)";
    }
}
setInterval(updateBackground, 60000);
updateBackground();
