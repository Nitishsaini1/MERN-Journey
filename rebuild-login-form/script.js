const userName = document.querySelector(".username")
const password = document.querySelector(".password")
const button = document.querySelector(".signin")
const response = document.querySelector(".response")


button.addEventListener("click" , function(){
    //console.log("["+userName.value+"]")
    //conditon 1
   if(userName.value == ""){
    response.textContent = "Please Enter a username it cant be empty";
    userName.value = "";
   }else{
       //condition 2
           if(userName.value.length < 5 || userName.value.length > 10  ){
    response.textContent = "Please Enter a valid username its either short or long";
    userName.value = "";
}else{
    //condition 3
    if(userName.value.includes (" ")){
        response.textContent = "Please Enter a valid username you have a space";
    }else{
        //condition 4
        if(password.value == ""){
            //console.log("["+password.value+"]")
            response.textContent = "Please Enter a password it cant be empty";
            password.value = "";
   }else{
     
       //condition 5
     if(password.value.length < 10 || password.value.length > 20  ){
    response.textContent = "Please Enter a valid password its either short or long";
    password.value = "";
}else{
    //condition 6
                      if(password.value.includes (" ")){
        response.textContent = "Please Enter a valid password  you have a space";
    }else{
        response.textContent = "Welcome";


    }


                                    }
                                }
                            }
                        }
                    }
                }
            
        )