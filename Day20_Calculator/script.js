const numberButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const resetButton  = document.querySelectorAll(".reset");
const equalButton = document.querySelectorAll(".equal");
const displayElement = document.querySelector(".display");

let leftValue = "";
let operatorValue = "";
let rightValue = "";
let currentValue = "";
function number(eventObject){
const clickedButtonText = eventObject.target.innerText; 
    currentValue = currentValue + clickedButtonText;
    displayElement.textContent = leftValue +operatorValue+ currentValue; 
}
function operator(eventObject){ 
         const clickedButtonText = eventObject.target.innerText;
         
        //  operatorValue= clickedButtonText;
         if (clickedButtonText == clickedButtonText ) {
            
         } else if (condition) {
            
         } else {
             
            leftValue = currentValue;
            operatorValue=clickedButtonText;
         currentValue = "";
         }
          m
         displayElement.textContent = leftValue + operatorValue+ currentValue;  
}
function reset(eventObject){ 
const clickedButtonText = eventObject.target.innerText;
displayElement.textContent = 0;
leftValue="";
currentValue = "";
operatorValue="";
}
function equalTo(eventObject){ 
    const clickedButtonText = eventObject.target.innerText;
     leftValue =Number(leftValue);
     currentValue = Number(currentValue);
    if(operatorValue == "+") {
        leftValue =leftValue +currentValue 
    } else if(operatorValue == "-") {
        leftValue =leftValue  - currentValue 
    } else if(operatorValue == "*") {
        leftValue =leftValue * currentValue 
    } else if (operatorValue == "/") {
        leftValue = leftValue / currentValue 
    } else if (operatorValue == "") {
        
        displayElement.textContent = 0;
    } else {
        
    } 
    currentValue = "";
    operatorValue="";
    displayElement.textContent = leftValue; 
      console.log("currentValue"+currentValue);
    console.log("leftValue"+leftValue);
    console.log(operatorValue + "Operator");
    
}
console.log("Run");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", number );
}
for (let i = 0; i < operatorButton.length; i++) { 
operatorButton[i].addEventListener("click", operator );
}
for (let i = 0; i < resetButton.length; i++) {
resetButton[i].addEventListener("click", reset );
}
for (let i = 0; i < equalButton.length; i++) {
    equalButton[i].addEventListener("click", equalTo);
}
 