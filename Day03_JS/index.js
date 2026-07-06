let name = "nitish";
let age = 25;
console.log(age);

console.log("Hello")
console.log(name);
console.log("Welcome");


//// Greeting App 

const button = document.querySelector(".submit-btn");
const nameInput = document.querySelector(".name-input")
const response = document.querySelector(".response")

button.addEventListener("click" , function(){
    if( nameInput.value === ""){
         response.textContent = "Please write a name"
    }else{

        response.textContent = "Hello " + nameInput.value;
        nameInput.value = " ";
    }
})

//// Voting Eligibility Checker


const ageInput = document.querySelector(".age-input");
const button2 = document.querySelector(".submit-btn2");
const ageResponse= document.querySelector(".age-response");

 

button2.addEventListener("click", function(){
    if(ageInput.value == ""){
        ageResponse.textContent = "Please Enter a age ";
        ageInput.value = "";
    } else { 
        
        if(ageInput.value  <= 0  ){
            ageResponse.textContent = "Please Enter a valid age ";
            ageInput.value = "";
        }else{
            if(ageInput.value >= 18 ){

                ageResponse.textContent = "You can Vote";
                ageInput.value = "";
            }else{
            ageResponse.textContent = "You cannot vote";
            ageInput.value = "";
            }
        } 
    }
    
})



const plusOne = document.querySelector(".plus-one") 
const minusOne = document.querySelector(".minus-one") 
const resultFinal = document.querySelector(".result") 

let resultFinalx = 0; 

plusOne.addEventListener("click" , function(){
    resultFinal.textContent = (resultFinalx=resultFinalx + 1);
})
minusOne.addEventListener("click" , function(){
    resultFinal.textContent =  (resultFinalx=resultFinalx - 1);
})

let one = add;

function add(a,b){
   return a+b;
}

