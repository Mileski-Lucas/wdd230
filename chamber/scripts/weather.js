const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const weatherInfo = document.getElementById('weather-info');
const forecastContainer = document.getElementById('forecast-container');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.38&lon=-49.23&units=imperial&appid=c070b8838dc3b0b376d293d9ae396453';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-25.38&lon=-49.23&units=imperial&appid=c070b8838dc3b0b376d293d9ae396453';

async function fetchWeather() {
  try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(weatherUrl),
      fetch(forecastUrl)
    ]);
    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();
    displayWeather(weatherData);
    displayForecast(forecastData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function capitalizeWords(text) {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"],
        v = n % 100;
  return n + (s[(v-20) % 10] || s[v] || s[0]);
}

function displayWeather(data) {
  const temperature = Math.round(data.main.temp);
  const weatherEvents = capitalizeWords(data.weather[0].description);


  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  weatherInfo.innerHTML = `
  <div class="weather-card">
  <p><strong>Current Temperature:</strong> ${temperature}ºF</p>
    <img src="${iconUrl}" alt="${weatherEvents}">
    <p><strong>Weather:</strong> ${weatherEvents}</p>
  </div>
  `;
}

function displayForecast(data) {
  const dailyData = {};

  // Group data by day
  data.list.forEach(item => {
    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    if (!dailyData[day] && date.getHours() === 12) {
      dailyData[day] = item;
    }
  });

  const forecastCards = Object.values(dailyData)
    .slice(0, 3)
    .map(forecast => {
      const date = new Date(forecast.dt_txt);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const day = date.getDate();
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      const formattedDate = `${dayName}, ${getOrdinal(day)} ${month}`;

      const temp = Math.round(forecast.main.temp);
      const icon = forecast.weather[0].icon;
      const desc = capitalizeWords(forecast.weather[0].description);
      const maxTemp = Math.round(forecast.main.temp_max);
      const minTemp = Math.round(forecast.main.temp_min);

      return `
        <div class="forecast-card">
          <p><strong>${formattedDate}</strong></p>
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
          <p><strong>Weather:</strong> ${desc}</p>
          <p><strong>${maxTemp}ºF</strong> / ${minTemp}ºF</p>
        </div>
      `;
    }).join('');

  forecastContainer.innerHTML = `<div class="forecast-wrapper">${forecastCards}</div>`;
}

fetchWeather();





function displayForecast(data) {
    const dailyData = {};
  
    // Group data by day
    data.list.forEach(item => {
      const date = new Date(item.dt_txt);
      const day = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  
      if (!dailyData[day] && date.getHours() === 12) {
        dailyData[day] = item;
      }
    });
  
    const forecastCards = Object.values(dailyData)
      .slice(0, 3)
      .map(forecast => {
        const date = new Date(forecast.dt_txt);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        const formattedDate = `${dayName}, ${getOrdinal(day)} ${month}`;
  
        const temp = Math.round(forecast.main.temp);
        const icon = forecast.weather[0].icon;
        const desc = capitalizeWords(forecast.weather[0].description);
        const maxTemp = Math.round(forecast.main.temp_max);
        const minTemp = Math.round(forecast.main.temp_min);
  
        return `
          <div class="forecast-card">
            <p><strong>${formattedDate}</strong></p>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
            <p><strong>Weather:</strong> ${desc}</p>
            <p><strong>${maxTemp}ºF</strong> / ${minTemp}ºF</p>
          </div>
        `;
      }).join('');
  
    forecastContainer.innerHTML = `<div class="forecast-wrapper">${forecastCards}</div>`;
}


fetchWeather();

