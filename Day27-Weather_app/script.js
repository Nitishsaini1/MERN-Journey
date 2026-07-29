const cityInput = document.querySelector(".city-input");
const submitBtn = document.querySelector(".submit-btn");
const warning = document.querySelector(".warning")
const cityName = document.querySelector(".city-name");
const temprature = document.querySelector(".temprature");
const weather = document.querySelector(".weather");
const humidity = document.querySelector(".humidity");

function cityNameInput (){ 
    let userInput = cityInput.value;

    if (userInput.trim()=="") {
        warning.innerText = "Please enter the name"
    } else {
        for (let i = 0; i < userInput.length; i++) {
           let  currentCharacter = userInput[i]; 
           console.log(currentCharacter);
           if (currentCharacter >= "0" && currentCharacter <= "9") { 
                warning.innerText = "City Name is invalid";
                console.log(currentCharacter);
                
                return;
            } else {
                
            }
            
            
        }
         cityInput.value="";
    warning.innerText = "";
    }
   
}



submitBtn.addEventListener("click", cityNameInput) 