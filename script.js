// Language Data
const translations = {
    en: {
        title: "Farmer's Hub",
        languageToggle: "অসমীয়া / हिन्दी / English",
        marketPrices: "Check Market Prices",
        govSchemes: "Apply for Schemes",
        weatherUpdates: "Weather Updates",
        soilData: "Soil Data",
        fpoConnection: "FPO Connection",
        alerts: ["Latest Scheme Alert: New Subsidies Available", "Weather Warning: Heavy Rain Expected", "Price Update: Paddy Prices Increased"]
    },
    as: {
        title: "কৃষক হাব",
        languageToggle: "हिन्दी / English / অসমীয়া",
        marketPrices: "বাজার মূল্য চাওক",
        govSchemes: "যোজনাবোৰৰ বাবে আবেদন কৰক",
        weatherUpdates: "বতৰৰ তথ্য",
        soilData: "মাটিৰ তথ্য",
        fpoConnection: "FPO সংযোগ",
        alerts: ["নতুন অনুদান উপলব্ধ: যোজনা সতর্কতা", "বতৰৰ সতৰ্কবাণী: অধিক বৰষুণ হ'ব", "মূল্য সজাগীকৰণ: ধানৰ মূল্য বৃদ্ধি"]
    },
    hi: {
        title: "किसान केंद्र",
        languageToggle: "English / অসমীয়া / हिन्दी",
        marketPrices: "बाजार मूल्य देखें",
        govSchemes: "योजनाओं के लिए आवेदन करें",
        weatherUpdates: "मौसम अपडेट",
        soilData: "मिट्टी डेटा",
        fpoConnection: "एफपीओ कनेक्शन",
        alerts: ["नई सब्सिडी उपलब्ध: योजना अलर्ट", "मौसम चेतावनी: भारी बारिश की संभावना", "मूल्य अपडेट: धान के दाम बढ़े"]
    }
};

// Default Language
let currentLanguage = "en";

// Function to cycle through languages
function updateLanguage() {
    if (currentLanguage === "en") {
        currentLanguage = "as";
    } else if (currentLanguage === "as") {
        currentLanguage = "hi";
    } else {
        currentLanguage = "en";
    }

    document.querySelector("header h1").textContent = translations[currentLanguage].title;
    document.getElementById("language-toggle").textContent = translations[currentLanguage].languageToggle;
    document.getElementById("market-prices").textContent = translations[currentLanguage].marketPrices;
    document.getElementById("gov-schemes").textContent = translations[currentLanguage].govSchemes;
    document.getElementById("weather-updates").textContent = translations[currentLanguage].weatherUpdates;
    document.getElementById("soil-data").textContent = translations[currentLanguage].soilData;
    document.getElementById("fpo-connection").textContent = translations[currentLanguage].fpoConnection;

    // Update scrollable card text
    const cards = document.querySelectorAll(".scrollable-cards .card");
    translations[currentLanguage].alerts.forEach((text, index) => {
        if (cards[index]) cards[index].textContent = text;
    });
}

// Event Listener for Language Toggle
document.getElementById("language-toggle").addEventListener("click", updateLanguage);

// **Button Actions**
document.getElementById("market-prices").addEventListener("click", function() {
    window.location.href = "market-prices.html"; // Replace with actual page URL
});

document.getElementById("gov-schemes").addEventListener("click", function() {
    window.location.href = "gov-schemes.html"; // Replace with actual page URL
});

document.getElementById("weather-updates").addEventListener("click", function() {
    window.location.href = "weather-updates.html"; // Replace with actual page URL
});

document.getElementById("soil-data").addEventListener("click", function() {
    window.location.href = "soil-data.html"; // Replace with actual page URL
});

document.getElementById("fpo-connection").addEventListener("click", function() {
    window.location.href = "fpo-connection.html"; // Replace with actual page URL
});

// **Initial Load**
updateLanguage();

