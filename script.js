document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleMode = document.getElementById("toggle-mode");
    const trafficDisplay = document.querySelector(".traffic-display");
    const heroText = document.querySelector(".hero h2");
    const chatbox = document.querySelector(".chatbox");
    const userInput = document.getElementById("user-input");
    const sendMessage = document.getElementById("send-message");
    const fab = document.querySelector(".fab");

    /** ====================
     *  🌙 Dark Mode Toggle 
     *  Saves user preference and applies smooth transitions.
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

    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    toggleMode.addEventListener("click", () => {
        body.classList.contains("dark-mode") ? disableDarkMode() : enableDarkMode();
    });

    /** ====================
     *  🚦 Real-Time Traffic Updates
     *  AI-like randomization for live updates.
     * ==================== */
    function updateTrafficStatus() {
        const statuses = [
            { text: "🟢 Smooth Traffic", color: "#4CAF50" },
            { text: "🟡 Moderate Congestion", color: "#FFC107" },
            { text: "🔴 Heavy Traffic", color: "#FF5722" },
            { text: "🚧 Roadblock Detected", color: "#D32F2F" }
        ];

        trafficDisplay.innerHTML = ""; 
        for (let i = 0; i < 3; i++) {
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            let trafficBox = document.createElement("p");
            trafficBox.textContent = `${status.text} - Updated: ${new Date().toLocaleTimeString()}`;
            trafficBox.style.color = status.color;
            trafficBox.classList.add("traffic-update");
            trafficDisplay.appendChild(trafficBox);
        }
    }
    setInterval(updateTrafficStatus, 5000);
    updateTrafficStatus(); 

    /** ====================
     *  🎭 Dynamic Hero Text Animation
     *  Keeps the hero section engaging.
     * ==================== */
    const heroWords = ["Smart Traffic Solutions", "AI-Powered Routing", "Real-Time Updates", "Modern City Planning"];
    let wordIndex = 0;

    function changeHeroText() {
        heroText.style.opacity = 0;
        setTimeout(() => {
            heroText.textContent = `🚗 ${heroWords[wordIndex]}`;
            heroText.style.opacity = 1;
            wordIndex = (wordIndex + 1) % heroWords.length;
        }, 500);
    }
    setInterval(changeHeroText, 3000);

    /** ====================
     *  🏆 Smooth Scroll Effect
     *  For a modern UI experience.
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
     *  🧠 AI Chatbot
     *  Now with more intelligent responses!
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
        let botResponse = "I’m still learning, but I can help with traffic updates! 🚦";

        const responses = {
            "traffic": "Traffic is being monitored. Expect updates soon! 🚘",
            "hello": "Hello! How can I assist you today? 😊",
            "roadblock": "🚧 Roadblocks are being checked. Stay alert!",
            "weather": "☀️ I can't check the weather yet, but I recommend a weather app!",
            "delay": "⏳ Traffic delays are being analyzed. Please wait!",
            "accident": "🚨 Accident reported! Authorities have been notified."
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
     *  🎭 Interactive Floating Action Button (FAB)
     *  Now triggers a fun animation and alert.
     * ==================== */
    fab.addEventListener("click", () => {
        alert("🚀 Quick Action Activated!");
        fab.style.transform = "rotate(360deg)";
        setTimeout(() => fab.style.transform = "rotate(0deg)", 500);
    });

    /** ====================
     *  ✨ CTA Button Animation
     *  Enhances user engagement.
     * ==================== */
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("mouseover", () => button.style.transform = "scale(1.15)");
        button.addEventListener("mouseleave", () => button.style.transform = "scale(1)");
    });

    /** ====================
     *  🌅 Dynamic Background Change
     *  Adapts UI color based on time of day.
     * ==================== */
    function updateBackground() {
        const hour = new Date().getHours();
        body.style.background = (hour >= 6 && hour < 18) 
            ? "linear-gradient(135deg, #f4f4f4, #e0e0e0)"
            : "linear-gradient(135deg, #121212, #1a1a1a)";
    }
    setInterval(updateBackground, 60000);
    updateBackground();
});
