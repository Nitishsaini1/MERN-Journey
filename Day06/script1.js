//challenge 1

//function hello() {
//    console.log("Hello");
//}
//
//let x = hello;
//
//x();

//predict - print hello
//explain - hello will store function inside it , then x is storing insdie the hello, and when x gets execute it will run hello function which will print hello.
//run - Hello

//challenge 2

//function hello() {
//    console.log("Hello");
//}
//
//let x = hello;
//let y = x;
// 
//y();
//
//predict - Hello
//explain - here y x and hello all are pointing to hello function who store the print hello and when y get execute it will show hello 
//run - Hello
//ques1 - There is only one function who hold that function is hello but there are many variable like x y and hello 
//ques2 - y point to function(){console.log("Hello")}
//ques3 - output is Hello

//challenge 3

//function hello( ) {
//    console.log("Hello");
//}
//
//let x = hello;
// hello = 100;
//x();

//q1 - hello point to 100
//q2 - x point to function (){..} , ques from my side can i say hello here is working as a callback??
//q3 - Print Hello

//challenge 4 
 
//function execute(fn) {
//    fn();    
//}
//
//function hello () {
//    console.log("Hello");
//}
//
//let x = hello;
//
//execute(x);
//explanation here execute hold the function (fn){fn()}  this funciton mean when being called it will run this function whatever value it receive that way when hello become a function who is also storing a function who can print hello will be assign to x and after that x will be pointing to print hello;
//q1 - a executable function
//output print => Hello im 100% sure for this,   hello point to consolehello and x point to console hello and when x is being placed in a executable function who can execute that value so that when  the hello will get print 

//challenge 5 

//function execute(fn) {
//    fn();
//    
//}
//
//execute(function  ( ) {
//    console.log("Javascript");
//});

//q1- no this function doesnt have a name
//q2 - what is stored inside fn? hmm good question we know execute hold a function and for my sake of understanding lets say fn() => is bomb so what happen when a bomb gets trigger it blast, good we have one point lets move to another function here we can see a execute who is holding a anonymous function and lets say this is a pin to that bomb so when execute gets run it trigger bomd to make it release its pin and then we will be able to see [Javascript in the console]
//q3 - javascript {what do i call this fn() who is inside the execute }

//challenge 6

//function hello ( ) {
//    console.log("Hello");
//}
//
//function bye( ) {
//    console.log("Bye");
//}
//
//let x = hello ;
//x = bye;
//
//x();

//q1 - nope it never appear so the case of being dissappear is out of box what actually happend is that when x assign hello it orginally is pointing to the function which is hello storing and the reason why is it never appear bcuz we it was always at its same place which is hello => (){} <= x this is what happened
//q2 - when x gets reassign to bye it just simply change its pointing from hello function to bye function 
//q3 -  the output shall be Bye, yes i was also sure about this 

//challenge 7 

//function  execute( fn) {
//    fn();
//}
//execute(10);

//so first js will reach line 1 and will see function will instantly know i need to store this so that when it being called later i can use this 
//second it see a execute a function name now it will store the function inside that fun name 
//third when js reach execute(10) it now will recall that it also a fun who can execute so it now will try to see what execute is holding and there it will see that execute has a argument who is a number but when it has saved that execute in its memory it was a string so it cannot execute something who is not a string 
// thats why it will show that error

//boss challenge - bosses are always hard to beat but they give another level of confidence when you can beat them 
//function hello(){
//    console.log("Hello");
//}
//
//function execute(fn){
//    let another = fn;
//    another();
//}
//
//execute(hello);
//


