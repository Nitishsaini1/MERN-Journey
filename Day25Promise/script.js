function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);

// what is stored in fn? it holding the fn() who can execute the greet function 
// What happens when execute(greet) is called?  it will first execute the == function execute and inside which is greet and then it will see that fn() is there who can execute the greet and will call the 
// Why does fn() print "Hello"? the fn() here represent the execution state which means the execute gets call this guy will get execute itself and that why when greet is passed inside the execute we see hello in console bcuz inside execute there is fn() which litrelly mean execute this when call which is something like this 
// execute(greet) ===> execute(fn())
// so we can say this execute(greet());
// and again we or js will do this that it will now show the hello in the console

// const promise = new Promise((resolve, reject) => {
  
// })


const promise = new Promise((apple, reject) => {  //js will form a variable promise then store the newly formed Promise inside it and then it will have both parameter as resolve and reject [resolve when the promise is fulfilled and reject is for when a promise does not get fulfilled ]
    apple("Hello"); //here it will know that promise had been fullfilled and then it will store the result in the resolve if that is the case 
});

promise.work(function (message) {  //here after knowing that resolve has been successfull then it will run promise.then andthat way the functiong gets execute and then the console will have a print that is "Hello"
    console.log(message);
});




const promise = new Promise((apple, reject) => { 
   
          reject("Fail");
       
});

promise.then(function (message) {   
    console.log(message);
});
 
promise.catch(function (message) {   
    console.log(message);
});

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

    //haha this will not work