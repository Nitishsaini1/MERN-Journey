q1 - what is a function?
ans- a function is a resuable code of block who can be later called or used. this is something we call a textbook answer so you know textbook ans no one understand them so lets go a deeper level what do you think in plain english a function actually mean , it mean something who can do some work or extended part of something , what we can do with function we can actually gave it some instruction that these are the no of instruction which you need to hold them for now when i ask you , just do the work what those instruction are saying, and the trigger is this "()" before we dive there let me tell you beginner how will you calla function a 
say this function name(parameter){
    console.log("Hello");
}

now understand this here function represent something who is holding onto these instruction 
name is what we call a function name who will actually help us to call this function guy when we need 
( ) these hold the the parameter who will receive the value when we will call functionname , and these all help in execute the function immediately
{ }  these are the true mastermind who actually hold your instruction if dont write your isntruction properly what do you will disaster yes that will what happen so before writing a funciton always remember you dont mix something up 
so how do i call a funciton we write like this  name() then here name will trigger the function to do its work then js will see that name do also has the () which we know help us to execute a function so you know what will happen yes a disaster haha nope our code will work as long as we provide instruction in right order that all can i tell you about instruction 

q2 - what is function declaration and function expression?
ans - function declaration is something when we write a function with all its given usuage requirement properly like its name and if you want parameter too.
  now junior ask a question but both are same the funciton and function declaration
 hmm nice question why dont we simply call a function a function why complicate things with saying function declaration, so here is the you see a function can simply be write as funciton(){..} and we can call this a function but we cant call this a function declaration why good because this function doesnt have a name to it as i earlier told you we need a name to call a function if we dont have a name we cant call one just bcuz we write this () this can only provie the execution ability but the ability to find the function and execute it that what a funciton declaration is not quite that it is but yes we can say there is no harm bcuz that's what funciton declaration is doing we write a function and when we declare a name to that funciton it become a funciton declarration.

 now comes another interesting topic function expression earlier you ask why not write a simple function now that apply here we can write a simple function and store that function inside a function so like a variable holding onto a function and that function is also holding some set of instruction 
 any question , yes why declare them in a variable when we can just give a funciton a name and be done with it 
 good nice follow up so why we need a variable type function you see you this require a little bit deeper knowledge today be happy with what i have told you.

q3 - what is an anonymous function?
and so a function who doesnt have a name to it that what we call a anonymous function 
like funciton (){..} this is that we can call a anonymous function 

q4- what is a parameter?
ans - a parameter is something who receive a value 
ex - function add(a.b){console.log(a,b)};
     add(1,2) => 3 what do you think happen 
     this function has a name called add who is pointing to the console(..) who can do something right 
     now see this add(1,3) what do you think these are a function name who has a () who can run a function but what are those who are inside those bracket they are called arguments now just take them as it is ill soon tell you what those arenow focus on parameter so can we say that add(1,3) here 1 and 3 are value good now that we know 1,3 are value so what do we do when have a function name who has somevalue,??,  say with me we give those value to function who will tell its parameter to receive them and then put them in its place there then we can see that is happening to those value

q5 - what is an argument?
ans - so tell me what do you argument means in literal terms , something which is a counter part of something right , yup that argument here means it is something that complete a parameter, earlier we have learn that parameter are something who receive a value right and this argument is something who provide that value to the parameter i know it was something in which i confuse a lot of take it like this they are like a postion name not the real code itself,

let me show you  -  function name(_______){...} these ____ here means this position here is for parameter and they can be anything,
now so what is a argument this here =>  name(_____) these empty space here is argument you can literally can be anything you can pass any argument here like a value 

q6 - what is a callback function ?
ans  - a callback function is function who has been wrapped in a box and has been stored at a certain place with a tag it who also happen to have a power of teleportation , so when you need to use that function you can literally call that tag and that funciton will come to you and will run , so far thats what i have learn and since my master chatgpt never actually taught me this so i cant say more.

q7-
```
function name(parameter){
    console.log("Hello");
}
let x =  hello;
```
what is stored inside x?

so name is functionname who is pointing toward the  function who has store the console who can print the hello
and now since we have assign hello to x , now that x is point also to that function who is also being point by hello

q8- let y =x 
  How many functions exist now?
  Draw the arrows using words.

  there have always been a single function    

             x
             |  
   name -- {hello} ----y 
   it was never about who is holding the fuction it was always about who is pointing to which function.

q9 - hello = 100

ans -        x
             |  
   name -- {hello} ----y 
              || 
              100
here hello has been assign as 100 so now hello will become 100
             x
             |  
   name -- {100} ----y 

   why x also become 100 
   since we x was pointing to hello not to the function so when the value of hello gets change it doesnt mean x will change its direction it is still pointing to the function who has hello it desnt matter what value that fuction hold.

   q10 why this work execute(hello) not execute(10)
   bcuz a hello() can execute because it is a string but a 10() cant be execute as it is a number.

   q11 - console.log("5" - "2")
    
    lets learn what javascript can do with - + * / or not 
     - * / these are those operator who can work fine with any thing be it string or number because they dont have anyother role than this where as + doesnt work like that it seen only two thing wheather it is string or a number , if any of one them is a string join them if not add them 
     so here output will be 3

q12 - console.log("5" + "2");

ans here we know that when js sees any value as a string it will try to join them not them so they will become 52 so when will we get 7, yes we'll get 7 only when there is both number are numbers like (5 + 2 ) => 3 

q13 - ("5" * 2 + 1 )
      => (5 * 2 + 1)        
      => (10 + 1)        
      => (11)

      here what happen is when this "5" was a string so js sees it as string undernormal circumstance but in special cond it will convert its form from string to number why bcuz it need to multiply and you cannot do multiply of a number and a string so thats how it work , and when it convert that string to number that become a number so number + number we get 10 + 1 is 11

      q14-



function execute(fn) {
    fn();
}

function hello() {
    console.log("Hello");
}

execute(hello);


so here js sees this it will read its first line then will see a function who has a function name so first thought will be this is a function who has afunction name so lets store this when later this gets called illrun this now it can also see a parameter who has ()which can directly run,
now hello is pointing to a fucntion who print the hello 
when we run execute(hello)

it will see execute is function name who has a parameter and that parameter is holding the () so now that argument is the hello it will nowexecute the parameter from that function who has () after providing the value