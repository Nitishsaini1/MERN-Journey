const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector(".login");
const response = document.querySelector(".response");

button.addEventListener("click" , function(){
        console.log("Button clicked");
        if (username.value == "") {
            console.log("Button clicked 2");
            response.textContent = "Please Enter a user name";
                 username.value = "";                
                } else {
                 console.log("Button clicked 3");
                            if (username.value.length < 5 || username.value.length > 10) {
                                response.textContent = "Please Enter a user name who is between 5 and 10";
                                username.value = "";                                
                            } else {
                                if (username.value.includes(" ")) {
                                    response.textContent = "Please Enter a User name who don't have space"
                                } else {
                                    if (password.value == "") {
                                        response.textContent = "Please Enter a Password";
                                        password.value = "";                                        
                                    } else { 
                                        if (password.value.length < 10 || password.value.length > 20) {
                                             response.textContent = "Please Enter a Password who is between 10 and 20";
                                             password.value = "";
                                        } else {
                                            if (password.value.includes(" ")) {
                                                response.textContent = "Please Enter a Password who dont have space";                                                
                                            } else {
                                                response.textContent = "Welcome-"
                                            }
                                            
                                        }                                        
                                    }
                                    
                                }                                
                            }
                
             }

});



const name = document.querySelector(".name");
const greetMe = document.querySelector(".button-greet");
const response2 = document.querySelector(".response-greet");


greetMe.addEventListener("click" , function(){
           if (name.value == "") {
            response2.textContent = "Please Enter a Valid name";
            name.value = "";            
           } else {response2.textContent = "Hello " + name.value;
            
           }

})