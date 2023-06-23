/*---------- FETCH ----------*/
// select HTML elements in the document
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const tempDesc = document.querySelector("#temp-desc");
let windSpeed; // for windchill calculation

//Weather URL
const code = "cb662272e8fd9de9cc13a7ddd6b91cb1";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Lima&units=metric&appid=${code}`;

//Fetch
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)} ºC`;
  windSpeed = weatherData.wind.speed;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;
  const capitalizedDesc = desc.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  tempDesc.textContent = capitalizedDesc;
}

apiFetch();

/*---------- WINDCHILL CALCULATIONS ----------*/

function calculateWindChillCelsius(temperature, windSpeed) {
  let windChill;
  if (temperature <= 10 && windSpeed > 4.8) {
    windChill =
      13.12 +
      0.6215 * temperature -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temperature * Math.pow(windSpeed, 0.16);
    document.querySelector("#windchill").innerHTML = `${windChill.toFixed(
      2
    )} ºC`;
  } else {
    document.querySelector("#windchill").innerHTML = "N/A";
  }
}

calculateWindChillCelsius(currentTemp, windSpeed);
