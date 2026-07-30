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
      ↓
 

 ******************************

fetch receive the city input and run the url 
       ↓
it return promise
↓
if that promise is fulfill it find .then() and if that promise is rejected it find catch and show error
↓
now when the promise is fullfilled it go to .then() and then that that then receive the response object by the response
↓
and that response object will have the response body inside it and now comes main part when we receive that response it will be in a json text when we cannot acces or read so for that we need to turn that json text to object for that we use .json() so that we can access our response body 
↓
and then it will also trigger the another promise for which we need the .then()
↓
and here that .then(data) will point to the response body through which we can display our content which we like 
↓
and by also making a displayWeather function outside and calling it inside the .then(data) we can access a block scope function outside like this 
displayWeather(data) by this way we can show what we want on screen 



==> Funciton are not block scoped in the way variable declared with `let` are

``
data is local to the .then(..) callback
you pass that data as an argument to displayweather
inside displayweather, that argument becomes its parameter
``



```
{
  "coord": {
    "lon": 77.2167,
    "lat": 28.6667
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 37,
    "feels_like": 41.62,
    "temp_min": 37,
    "temp_max": 37,
    "pressure": 998,
    "humidity": 41,
    "sea_level": 998,
    "grnd_level": 974
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.21,
    "deg": 120,
    "gust": 4.03
  },
  "clouds": {
    "all": 91
  },
  "dt": 1785394055,
  "sys": {
    "country": "IN",
    "sunrise": 1785370263,
    "sunset": 1785419035
  },
  "timezone": 19800,
  "id": 1273294,
  "name": "Delhi",
  "cod": 200
}

```