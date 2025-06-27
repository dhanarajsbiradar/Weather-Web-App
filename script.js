let countryName = document.getElementById("countryName");
let stateName = document.getElementById("stateName");
let cityName = document.getElementById("cityName");
let inputBox = document.getElementById("inputBox");
let humudity = document.getElementById("humudity");
let windSpeed = document.getElementById("windSpeed");
let temperature = document.getElementById("temperature");
let logo = document.getElementById("logo");
let status = document.getElementById("status");

// const apiKey = "071da122c50d4495978202807252606";

const check = async(event) => {
    event.preventDefault();

    const city = inputBox.value.trim();
    if (!city) {
        alert("Enter the city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=071da122c50d4495978202807252606&q=${city}`
        );
        // if (!response.ok) throw new Error("City not found or API error");

        const data = await response.json();
        console.log(data);

        // Update DOM with weather info
        cityName.innerText = data.location.name;
        stateName.innerText = data.location.region;
        countryName.innerText = data.location.country;
        temperature.innerText = data.current.temp_c + "°C";
        humudity.innerText = data.current.humidity + "%";
        windSpeed.innerText = data.current.wind_kph + " km/h";
        status.innerText = data.current.condition.text;
        logo.src = "https:" + data.current.condition.icon;
    } catch (error) {
        console.error("Error:", error);
        alert("City not found or an error occurred.");
    }
};