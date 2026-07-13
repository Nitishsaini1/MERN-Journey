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



Question 4 — Reading Before Creating the Object

let movieName = "Interstellar";
let rating = 9.5;

let movie = {
    title: movieName,
    rating: rating
};

console.log(movie.title);
 it first store both title and rating and their respective values 
 now it will store movie and title and rating inside and then it will go to movieName and then bring its value to title and same for rating 
 it now read console and then will to go movie variable find title and bring the value of title

---

Question 5 — Updating a Property

let movie = {
    title: "Interstellar",
    rating: 9.5,
    year: 2014,
    watch: false
};

movie.watch = true;

console.log(movie.watch);  
it will store the movie and title,rating,year and watch with their respective value 
it will reach movie.watch = true; means
go to movie variable and go inside the watch and then replace the false with true 
 and then print the movie.watch as true 


---

Question 6 — Creating a Movie (Exactly Like Your Project)

let title = "The Batman";
let rating = 8;
let year = 2022;
let watch = true;

let movie = {
    title: title,
    rating: rating,
    year: year,
    watch: watch
};

console.log(movie.year);

Focus on:Data flow.Values moving into the object.Why the object exists.
it now store the title,rating,year and watch 
then it will store the movie and then evaluate the object and then will bring the value of variable to their rexpective variable 
then it will print the movie.year 

---

Question 7 — First Step Toward the Movie Library

let movies = [];

let movie = {
    title: "Interstellar",
    rating: 9.5
};

No more code.

I want you to answer only this question:

After these two lines execute, what does memory look like?

Draw it exactly like you've been drawing memory.

Don't worry about adding the movie to the array yet.-->  okay if i dont need to worry about these 

movies
      |


movie
      |
      |---title:"Interstaller",
      |---rating:9.5;

--- 




//************************
I love this idea.

This will teach you debugging much faster than me fixing your code.

Here are **5 debugging challenges**. They get slightly harder each time.

**Rule:** Don't run them immediately. First predict:

1. Browser thinking
2. Memory
3. Bug
4. Fix

---

# 🐞 Bug 1 — Object Property

```javascript
let movie = {
    title: "Interstellar",
    rating: 9.5
};

console.log(movie.name);
```

Questions:

* What prints?
refrence error
* Why?
because when js would go to variable movie and will see for name it wont find a value with that name
* How would you fix it?
let movie = {
    title: "Interstellar",
    rating: 9.5
};

console.log(movie.title);

---

# 🐞 Bug 2 — Array vs Object

```javascript
let movie = {
    title: "Interstellar",
    rating: 9.5
};

for (let i = 0; i < movie.length; i++) {
    console.log(movie.title);
}
```

Questions:

* Does the loop run?
no
* Why?
 this will not run as we're running a loop on object as loop work well with array
* What is JavaScript thinking?
1st it will store the movie variable and title and rating inside it 
2nd it will try to run the loop  but as soon it reach movie.length it will see that movie is a object who doesnt have index to it 


---

# 🐞 Bug 3 — Push

```javascript
let movies = [];

let movie = {
    title: "Interstellar"
};

movies.push();

console.log(movies.length);
```

Questions:

* What is the length? 
its length is 0 because there is only empty string nothing else.
* Why?

* What should be inside `push()`?
movie
after this length will be 1


---

# 🐞 Bug 4 — Display

```javascript
let movies = [
    {
        title: "Interstellar"
    }
];

for (let i = 0; i < movies.length; i++) {
    console.log(movies.title);
}
```

Questions:

* Why doesn't this work?
because there is no [i] in movies.title
* Which step in Browser Thinking fails?
it failes to get the index of movies

---

# 🐞 Bug 5 — Validation

```javascript
let movieName = "      ";

if (movieName == "") {
    console.log("Invalid");
} else {
    console.log("Valid");
}
```

Questions:

* What prints?
valid
* Why?
bcuz  this "      " and "" are tho different things
* How would you make the validation behave the way you wanted in your Movie Library?

```javascript
let movieName = "      ";

if (movieName.trim() == "")
//why use == "" here?
{
    console.log("Invalid");
} else if (movieName == "") {
    console.log("Invalid");
} else {
    console.log("Valid");
}
```
---

## ⭐ Bonus Challenge (Closest to your project)
before
```javascript
let movies = [];

let movie = {
    title: "Interstellar"
};

movies.push(movie);

for (let i = 0; i < movies.length; i++) {
    console.log(movies.title);
}
```
after
```javascript
let movies = [];

let movie = {
    title: "Interstellar"
};

movies.push(movie);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}
```

This one is almost exactly the mistake people make in Movie Library projects.

--- 

Today you asked:
"How do you recognize bugs?"
Whenever you're stuck, don't immediately search for the answer.
Ask yourself these five questions:
What is in memory right now?
What line is JavaScript executing?
What does this expression evaluate to?
Does this line read memory or change memory?
What should memory and the screen look like after this line?
If you make those five questions a habit, you'll become much better at debugging.