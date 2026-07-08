 const numberInput = document.querySelector(".number-input");
 const button = document.querySelector(".submit");
 const response = document.querySelector(".response");
 const attempt = document.querySelector(".attempt");
 const showNumber =document.querySelector(".show-number");
 
 const reset = document.querySelector(".reset");
 let secretNumber = (Math.floor(Math.random()*10)+1);
 
 let scoreAttempt = 0;

showNumber.addEventListener("click" , function(){
    response.textContent = "Secret Number is " + secretNumber;
    attempt.textContent = "Score is " + scoreAttempt;
}) 
 

button.addEventListener("click", function () {
   
    if (numberInput.value == "") {
        response.textContent = "Please Enter a Number";        
    } else if (numberInput.value < secretNumber) {
               response.textContent = "Too Low";
               scoreAttempt = scoreAttempt + 1;
    } else if (numberInput.value > secretNumber) {
               response.textContent = "Too High";
               scoreAttempt = scoreAttempt + 1;
    } else { 
      scoreAttempt = scoreAttempt + 1;
      button.disabled = true;
      response.textContent= "You Guessed it correct in"+ " " + scoreAttempt +" " + "Attempt.";
     // response.textContent= "Your secret number is " + secretNumber;
      attempt.textContent = "Attempt Number is " + scoreAttempt;
}
}) 

reset.addEventListener("click", function(){
      scoreAttempt=0;
      numberInput.value = "";
      button.disabled = false;
      response.textContent = "";
      attempt.textContent = "";
      secretNumber = (Math.floor(Math.random()*10)+1);
})

//❌ Bug 1 — Reset doesn't create a new game
//Look at Reset:
//numberInput.value = "";
//button.disabled = false;
//response.textContent = "";
//attempt.textContent = "";
//Imagine this.
//Secret number:
//8
//Player wins.
//Reset.
//Secret number is still...
//8
//A new game should choose a new random number.
//❌ Bug 2 — Attempts
//You do:
//scoreAttempt = scoreAttempt + 1;
//before checking if the input is empty.
//Imagine:
//Player keeps clicking Submit with an empty box.
//Attempts become:
//1
//2
//3
//4
//Should empty clicks count as attempts?
//I don't think so.
//❌ Bug 3 — Reset
//You reset:
//scoreAttempt = 0;
//only after winning.
//But what if I press Reset before winning?
//The variable still contains its previous value.
//That should also become:
//scoreAttempt = 0;
//inside Reset