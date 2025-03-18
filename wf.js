document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const weatherData = {
        "Assam": {
            temperature: 27,
            condition: "Sunny",
            humidity: 50,
            windSpeed: 5
        },
        "Delhi": {
            temperature: 30,
            condition: "Clear",
            humidity: 40,
            windSpeed: 3
        },
        "Bangalore": {
            temperature: 28,
            condition: "Cloudy",
            humidity: 60,
            windSpeed: 7
        },
        "Mumbai": {
            temperature: 30,
            condition: "Humid",
            humidity: 70,
            windSpeed: 4
        },
        "West Bengal": {
            temperature: 32,
            condition: "Rainy",
            humidity: 80,
            windSpeed: 6
        }
    };

    const weatherResult = document.getElementById('weatherResult');

    if (weatherData[location]) {
        const data = weatherData[location];
        weatherResult.innerHTML = `
            <h2>Weather in ${location}</h2>
            <p><strong>Temperature:</strong> ${data.temperature} °C</p>
            <p><strong>Condition:</strong> ${data.condition}</p>
            <p><strong>Humidity:</strong> ${data.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
        `;
    } else {
        weatherResult.innerHTML = `<p>Weather data for "${location}" not found.</p>`;
    }
});