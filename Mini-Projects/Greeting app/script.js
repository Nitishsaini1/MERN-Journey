const button = document.querySelector(".submit-btn")
const response = document.querySelector(".response");
const nameInput = document.querySelector(".name-input");

button.addEventListener("click", function(){
    if(nameInput.value == ""){
       response.textContent = "Please Enter a name" 
       nameInput.value ="";
    }else {
        
        response.textContent = "Hello " + nameInput.value
        nameInput.value ="";
    }
})

const agebutton = document.querySelector(".submitage-btn")
const ageResponse = document.querySelector(".responseage");
const ageInput = document.querySelector(".age-input");

agebutton.addEventListener("click", function(){
    if(ageInput.value == ""){
ageResponse.textContent = "Please Enter a Age" 
       ageInput.value ="";
    }else {
        if(ageInput.value <=0){
            ageResponse.textContent = "Please Enter a Valid Age" 
       ageInput.value ="";
        }else{
            if(ageInput.value >= 18){
                ageResponse.textContent = "You can Vote" 
       ageInput.value ="";
            }else{
                ageResponse.textContent = "You cannot vote" 
       ageInput.value ="";
            }
        }
        
    }
})