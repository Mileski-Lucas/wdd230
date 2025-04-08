const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-25.38&lon=-49.23&units=imperial&appid=c070b8838dc3b0b376d293d9ae396453';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const data = await response.json();
        console.log(data);
        displayResults(data);
        }   
    catch (error) 
    {
        console.error("Error fetching weather data:", error);
    }
}


function displayResults(data) {
    currentTemp.textContent = `${data.main.temp.toFixed(1)} ºF`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    console.log("Weather Description:", desc);
  
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
  }

apiFetch();
