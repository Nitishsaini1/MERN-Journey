browser start 
      ↓
User enters city
      ↓
Clicks Search
      ↓
Read input
      ↓
check if its empty or not
check if it has any extra space or not      +
      ↓      
check weather this input has any number or not
      ↓
      ↓
now fetch will happen where the URl will form and to make sure the url is right we need to before hand enter the correct url with right litreral template like this ("https://jsonplaceholder.typicode.com/users/" + ${here we will define the way to the particular})
      ↓
fetch will return a promise
      ↓  
when promise becomes fullfill it will find then if not go for catch
      ↓
now since the promise is fullfill the .then() will run and response will recieve the response object contain our response body which will essentially contain our data but that all is still wrapped inside the .json packet and we need to unpack it
      ↓                
for that we do this response.json() ==> this way we can open response body into something like a object which we will store in data by using .then()
      ↓
and we will use a function to get access to our data outside the block scope
      ↓
function displayUser(user){....} this way user would be able to act just like data and can get access to response body and from there we can assign various ways 
      ↓     
so that we can show our data on the screen
      ↓
Display weather