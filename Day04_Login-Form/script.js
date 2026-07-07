const userName = document.querySelector(".username-input");
const password = document.querySelector(".password-input");
const logIn = document.querySelector(".login");
const response = document.querySelector(".response");


logIn.addEventListener("click" , function(){
    if( userName.value == ""){
        //condition one
        response.textContent = "Please enter a username";
        userName.value = "";
    }else{
        //condition two
         if( userName.value.length < 5 ||  userName.value.length > 10)        {
          response.textContent = "Please enter a valid username";
        userName.value = "";
    }else{
            //condition three
         if(userName.value.includes(" ")) {
          response.textContent = "Please enter a valid username";     
    } else{
            //condition four
            if( password.value == "" ){
        response.textContent = "Please enter a password";
        password.value = "";
    }else{ 
        //condition five
        if( password.value.length < 10 ||  password.value.length > 20)        {
          response.textContent = "Please enter a valid password";
        password.value = "";
        }else{
            //condition six
             if(password.value.includes(" ")) {
          response.textContent = "Please enter a valid password";
        password.value = "";       
        } else{ 
            response.textContent = "Welcome";
            
        }}}  
        } }}
})

