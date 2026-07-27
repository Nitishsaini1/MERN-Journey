// function greet() {
//   console.log("Hello");
// }

// function execute(fn) {
//   fn();
// }

// execute(greet);

// // what is stored in fn? it holding the fn() who can execute the greet function 
// // What happens when execute(greet) is called?  it will first execute the == function execute and inside which is greet and then it will see that fn() is there who can execute the greet and will call the 
// // Why does fn() print "Hello"? the fn() here represent the execution state which means the execute gets call this guy will get execute itself and that why when greet is passed inside the execute we see hello in console bcuz inside execute there is fn() which litrelly mean execute this when call which is something like this 
// // execute(greet) ===> execute(fn())
// // so we can say this execute(greet());
// // and again we or js will do this that it will now show the hello in the console

// // const promise = new Promise((resolve, reject) => {
  
// // })


// const promise = new Promise((apple, reject) => {  //js will form a variable promise then store the newly formed Promise inside it and then it will have both parameter as resolve and reject [resolve when the promise is fulfilled and reject is for when a promise does not get fulfilled ]
//     apple("Hello"); //here it will know that promise had been fullfilled and then it will store the result in the resolve if that is the case 
// });

// promise.work(function (message) {  //here after knowing that resolve has been successfull then it will run promise.then andthat way the functiong gets execute and then the console will have a print that is "Hello"
//     console.log(message);
// });




// const promise = new Promise((apple, reject) => { 
   
//           reject("Fail");
       
// });

// promise.then(function (message) {   
//     console.log(message);
// });
 
// promise.catch(function (message) {   
//     console.log(message);
// });

// fetch("https://jsonplaceholder.typicode.com/users/1") //here fetch() will return a promise and when fullfilled it will run the first .then() and if failed it will run .catch()
//     .then((response) => {  //here reponse receive the response object 
//        return response.json()  //here this return another promise and when the Promise returned by response.json() is fullfilled , its resolved values is passed to next .then()

//     })
//       .then((data) => {  //here after that prmoise gets fullfiled it will now print the data
//       console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//     //haha this will not work

//     //













    // fetch("https://jsonplaceholder.typicode.com/users/1")
    // .then((response) => {
    //     console.log(response);

    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // });
    // .catch((error) => {
    //     console.log(error);
    // });

  

// What is the first console.log(response) showing? 
//it will be showing the response object
// What is the second console.log(data) showing?
// this will be showing the actual data like id email address and other stuff
// Why are they different?
// the reason they are different bcuz the first one shows response object which is a response body which contain the object inside and it cannot be open directly it need to specifically handle that work so that the object can bring out and store in another variable to show it and data is the actual object data which shows what it is actually holding it 


//{
//     id: 1,
//     name: "Leanne Graham", //this is the data.name
//     username: "Bret",  //this is the data.username
//     email: "leanne@example.com", //this is data.email
//     phone: "1-770-736-8031",  //this is data.phone
//     website: "hildegard.org" //this is data.website
 // }


//  {
//     id: 1,
//     name: "Leanne Graham",
//     address: {  //this is data.address but i dont think it will simply show both city and zipcode it might show object as both will be inside it
//         city: "Gwenborough",  //this can be write as data.address.city and i know that dot means go inside it and we can say this go to data go inside the address and then find the city thereand bring that data to me and same can go for the zipcode
//         zipcode: "92998"
//     }
// }

// const shiftButton = document.querySelector(".shift");


const heading = document.querySelector("#name");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const website = document.querySelector(".website");
const city = document.querySelector(".city"); 
const userIdValue = document.querySelector(".user-id");
const searchBtn = document.querySelector(".search-btn"); 
function userIdInput() {
    
    // heading.textContent = ""
    const userId =  Number(userIdValue.value);
    if  (  userId  < 1 || userId  > 10) {
        heading.textContent = "Please enter a User Id between 1 and 10" 
    } else if (!Number.isInteger(userId )) { 
        
        heading.textContent = "Please enter a whole number"
    } else { 
    
  fetch("https://jsonplaceholder.typicode.com/users/" + userId)
.then((response) => {
    return response.json();
})
.then((data) => { 
        displayUser(data)
         
    })
    .catch((error) => {
        heading.textContent = "Unable to load User"
        console.log(error);
    });
     
    } 
    
}
function displayUser(user){ 
    heading.textContent =  user.name;
    email.textContent =  user.email;
    phone.textContent =  user.phone;
    website.textContent =  user.website;
    city.textContent =  user.address.city;
}
searchBtn.addEventListener("click", userIdInput); 