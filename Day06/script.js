//line1 - js will store greet as a variable name and then it will store whatever the value comes inside greet
//line2 - it will not sore that console.log(..) inside that variable name value inside that function 
//like this greet -> function(){con...}
//line3 - now it will see greet being stored inside another variable name so it will be like store this inside the another 
//line4 - now it will see another with () so its first thought will i know another lets see what another is holding so now when open another box it already has a greet name box inside so now it will try to open that too when open greet box it will see a function() who has a printable console who has Hello so it will look back again at another and will see that another has () this too it matches the condition of being able to execute the function so it execute the function


//funciton greet(){..}  -> greet() i understand this has to be in this for [greet()]to work 
//let greet = function (){...} -> greet() where as this can stay in greet form can can still work and so with that it can becomes a variable name which can also be store in a other variable name 


//function greet() {
//    console.log("Hello");
//}
//
//function execute(fn) {
//    fn();
//}
//
//execute(greet);

//line 1-  it will start with first line it store greet() for later use when somecall and whatever the content it is keeping
//line 2- it will now see a function name who has fn => parameter what do they do -> they take what ever argument will come to them 
//line 3- it will now read fn(); and will only think is fn() a function name who has ever been store in my memory but will remember that fn is actually a function parameter aren't this is contradictating how i can  execute something who is already has been assigned as a parameter 
//line 4- it will now see execute who is a function in itself and is also containing two different paraameter at line 4 which are greet and fn and also greet hasnt been written as greet() so i dont think it can actually can work and as for why we wrote greet() as greet bcuz it inside a execute box that is => () and since it is a function too it execute as well

//button.addEventListener("click", greet)


const numberInput = document.querySelector(".number-input");
const button = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const showNumber = document.querySelector(".show-number");
const response = document.querySelector(".response");
const attempt = document.querySelector(".attempt");
const secretNumber = Math.floor(Math.random()*10)+1;


//numberInput.addEventListener(KeyboardEvent.enter, function () {
//    if (numberInput.value == "") {
//        response.textContent = "Please enter a number";
//    } else {
//        
//    }
//    
//})

let scoreAttempt = 0; 

showNumber.addEventListener("click", function(){
    response.textContent = "Number is " + secretNumber;
})

//numberInput.addEventListener("keydown", function (event) {
//  //  console.log(event.key);
//   if (numberInput.value =="" || event.key == "Enter") {
//       response.textContent  = "Please enter a number";
//   } else if (numberInput.value < secretNumber) {
//                       response.textContent = "Too Low";
//                       scoreAttempt = scoreAttempt++;
//                    } else if (numberInput.value > secretNumber) {
//                        response.textContent = "Too High";
//                        scoreAttempt = scoreAttempt++;
//                    } else {
//                        response.textContent = "Correct and you took " + scoreAttempt + "Your secret number is " + secretNumber; 
//               
//   } 
//    
//})
button.addEventListener("click", function (event) {
  //  console.log(event.key);
   if (numberInput.value ==""  ) {
       response.textContent  = "Please enter a number";
   } else if (numberInput.value < secretNumber) {
                       response.textContent = "Too Low";
                       scoreAttempt = scoreAttempt+1;
                    } else if (numberInput.value > secretNumber) {
                        response.textContent = "Too High";
                        scoreAttempt = scoreAttempt+1;
                    } else {
                        response.textContent = "Correct and you took " + scoreAttempt + " attempt. Your secret number is " + secretNumber; 
                        scoreAttempt = scoreAttempt+1;
               
   } 
    
})