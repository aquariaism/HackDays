let language = "english";

const translations = {
    assamese: {
        title: "শস্যেল",
        subtitle: "বিকল্পসমূহ পছন্দ কৰক",
        buttons: ["বিষয়ঃ FPO", "মূল্য তালিকা", "চৰকাৰী আঁচনি তালিকা", "বতৰৰ পূৰ্বানুমান", "শস্য পৰিকল্পনা", "জৰুৰীকালীন সহায়"]
    },
    english: {
        title: "Farmer's Hub",
        subtitle: "Choose from the below options",
        buttons: ["About FPOs", "Price Listings", "Government Scheme Listings", "Weather Forecast", "Crop Planning", "Emergency Help"]
    },
    hindi: {
        title: "शस्याल",
        subtitle: "विकल्पों में से चुनें",
        buttons: ["एफपीओ के बारे में", "मूल्य सूची", "सरकारी योजना सूची", "मौसम पूर्वानुमान", "फसल योजना", "आपातकालीन सहायता"]
    }
};

function toggleLanguage() {
    if (language === "english") {
        language = "assamese";
    } else if (language === "assamese") {
        language = "hindi";
    } else {
        language = "english";
    }
    updateContent();
}

function updateContent() {
    document.getElementById("app-title").innerText = translations[language].title;
    document.getElementById("subtitle").innerText = translations[language].subtitle;
    const buttons = document.querySelectorAll(".button-container button");
    buttons.forEach((btn, index) => {
        btn.innerText = translations[language].buttons[index];
    });
}

function handleFPO() {
    window.location.href = "fpo.html";
}

function handlePriceListing() {
    window.location.href = "price-listing.html";
}

function handleSchemeListing() {
    window.location.href = "scheme-listing.html";
}

function handleWeatherForecast() {
    window.location.href = "weather-forecast.html";
}

function handleCropPlanning() {
    window.location.href = "crop-planning.html";
}

function handleEmergencyHelp() {
    window.location.href = "emergency-help.html";
}

