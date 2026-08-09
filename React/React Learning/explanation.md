so to explain why i need a map() is simple I first need to show every user card on screen and for that i need something who give back the value i need but for loop cant return itself so i need a method who can give back every value and thats where the map came into picture thats why i had the map() to render the list of the UserCard components 
the reason why does each card need a key is it need remember the unique identity to each card so that it can render
------------------------
text is responsible for to track the input being written in real time and save that in the text by using setText and its initial value is empty string 

when type anything in the the react catch that new update with the help of setText and with each and every input written in the input field the every text gets append to the next of text 

e.target.value gives us the the text which we type in the input field

we use use text:text bcuz first text is only a property of the object and second text is the value which text variable provide why we dont use setText is bcuz we need current value in the text not the value who will be update 

text - this is actually the value who get stored in where you type anything in the input field 
newTodos - this is the task you get after click the add button as this guy help in making the new array 
todos - this is actually the list of task that will appear on screen

text = "Learn React";

what is the value of:

const newTodo = {
  id: 1,
  text: text //"Learn React"
};

q7 new todos contain a single object [{id:1,tact:"Learn React"}]

...todos we can say is simply the collection of todos array who help in coolecting the old array and adding new object of array to it without modifying the old array 

todos.push(newTodo); again why we dont use this is bcuz we dont wanna modify the existing array at all 

<!-- <button onClick={setTodos([...todos, newTodo]> -->
this line meant immediately execute this when app start thats why react to make things safe ,,im writing in middle to see if you read it or not or just skim through the things,,it does this when a render happen back to back a lot of time it stops it 

the other work bcuz that is a work and when click it trigger only then

q11 todos.map((todo) => {
  return todo.text;
})  here map is actually iterating over the todos array where it go to each index element where it is a object then it return what the return say here it says the todo.text 


return todo.tex this showed both in together bcuz it wasn't seprating them do to seprating them we need a block element tag 

the other solve problem bcuz its a tag who is seprating the task from each other when they are being shown on cscreen 
q14 when we returned too many <p> without a key react says it cant identify the many child from each other for to do that we need key what key does it makes every child unique to each other and having different id to them they can show on screen as seprate entity

q16 this happened bcuz since were not defined propely the react sees them as one not them as a seprate so when the top name was removed it simply moved the like to below 

react can easily identify from the child easily if they a key to them and it can help it make them a seprate entity 



i wanna add more to this round 7  and im writing mostly this from memory without looking from code 
browser start
↓
react react run the app function
↓
from there it it will look at function app then run it 
↓
it create two state one for text and other for todo and text initial value is "" and todo is []
↓
it will now create a newTodos object whose id is 1 and text property value is a empty string since that is the value of text is 
↓
now it will enter the return()
↓ 
there it will draw the html of input and button 
↓
it now now run the map function 
↓
the map fun will allow the react to render the todo on screen 
↓
since map can iterate over the array and can return the value that help in showing the todo on screen 
↓
now react wait
↓
User types
    ↓
the typed text gets noticed and then it immediately register 
    ↓
and store it in text
    ↓
Click Add
    ↓
it will trigger the onClick event that will let react know that todo need to be change the state from old to new one
    ↓
it will now took both old and new array and in such a way without modifying the old array it will add the another array new array to it 
    ↓
map()
    ↓
map will iterate over the todos array and will show the tasks one by one
    ↓
screen
