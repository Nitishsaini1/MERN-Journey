Imagine we're building an ATM
algo for that 
 
 1.insert a card
 2.atm read the card
 3.ask for pin
 4.user enter pin
 5.is the pin correct - yes   or      no 
                  continue      show"Incorrect pin"
                                ask again 
 6.user select withdraw
 7.enter amount 
 8.does the account have enough money 
   yes                   no 
   dispense cash         show'Insufficient balance'
 9.return card
 10.Finish 

*******

 algo for greeting app 
 1. user enter the input
 2. user press the greet
 3. check if the greet input is empty or not
     yes             no 
     ask again       send the input value to paragraph
 4. present value with paragraph 
 5. display the result  

 *****

 algo for voting eligibility

  1. user enter age
  2. user click "check eligibility"
  2. browser check if the age is 18 or not
        yes                        no
        move to voting section     cannot go ahead

*******

the brower will read that marks value 
it will then log the "Result"
it will then pick the value of marks and then compare with the condition 
i,e. is 45 greater or equal to than 33 then it got its answer
yes it is 
so go to if and it will proceed with console.log("Pass") => which will print the Pass 
and it will then move to next line there it will print Exam Finished 

*****

when we write this
const button = document.queryselector(".submit-btn")
here the whole html element is being stored here in variable

the browser thinks 
whole webpage - find element with class submitbtn - found - store the button element inside the variable "button"

****
 button.addeventlistener("click", functon ( ){

 })

 button - this contain the html element which we are doing our work
 add - this will add something to the html element
 event- this tells that what event need to happen
 listener - this helps in functioning that event
 click - this the event we talk about when this happen do that work
 funtion - this will determine what to do overall 

`` Button...
   'I want you to listen for a click'
   'when someone clicks you..'
   'Run the instructions inside the function'

****
scenerio 1 

the page load what appear in the console  button clicked , beacuse we just added a event listener to it and we added a function in there define what to do when that click happen and that what will the console will show button clicked

 no this will not happen 

 so youre saying the browser will first register the button when click for first time but wont show the console after 2nd time or more it will show the console but why havent we added our event in that sequence when clicked  execute the function 

 final challenge
 output 

 Start
 (It wont show clicked bcuz it will register the click for first time )
 END

*****

Mental Notes for js 

1. = means "Put something here / Put this value here"
 ex- let age = 25;
 browser think create box age and put 25 inside it 
 another example 
  respose.textcontent = "Hello Rahul";

  how browser behave 
  go to paragraph - replace its text - with hello rahul 

2.  . means 'go inside this thing'

this is the biggest one
imagine a house 

house 
   -door
   -window
   -kitchen

if i say house.kitchen i mean "go inside the house and find kitchen"

exactly the same happen in js
 nameInput.value  
 
 means 

 got to nameInput - go inside it - find its value 

3. () means "Do it"
  
    like 
     console.log("hello");

      log is a function 

      Functions are like machines 

      coffee machines - press button - coffee

      a function wait until you say  " ( ) "  which means run 


CHEAT SHEET

SYMBOL     READ IT AS          EXAMPLE
.          go inside           nameInput.value
=          Put/Replace         age = 23
()         Run/Execute         console.log()
{}         Instruction         if() {}
             to execute 

            


******

user enter naem and password 
browser first read name
then is it empty  
  yes                          no 
  please enter a name          move to next question i,e. 