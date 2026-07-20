---

📅 Day Journal

Today's Goal

Start designing the Search feature for the To-Do application before writing any code.


---

What I accomplished

Designed the overall Search feature without writing code.

Identified that Search needs its own state to remember what the user typed.

Decided that the search function should:

Read the user's input.

Update the search state.

Trigger renderTasks().


Recognized that renderTasks() owns the responsibility of deciding which tasks should be displayed.

Thought through how Search should coexist with the existing Pending/Complete filters.

Wrote the complete browser execution algorithm before implementation.

Discovered an important flaw in my initial idea of checking exact title equality.

Refined the algorithm to think in terms of whether a task's title contains the user's search text instead of being exactly equal.



---

Biggest lesson today

Today reinforced something much bigger than Search.

I realized that if I ever forget JavaScript syntax, I can still rebuild the feature because I now think in this order:

Problem
↓
Algorithm
↓
Responsibilities
↓
State
↓
Browser Execution
↓
Code

Syntax is only the final step.


---

Problems I discovered

I initially assumed Search should compare the full title using equality.

While designing the algorithm, I realized users may search for only part of a title (like "Learn" or "React"), which means the rendering logic needs to answer a different question than simple equality.



---

Tomorrow's Goal

Explore the JavaScript string method needed for Search.

Implement the Search feature while keeping responsibilities separated.

Continue following the workflow:

Problem

Algorithm

State

Browser Thinking

Code




---

Problem 
Design Search for the to do app 
search bar should work in this way like when a title get enter in it, it should take that title and give it to render and let render know that you need to draw the card who has this title to them 

step 2 
what new state do i need?
so we're going to need first of all a input and button to send the information to the function who will later trigger render , now comes what state do need lets see when i click on search button it should then trigger the function who is holding that button and then that function will recive that input and temporarily we need to store that input somewhere so that we can do the matching , yes we need this new state who will hold our title temporary to make the matching decision
we can name it this 
let temporaryTitle = "";

which function owns the updating that state
hmm searchBar (our going to be the name for new function who will make certain decision later on we'll decide that later) should own the state bcuz he will 
receive the input and hold that input into our new state[temporaryTitle] and will run renderTasks to let it draw the card

should renderTasks() change?
i don't think right now it should change at all it can quite good since no one is currently getting in any ifelse conditions right now (dont know for future)
it should only include new decision to making the draw card for searchbar we'll come here later on

should loop run() change?
again no so far i havent seen the need to change this guy

should the search box call renderTasks() directly?
i think it has hold the input temporarily after that it can call renderTask{when i say it should call i meant to this guy who own the function searchBar i dont know to what search box youre calling}

how should search work together with pending?complete filters?
okay now comes the tricky part lets put scenerios now
1st user enter a title in search box and then click on pending now comes the important part, the currentFilter should now only show pending tasks and not draw the complete task and same vice versa for complete
and i cant think of other scenerios right now

step-3 
our algo

browser waits
↓
user enter the title in search bar and then click search
↓
search button now trigger searchBar() 
↓
now searchbar will first check if it is empty ask again if not do next 
↓
now searchBar() should hold that title in the new state temporaryTitle 
↓
searchBar() will run render
↓
render will reach ifelse there it will reach to our that if point where we have define something this if temporaryTitle == database[i].title draw it , if not skip
↓
it draw possible task and then it wait
↓
our display would probably have the all possible task who match the title (ohh here comes the main question how will it search through our title what if someone only wrote a alphabet like "K" now so far i have been thinking that render would be able to loop over title and find the possible title but this changes a lot thing now i think responsibilty has shifted from function searchBar to render to make it decide who should appear or not after a through investigation now now all my theory are like being fall apart but ill keep that for later bcuz we're going to use a method here dont know which one  but we'll sure )
↓
after drawingthe possible task render will rest
↓
browser wait
↓
user click on pending/complete now those filter will run and render the task who has pending
{dont know if they have any problem or not}

step -4 

comesthe code
//we'll do this after our investigation

[ hint ]
===> what question should rendertasks ask before drawing a task?

lets see how our ui looks like

Tasks = input  //enter the task from here
Warning : //warning
Add Task //button
Tasks : 1 //counter
Display
All Tasks | Pending Tasks | Complete Tasks  //filter for status
[enter the title]   //search bar 

1 . Learn React
Status : Pending
[ Complete ]🗑Edit  

2 . learn js
Status : Pending
[ Complete ]🗑Edit

3 . learn node
Status : Pending
[ Complete ]🗑Edit

4 . study react
Status : Pending
[ Complete ]🗑Edit

*********************

===> what question should rendertasks ask before drawing a task?
      i think it should ask something like this is that title who search bar send is matching the index 1 yes draw it if no skip it same for every index
      because so far we have understand that render only draw task based on information he receive so if title who send doesnt match the tasks title it wont draw it.

