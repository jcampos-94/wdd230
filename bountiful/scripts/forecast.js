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
    (data.list).forEach(day => {
        temperature = day.main.temp.toFixed(0);
        weather = day.weather[0].description;
        humidity = day.main.humidity.toFixed(0);

        console.log(`${temperature}ºF`);
        console.log(weather);
        console.log(`${humidity}%`);
    });
}
  
apiFetch();