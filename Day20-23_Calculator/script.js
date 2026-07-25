const numberButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
const resetButton  = document.querySelectorAll(".reset");
const equalButton = document.querySelectorAll(".equal");
const displayElement = document.querySelector(".display");

let leftValue = "";
let operatorValue = ""; 
let currentValue = "";
function number(eventObject){ 
const clickedButtonText = eventObject.target.innerText; 
    
    if(leftValue != "" && operatorValue == ""){
        leftValue = "";
        currentValue = currentValue + clickedButtonText;
    }else{
        currentValue = currentValue + clickedButtonText;
    }
    displayElement.textContent = leftValue +operatorValue+ currentValue; 
}
function operator(eventObject){  
         const clickedButtonText = eventObject.target.innerText;
         if (currentValue == "" && operatorValue != "") {
            operatorValue = clickedButtonText;
         } else if (currentValue != "" && operatorValue != "") {
            calculation();
            operatorValue = clickedButtonText;
         } else if (operatorValue == "" && currentValue != "") {
             leftValue = currentValue;
             operatorValue=clickedButtonText;
             currentValue = "";
         } else if (leftValue != "") { 
            operatorValue =clickedButtonText;
         } 
            if (operatorValue == "" && currentValue == "") {  return;    }   
         displayElement.textContent = leftValue + operatorValue+ currentValue;  
}

function calculation(){
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
    } else {
        
    } 
    operatorValue = "";
    currentValue ="";
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
    if (operatorValue == "" || leftValue == "" || currentValue == "") {
        
    } else {
        calculation();
        displayElement.textContent = leftValue;      
    }
} 
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
 