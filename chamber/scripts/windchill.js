function calculateWindChillCelsius(temperature, windSpeed) {
    let windChill;
    if (temperature <= 10 && windSpeed > 4.8) {
        windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        document.querySelector("#windchill").innerHTML = `${windChill.toFixed(2)} ºC`;

    } else {
        document.querySelector("#windchill").innerHTML = "N/A";
    }
}

const stringTemperature = document.getElementById("celsius").innerHTML;
const temperature = parseFloat(stringTemperature);
console.log(temperature);

const stringWindSpeed = document.getElementById("speed").innerHTML;
const windSpeed = parseFloat(stringWindSpeed);

calculateWindChillCelsius(temperature, windSpeed)
