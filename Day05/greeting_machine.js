let  secretNumber = (Math.floor(Math.random()*10)+1);
const numberInput =document.querySelector(".number");
const button =document.querySelector(".submit");
const response =document.querySelector(".response");
const attempt = document.querySelector(".attempt");
const reset = document.querySelector(".reset");
let scoreAttempt = 0;

 

button.addEventListener("click", function () {
       if (numberInput.value == "") {
             response.textContent = "Please Enter a number.";
       } else if (secretNumber > numberInput.value) {
            response.textContent = "Too Low";
        } else  if (secretNumber < numberInput.value) {
                 response.textContent = "Too High";
            //till here the code is working fine
            } else {               
                    response.textContent = "Correct! You guessed it in " +scoreAttempt+" attempts.";
                    button.disabled = true;
                      scoreAttempt  = scoreAttempt + 1;
                        attempt.textContent = "Attempt " + scoreAttempt;
                  }       
})


reset.addEventListener("click", function(){

         numberInput.value = "";
         response.textContent = "";
         attempt.textContent = "";
         scoreAttempt=0;
         button.disabled = false;
})