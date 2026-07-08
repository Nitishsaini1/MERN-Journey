//function sayHello(){
//console.log("Hello");
//}
function sayGoodMorning(){
    console.log("Good Morning.")
} 
//sayHello();
//sayHello();
sayGoodMorning();
//sayHello(); 

//bcuz we can only call sayHello() ans we're going to provide the sayHello a label and we want only that label to change everytime we call that function 

//a function name is something which we provide to label our function that this funciton is going to be called this and a parameter is the  variable that is going to inside that label  

function sayHello(name){
    console.log("Hello " + name);
}
sayHello("First");


function sayhello(name){
    console.log("Hello "+name)
}

sayhello("Nitish");
sayhello("Rahul");
console.log();

function greet(greeting,name) {
    console.log(greeting+ " "+name);   
}

greet("Good Morning" ,"Nitish")
greet("Welcome", "Rahul")
greet("Hi", "ALice")



function greeT(greeting,name) {
    console.log(greeting+ " "+name);   
}
let message = "Welcome";
let user = "nitish";
greeT( message ,user)

//here this is happening first we had assign param to greet say greeting and name but later we assign new variable called message and user and then we just replace those params with new one so the function still know my greet has two params who work like this so they should work like that even if they are now assign to different names so it still will print Welcome Nitish

//difference between parameter and argument
//parameter are those which we assign to function name and wheras params are those which we assign as value to the function name to make it execute , so far i can only think this was 
//Parameters are the variables we define in the function definition. Arguments are the values we pass to the function when we call it.
// i think when we write only one aregument we should receive only aregument with a space because that what it should do i dont think it will throw an error because we dont provide second argument it should just skip that argument if it isnt there 
//function greet(greeting, name) {
  //  console.log(greeting);
   // console.log(name);
//}
//greet("Hi");
//hi
//undefined
// i think i understand why because if it doesnt receive second argument it will say i didnt get second argument but i need to give something for that second param too so here is your undefined bcuz it doesnt have a definite value 

//function greet(greeting, name) {
//console.log(greeting);
// console.log(name);
// }
// greet("Hi", "Nitish", "Rahul");
//hmm we have 2 param but we're showing them in two different console and are giving three argument , let think how javascript will react to this , 1st it read that it has afunction who has a name = greet then it will read second line there it will read ohh i have console here but it has only one param and this was given to greet first param lets move to 2nd line ohh same here and what do i do with this ofcourse same i log them in console because they are still the param of the greet and then move to next line of code it will confuse here that greet has 3 argument and they acc to our past greet param we can only pass 2 first argument what should i do with 3rd argument i should just mark it as a unknown or give a error

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

// step-1 function add(a, b) {
// step-2 return a + b;
//}

//step-3 let result = add(10, 20);

//step-4 console.log(result);
//what is happeing in those steps lets go one by one
//step-1 we write a function who has a name and then assign them 2 param a and b
//step-2 we return these values to me which are being add as in a + b 
//step-3 now we say result you need to run this functionname who add two values a and b and then store these values in your self and now here come the main part javascript will read it in this i need to do add(a,b) then return those values to variable who is asking them after doing the addition
//step-4 it will then log the result which will come as 30 , but to be honest i still dont understand how that return is working i have just guess all thing so far not that i understand them
//here result is asking , function can you use your add with these two values and give me the answer and if the function has console it wont be able to give bcoz it dont posse the thing through which it can send back the data but if it has return will be able to send that data right
// 
// i think that bcoz if we break down what we write we have this console.log(add(10,20)) and now this expression is asking for a add of 2 value and then it will give that what function is design to do then comes the return will give back data to console or will it reject but i think it will just give back data bcoz return is not seeing who accepting he will just give back data and whoever receive can use them how they want so the answer will be 30  
//
function add(a, b) {
    return a + b;
}

let total = add(5, 3) + add(10, 20);

console.log(total);

//What does the first add() become?
//add will enter the function and will find its functionname and from there it will apply its params it has to the statement  and then it will take that value whatever it received and will come back why come back bcoz it has seen return and return has allowed to take that value back 
//What does the second add() become? 
//second add will also enter the function and will find its functionname and from there it will apply its params it has to the statement   and then it will take that value whatever it received and will come back why come back bcoz it has seen return and return has allowed to take that value back 
//What does the whole line become after both functions return?        
// now the whole line become total = 8  + 30  = 38              
//It enters the function, assigns the arguments to the parameters, executes the function body, reaches return, and takes the returned value back."
//return sends the calculated value back to the place that called the function


//function greet(name) {
//    return "Hello " + name;
//}
//
//let message = greet("Nitish");
//
//console.log(message);

console.log("Challenges");

function multiply(a,b ) {
    return a * b;
}
console.log(multiply(5,4));

function fullName(firstName, lastName) {
    return firstName +" "+ lastName;
 }
console.log(fullName("Nitish", "Kumar"));

function isAdult(age) {
    return age >= 18
}

console.log(isAdult(17));
console.log(isAdult(25));

function isUsernameValid(username) {
    return username.length > 5 && username.length < 10;
    //      16 > 5 || 16 < 10 it should give false but in console im getting  true 
    //      3 > 5 ||  3 < 10   one second how does it determine what it need to give first is it true or false 
    //      7 > 5  || 7 < 10   here im getting true too so if any condition turns to be true it will give true not flase??
}

console.log(isUsernameValid("veryveryverylong") );
console.log(isUsernameValid("min"));
console.log(isUsernameValid("perfect"));

//
//console.log(false || false || true);
//console.log(false || false || false);
//console.log(true || false || false);
//
//console.log(true && true && true);
//console.log(true && false && true);
//console.log(false && false && false);


function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(
    multiply(add(2, 3), 4)
);


//js would read both function then store them in memory to use later when they are bring called , now at console.log it says multiply(add(2,3),4); lets break this structure 
//
////let age = 24;
//let age = 25;
//console.log(age);
//
//
//function greet(name) { //it will function then will see the greet and it know store that greet when it comes to be called
//    console.log("Hello " + name); //it now will print this when ask to execute the function with name param 
//}
//let result = greet("Nitish");  //so when ask to store value of greet() function inside the result it will most probably through error saying or wait a can we assign a function to a variable so far i havent learn that i think it wont work at all  
//console.log(result); // this will also show a error
//
//function greet() {  //it will function then will see the greet and it know store that greet when it comes to be called
//    console.log(name);// it know will need to print the console who contain name variable but can it actually print something hasnt even been assign yet i think no if javascript is inside the greet building so it will see a console who is holding name variable then it will try to look for but it cant see the varible bcuz it was never assigned
//}
//
//greet(); //so this will most probably through error of saying not a proper assign variable
//
//
//let age = 24;//js know it need to assign that will become age --> 24
//
//function showAge() { //it will now enter showAge()building there it sees a new variable and it will now assign that variable that will be age --> 30
//    let age = 30;
//}
//
//showAge();//here it will give undefined why bcuz this function doesnt have any instruction inside when go inside of showAge you can only see a variable being assign nothing else 
//
//console.log(age); //this will print 24
//
//
//const age = 24; //it will assign age as 24
//age = 25;// here it will through error saying you cant change a const variable
//console.log(age); // print will be 24 since 25 cant be assign to a const variable
//
//function add(a, b) {//js will enter the add building there it see a function declaration add(a,b) and then it sees only a+b, so it know i need to add a+b what to do with value which comes after addition bcuz none told it after addition where it need to go 
//    a + b;
//}
//
//let result = add(10, 20);//so there are two hypothesis either it show a error or a undefined why bcuz when asked to go to the function add(a,b) building after doing the addition for the sake of thinking it still need to return or print but it wont comeback bcuz no one told js what to do after addition
//console.log(result);//so this also might can be a  error or a undefined
