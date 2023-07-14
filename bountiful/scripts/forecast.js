// select HTML elements in the document
const humidityHmtl = document.querySelector('#humidity');
const weatherIcon = document.querySelector("#weather-icon");
const tempDesc = document.querySelector("#temp-desc");
const currentSpeed = document.querySelector("#speed");
let temperature; // for windchill calculation
let windSpeed; // for windchill calculation

//Weather URL
const code = "cb662272e8fd9de9cc13a7ddd6b91cb1";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=4&appid=${code}`;

//Fetch
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.log(error);
    }
}

function displayResults(data) {
    humidity = data.list[0].main.humidity.toFixed(0);
    console.log(`${humidity}%`);
    humidityHmtl.innerHTML = `Humidity: ${humidity}%`;

    (data.list).forEach(day => {
        temperature = day.main.temp.toFixed(0);
        weather = day.weather[0].description;

        console.log(`${temperature}ºF`);
        console.log(weather);
    });
}
  
apiFetch();