document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const heroText = document.querySelector(".hero h2");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessage = document.getElementById("send-message");
    const fab = document.querySelector(".fab");
    const contactSection = document.querySelector(".contact-section");

    /** ====================
     * 🌙 Dark Mode Toggle
     * ==================== */
    function enableDarkMode() {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
        toggleMode.textContent = "☀️ Light Mode";
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
        toggleMode.textContent = "🌙 Dark Mode";
    }

    if (localStorage.getItem("dark-mode") === "enabled") enableDarkMode();

    toggleMode.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
    });

    /** ====================
     * 🚦 Traffic Updates
     * ==================== */
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#4CAF50", delay: 3000 },
            { text: "🟡 Moderate Congestion", color: "#FFC107", delay: 5000 },
            { text: "🔴 Heavy Traffic", color: "#FF5722", delay: 7000 },
            { text: "🚧 Roadblock Detected", color: "#D32F2F", delay: 9000 }
        ];

        trafficDisplay.innerHTML = "";
        statuses.forEach((status, index) => {
            setTimeout(() => {
                let trafficBox = document.createElement("p");
                trafficBox.textContent = `${status.text} - Updated: ${new Date().toLocaleTimeString()}`;
                trafficBox.style.color = status.color;
                trafficBox.classList.add("traffic-update");
                trafficDisplay.appendChild(trafficBox);
            }, index * status.delay);
        });
    }

    setInterval(updateTrafficStatus, 15000);
    updateTrafficStatus();

    /** ====================
     * 🎭 Hero Text Animation
     * ==================== */
    const heroWords = ["Smart Traffic Solutions", "AI-Powered Routing", "Real-Time Updates", "Modern City Planning"];
    let wordIndex = 0;

    function changeHeroText() {
        heroText.classList.add("fade-out");
        setTimeout(() => {
            heroText.textContent = `🚗 ${heroWords[wordIndex]}`;
            heroText.classList.remove("fade-out");
            wordIndex = (wordIndex + 1) % heroWords.length;
        }, 500);
    }

    setInterval(changeHeroText, 3000);

    /** ====================
     * 🏆 Smooth Scroll Effect
     * ==================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    /** ====================
     * 🧠 AI Chatbot
     * ==================== */
    sendMessage.addEventListener("click", sendChatMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendChatMessage();
    });

    function sendChatMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;

        addChatMessage("You", userMessage);
        generateBotResponse(userMessage);
        userInput.value = "";
    }

    function addChatMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function generateBotResponse(userMessage) {
        let botResponse = "I'm still learning, but I can assist with traffic updates! 🚦";

        const responses = {
            "traffic": "Traffic is being monitored. Expect updates soon! 🚘",
            "hello": "Hello! How can I assist you today? 😊",
            "roadblock": "🚧 Roadblocks are being checked. Stay alert!",
            "weather": "☀️ I can't check the weather yet, but I recommend a weather app!",
            "delay": "⏳ Traffic delays are being analyzed. Please wait!",
            "accident": "🚨 Accident reported! Authorities have been notified.",
            "best route": "🛣️ The best route is being calculated. Please hold on!",
            "shortest path": "🔍 Searching for the shortest path. One moment!"
        };

        for (let key in responses) {
            if (userMessage.toLowerCase().includes(key)) {
                botResponse = responses[key];
                break;
            }
        }

        setTimeout(() => addChatMessage("Bot", botResponse), 1000);
    }

    /** ====================
     * 🎭 Floating Action Button (FAB)
     * ==================== */
    fab.addEventListener("click", () => {
        fab.classList.add("fab-active");
        setTimeout(() => fab.classList.remove("fab-active"), 500);
        alert("🚀 Quick Action Activated!");
    });

    /** ====================
     * ✨ CTA Button Animation
     * ==================== */
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("mouseover", () => button.style.transform = "scale(1.15)");
        button.addEventListener("mouseleave", () => button.style.transform = "scale(1)");
    });

    /** ====================
     * 🌅 Dynamic Background Change
     * ==================== */
    function updateBackground() {
        const hour = new Date().getHours();
        if (hour >= 6 && hour < 12) {
            body.style.background = "linear-gradient(135deg, #FFD700, #FFA500)";  
        } else if (hour >= 12 && hour < 18) {
            body.style.background = "linear-gradient(135deg, #f4f4f4, #e0e0e0)";
        } else if (hour >= 18 && hour < 21) {
            body.style.background = "linear-gradient(135deg, #FF4500, #8B0000)";
        } else {
            body.style.background = "linear-gradient(135deg, #121212, #1a1a1a)";
        }
    }

    setInterval(updateBackground, 60000);
    updateBackground();
});
