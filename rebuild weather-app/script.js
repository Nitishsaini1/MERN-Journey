const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const warning = document.querySelector(".warning")
const cityName = document.querySelector(".city-name");
const cityWeather = document.querySelector(".city-weather");
const temperature =  document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

function cityNameInput(){

    let userInput = searchInput.value.trim();
    if (userInput == "") {
        warning.textContent = "Please enter the city name"
    } else {
        for (let i = 0; i < userInput.length; i++) {
            const currentElement = userInput[i];
            if (currentElement >= "0" && currentElement <= "9") {
                warning.textContent = "Please enter the valid name"
                return;
            }
        }
        let url =  'https://api.openweathermap.org/data/2.5/weather?q='+userInput+'&appid=3e02a9ecde5bba9c92576cd374488488&units=metric';
        fetch(url)
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (data){
                displayWeather(data);
            }
        )
        .catch(
            function (error){
                warning.textContent = "The server is busy";
                cityName.textContent = "City"

            }
        )
        warning.textContent = ""
    }


}

function displayWeather(weather) {
    cityName.textContent = weather.name;
    cityWeather.textContent = weather.weather[0].description;
    temperature.textContent = weather.main.temp + "°C";

    
    humidity.innerText = weather.main.humidity + "%"; 
    windSpeed.innerText = weather.wind.speed+"m/s";
}

searchBtn.addEventListener("click", cityNameInput);
