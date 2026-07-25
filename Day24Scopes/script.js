let score  =10;
function game() {
    let player = "Nitish";

    console.log("Inside game");
    console.log(score);
    console.log(player);   
}

game();

console.log("outside game :")
console.log(score)
console.log(player);


// predict ==> 
// Inside Game     ==> these will work fine
// 10     ==> these will work fine
// "Nitish"     ==> these will work fine

// Outside game     ==> these will work fine
// 10     ==> these will work fine
//  this will fail bcuz this player variable is a variable who was declared inside the function and so thats why it cannot be access outside the funciton


let score = 10;

function game() {
    let player = "Nitish";

    function levelOne() {
        console.log(score);
        console.log(player);
    }

    levelOne();
}

game();

// yes it will run 
//  it print 10 and "Nitish"
//  okay now lets see when browser gets started it will store score and 10 insde it and store the funciton game for later use  and browser will go inside the game and then it would store the player and "Nitish" inside it and then it will reach the levelOne and it would store that as well and then it will finally execute the game() and then will go inside the game and then execute the levelOne and then it will do the instruction store in it then it will first print the score which is 10 and this will reach the console.log(player) and it will first look for player value inside the levelOne by not finding the value of player insdie the levelOne it jump out by one level and then it will look inside the game will see that game has the player value so it will print the player value as well
//  so at last it will look like this 
//10
// "Nitish"
                                      
// *********************************


// Perfect. 😄 Let's finish Day 24.

// We'll do 3 interview questions and then 1 final challenge. If you can answer them, we'll mark Scope complete.


// ---

// Interview Question 1

let a = 10;

function test() {
    console.log(a);
}

test();

// Question: What is the output, and why?
//simple since a is a global scope it can be used anywhere and the print is 10

// ---

// Interview Question 2

function test() {
    let age = 25;
}

console.log(age);

// Question: What happens, and why?
//since age was assign inside a block scope it will not be access outside the scope and the result will be error

// ---

// Interview Question 3

if (true) {
    const city = "Delhi";
}

console.log(city);

// Question: What happens, and why?

//since city was assign inside a block scope it will not be access outside the scope and the result will be error


// ---

// ⭐ Final Challenge (combines everything)

// Don't run it. Read it slowly and trace it in your head.

let x = 10;  //this will become a global scope
function demo() {
    let y = 20;  //this is a blockscope
    if (true) {
        const z = 30; //this is a block scope
        console.log(x); //since x is a global scope it will be printed
        console.log(y); //since y is called inside a block scope it will be print 20
        console.log(z); //this also will print 30 bcuz it is still inside the block scope and can easily be access 
    }
    console.log(z); // this will throw a error bcuz this is being called outside the block scope
}
demo();
// Tell me:

// 1. Which console.log() statements work?
//

// 2. Which one throws an error?


// 3. Explain how JavaScript searches for each variable.



// Take your time. This is the final proof that you've understood Global Scope, Function Scope, Block Scope, var, let, and const together.