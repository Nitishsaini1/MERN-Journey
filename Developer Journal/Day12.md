user enter the task input and press add task
browser read the input 
it then perform the isntruction inside the add task button 
which are 
is it empty  
   yes        no 
ask again      go to next 
is it has spaces
yes            no 
ask again      go to next
store data in object 
then push data into the array variable
run the for loop 
from there retrieve data from array and  
show result in display 
 

Journal — Day 12 (15 July 2026)

⏰ Hours Studied

Started around 5:30 AM and had a very long, focused study session. Today felt mentally demanding, but I stayed with the problems instead of giving up.


---

🎯 Today's Goal

Continue building the To-Do List completely from scratch and understand every feature instead of copying code.


---

✅ What I Built

Add Task

Task validation

Store tasks as objects

Store objects in an array

Display tasks

Complete button

Delete button (logic nearly complete)



---

💡 My Biggest Magic Moments

1. Buttons can carry identity.

I finally understood that every Complete/Delete button remembers which task it belongs to by carrying its index.


---

2. Functions receive values, not variables.

Today I understood why this works:

completeTask(index)

The function does not receive i.

It receives the value that was passed.

That cleared up a lot of confusion.


---

3. Arrays and objects are different.

I realized:

database is the array.

database[index] is one object.


Because of that:

Arrays own methods like push() and splice().

Objects own properties like title and status.



---

4. Memory comes first.

One of the biggest lessons today:

Changing memory does not change the webpage.

The correct order is:

Memory changes

↓

Read memory

↓

Display again

↓

Browser updates


---

5. splice() finally made sense.

I didn't memorize it.

I understood it.

First number

↓

Where should I start?

Second number

↓

How many items should I remove?

Now it feels logical instead of random syntax.


---

😅 What Confused Me Today

Why i was not defined.

Why database(index) was wrong.

Why database[index].splice() didn't work.

Why deleting changed memory but not the webpage.


Each confusion disappeared after thinking about who owns what and what the browser is doing.


---

😊 What I'm Proud Of

Today I noticed something different about myself.

Before answering, I stopped and thought instead of guessing.

I tried to understand the browser's reasoning before writing code.

I think that's becoming a habit now.


---

📈 My Progress Compared to Day 1

If Day 1 me saw today's project, I wouldn't have understood any of it.

Today I can think about:

Arrays

Objects

Loops

Function parameters

Event handling

Memory

Rendering

Debugging


I'm still learning, but I can clearly see the difference between Day 1 and Day 12.

---

🌟 Message to Future Me

If you're reading this after getting your first developer job...

Remember today.

Today wasn't about learning splice().

It was about realizing that every JavaScript method exists to solve a problem.

And today I also realized something else:

The more projects I build from memory, the deeper my understanding becomes.

I don't need to memorize everything.

I need to keep building.


---

Today's Confidence: 9.5/10

I can genuinely see myself improving. Not because I know more syntax, but because I'm starting to think like a programmer before I type code.
 