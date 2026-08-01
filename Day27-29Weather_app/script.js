const cityInput = document.querySelector(".city-input");
const submitBtn = document.querySelector(".submit-btn");
const warning = document.querySelector(".warning")
const cityName = document.querySelector(".city-name");
const temprature = document.querySelector(".temprature");
const weatherCheck = document.querySelector(".weather");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed")
console.log("run");

function cityNameInput (){ 
    let userInput = cityInput.value.trim();

    if (userInput ==="") {
        warning.innerText = "Please enter the name"
    } else { 
        for (let i = 0; i < userInput.length; i++) {
           let  currentCharacter = userInput[i]; 
           if (currentCharacter >= "0" && currentCharacter <= "9") { 
                warning.innerText = "City Name is invalid"; 
                return;
            }  
        }
         let url = 'https://api.openweathermap.org/data/2.5/weather?q='+userInput+'&appid=3e02a9ecde5bba9c92576cd374488488&units=metric';
         fetch(url)
         .then(function (response){
            return response.json();
         }
        )
         .then(
            function (data) {
                displayWeather(data);
            }
         )
         .catch(
         function (error) {
            console.log(error);
            
             warning.innerText = "The Weather cannot load right now !"
            
         }
         

         )

         cityInput.value="";
    warning.innerText = "";
    }
   
}

function displayWeather(weather){
    cityName.innerText =  weather.name;
    temprature.innerText = weather.main.temp + "°C";
    humidity.innerText = weather.main.humidity + "%"; 
    windSpeed.innerText = weather.wind.speed+"m/s";
    weatherCheck.innerText = weather.weather[0].description;
}
 
submitBtn.addEventListener("click", cityNameInput)


