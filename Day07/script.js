const numOne = document.querySelector(".numOne");
const numTwo = document.querySelector(".numTwo");
const minusbtn = document.querySelector(".minus");
const plusbtn = document.querySelector(".plus");
const multiplybtn = document.querySelector(".multiply");
const divisionbtn = document.querySelector(".division");
const result = document.querySelector(".result");

function plus() {
  let second = Number(numTwo.value);
  let first = Number(numOne.value);

  if (numOne.value == "" || numTwo.value == "") {
    result.textContent = "Please Enter both number";
  } else {
    result.textContent = "Your answer is " + (first + second);
  }
}
plusbtn.addEventListener("click", plus);

function minus() {
  if (numOne.value == "" && numTwo.value == "") {
    result.textContent = "Please Enter Both Number";
  } else if (numOne.value == "") {
    result.textContent = "Please Enter a Number one";
  } else if (numTwo.value == "") {
    result.textContent = "Please Enter a Number Two";
  } else {
    result.textContent = "Your answer is " + (numOne.value - numTwo.value);
  }
}
minusbtn.addEventListener("click", minus);

function multiply() {
    if (numOne.value == "" && numTwo.value == "") {
        result.textContent = "Please enter both number";        
    } else if (numOne.value == "") {
        result.textContent = "Please Enter First Number";
    } else if (numTwo.value == "") {
        result.textContent = "Please Enter Second Number";
    } else { 
        result.textContent = "Your answer is " + (numOne.value * numTwo.value);        
    } 
}
multiplybtn.addEventListener("click" , multiply);

function divide() {
    if (numOne.value=="" && numTwo.value == "") {
        result.textContent = "Please Enter Both Number";
    } else if (numOne.value == "") {
        result.textContent = "Please Enter First Number";
    } else if (numTwo.value == "") {
        result.textContent = "Please Enter Second Number";
    } else {
        result.textContent = "Your answer is " + (numOne.value / numTwo.value);        
        console.log(numOne.value, numTwo.value, result.textContent);  
    } 
}
divisionbtn.addEventListener("click" , divide);