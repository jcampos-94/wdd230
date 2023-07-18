// Select HTML elements in the document
const humidityHmtl = document.querySelector("#humidity");

// Weather URL
const code = "cb662272e8fd9de9cc13a7ddd6b91cb1";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=4&appid=${code}`;

// Fetch
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
  // Display humidity
  const humidity = data.list[0].main.humidity.toFixed(0);
  humidityHmtl.innerHTML = `Humidity: ${humidity}%`;

  data.list.forEach((day, index) => {
    // Establish required data
    const temperature = day.main.temp.toFixed(0);
    let weather = day.weather[0].description;
    weather = weather.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    const icon = day.weather[0].icon;

    // Update content inside the div
    const dayId = `day${index + 1}`;
    const divElement = document.getElementById(dayId);

    divElement.querySelector('.temperature').innerHTML = `${temperature}ºF`;

    const weatherIcon = divElement.querySelector('.weatherIcon');
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    weatherIcon.alt = `${weather}`;

    divElement.querySelector('.description').innerHTML = `${weather}`;
  });
}

apiFetch();
