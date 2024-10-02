async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e0c41980936238a7e2e81a6e9b5d4825';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weather-info');
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = 'City not found. Please try again.';
        return;
    }
    
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherInfoDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}