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
    // console.log(clickedButtonText);
    currentValue = currentValue + clickedButtonText;
    displayElement.textContent = leftValue + currentValue;
    // console.log(eventObject.target.innerText);
    console.log("currentValue"+currentValue);
    console.log("leftValue"+leftValue);
 }
function operator(eventObject){ 
         const clickedButtonText = eventObject.target.innerText;
         leftValue = currentValue;
         operatorValue= clickedButtonText;
         currentValue = "";
        //  displayElement.textContent = leftValue;
         displayElement.textContent = leftValue + operatorValue+ currentValue; //i like this ver more but it has its flaw
           console.log("currentValue"+currentValue);
    console.log("leftValue"+leftValue);
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
    } else{
        leftValue = leftValue / currentValue 
        
    } 
    currentValue = "";
    operatorValue="";
    displayElement.textContent = leftValue; 
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

// Number button
// Read the clicked digit.
// Update currentValue.
// Update the display.
// Test that typing 7 → 5 → 9 shows 759.
// Display
// Every time currentValue changes, the display should reflect it.
// Get this working before touching operators.
// Operator buttons
// Store currentValue into leftValue.
// Store the operator.
// Clear currentValue.
// Update the display appropriately.

//**********************8 */
// Equals (=)
// Use leftValue, operatorValue, and currentValue.
// Perform the calculation.
// Store the result back into leftValue.
// Clear the other state variables.
// Display the result.
//*************************************** */
// Reset (C)
// Clear all state variables.
// Reset the display.