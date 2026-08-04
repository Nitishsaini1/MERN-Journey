--------------------
```
+--------------------------------------+
|          Task Manager                |
|      Stay Organized Every Day        |
+--------------------------------------+

+--------------------------------------+
| [ Enter Task.......... ] [ Add ]     |
+--------------------------------------+

+--------------------------------------+
| All | Active | Completed             |
+--------------------------------------+

+--------------------------------------+
| ☐ Learn React          ✏️ 🗑         |
| ☑ Build Weather App    ✏️ 🗑         |
| ☐ Practice JS          ✏️ 🗑         |
+--------------------------------------+

Tasks Left : 2
```
--------------------
```
Features
Phase 1
✅ Add task
✅ Delete task
✅ Mark complete / toggle
✅ Show tasks
✅ Prevent empty tasks
Phase 2
✅ Active filter
✅ Completed filter
✅ All filter
Phase 3
✅ Task counter
✅ Local Storage (save tasks after refresh)
```
-----------------
I would like to use this it provide more detail for me to do a lot of work easily and be more precise about it
let taskCard = {

    id:1,
    text:"Learn React",
    completed:false
}

-----------
```
browser start
⬇
user types the text in the input and press submit or if improve enter
⬇
browser reac the input then start the renderTask funtion
⬇
check is it empty
⬇
check is it has space or not 
⬇
store the task inside a variable temporary with a id and status
⬇
empty the display 
⬇
then push the task into the database 

⬇
run the for loop
⬇
now it show the a mark a task and a delete
⬇
save the data in localstorage
⬇
browser wait
⬇
user click on delete
⬇
now browser will get the index from the delete button which we have already assigned by rendertask
⬇
now itwill run deleteTask() 
⬇
now it will first take that index and then do splice on the task splice(index,1) this is that we will use which mean index=> what the index to use on and 1 for how many you want to delete 
⬇
then the renderTask() will run
⬇
save the data in localstorage
⬇
browser waits
⬇
when user click on square box or mark complete it will take the index from there and then run run toggleTask
⬇
toggleTask() will capture the index then will do two thing make task if pending do complete and vise versa and other is it will make task if unmark do mark and if mark do unmark
⬇
then run renderTask and after that it will save task in local storage
⬇
here renderTask will empty the display then run the for loop who will have the condition check who matches acc to toggle and then he will display the new database
⬇
browser waits
⬇
when user click on edit  
⬇
it will capture the index for edit task then run the editTask()
⬇
it will then run editTask() here it will simply run the renderTask()again and since it has the index of the particular task it will be easy to find who to show for edit 
⬇
renderTask() will then empty the display 
⬇
then run for loop
⬇
check whose index match the available index then show that task who need to show for edit 
⬇
with new display for that particular task
⬇
it will show the editable input & a save button
⬇
when user enter the new task input he will press save
⬇
from there saveTask() will run 
⬇
saveTask() will run and save the new data of task into the database task 
⬇
run renderTask() and save datainto the localstorage as well
⬇
renderTask() will run 
⬇
empty the display 
⬇
display again the task 
⬇
browser waits
⬇
user click on one of the filter [complete], [pending],[all] when click one of these it they will trigger the filterTask() 
⬇
filterTask() will show the task acc to the button who was clicked 
⬇
then it will match with it and then run renderTask() and here no data will save in local storage
⬇
here renderTask() will do check who was clicked and then it will show that task acc to clicked button 
⬇
for filter complete show complete task , for pending show pending task and for all filter show all task 
⬇
browser waits
⬇
```
 
when user click delete i already have something this onclick="deleteTask(${element.id})
it should trigger deleteTask(id)
from there it will run instruction inside the {}
//since we decide to go with id lets carry that thing so we will going with id
i need to know where it is in the array 
okay slice understand this splice(index,how many you want to remove say 1 or more whatever)

what splice actually want , so far what  i understand splice need to thing a index and how many delete from there what  could it actually understand
 what can ? replace a item??
No splice does not need a object bcuz when i use find it will return a object which will eventually save inside a differnet variable but this task is actually pointing to the that array index we just using it as a refrence to make some changing bvuz if both are seprate entities i wont be able to changes inside the database as well
find return a object but what can i do with a object i can only make some changes to it, to possibly delete a object inside a array i would mostly need a index postion

i just did a little research on mdn and i found findIndex() return the index of certain something


user click delete
browser will take the id and then run deleteTask()
from there it will get the index with the help of id
then delete that particular object
rendertask()
 
       when click on edit it should show new ui for that particular task. So that user can do some edit.
       the reason for passing the id is very simple that we can easily find the index of the task and we wont we need to save any extra variable outside the function like -1 , bcuz id are unique to every task itself 
       what ineed first index to render the ui for that particular task 
       i think i take on the challenge for the toggle input task save these three will show when click on edit 
       anything related to ui live inside the render and render will be responsible for showing the editTask
       okay lets see having a seprate property just for this is not right and it doesnt feel good and next is yes we need a seprate variable to let render know that it need to exit the edit mode or not enter the edit mode at all like editingIndex = -1; bcuz this doesnt exist in the array

       ofcourse unless the user click save it should stay in edit mode but what if user did click on edit and somehwere on another task he press toggle so should my edit mode gets remove or it should stay same i think that for later 
       if editingId is 7 and element.id is 1 so ofcourse show the normal ui the edit ui shoulb only be visible when there both id's gets a match
       the render task will decide when i put a ifelse there saying compare editingid with element.id and if both match show the edit ui 
       when press save the editingId become -1 once again bcuz we dont wanna any next task to become the edit ui it still need to work normally
       well ill just add a another ifelse on input in the edit ui where it will check that if input is empty or directly press the save here one thing i just remember when we had done something similar like this 
       <input type"text" value="database[i].title"> from here we were able to display the title inside the input and if press directly on the save it save the old input and that way we safely exit the edit ui 
       does cancel really a need like save work for both ways bcuz cancel and save feels very much similar to me bcuz both will be doing the same thing inside the code like what save do when user press save it will capture the id once again then bring the id to saveTask(id) from there it will first check for input actual value if its empty show saying task is empty and just save directly the value like do database[i].task = input.value these are for refrence dont take them personally
       then run renderTask()
   
```
browser waits 
⬇
user click edit
⬇
editTask will carry the id then execute the editTask(id)
⬇
and do this editingId = id
⬇
here ill pull the index of the id by using findIndex
⬇
then run renderTask()
⬇
render task will clear display then  run for loop 
⬇
in loop it will check for editingId if it matched one show edit ui for that one else show the normal ui
⬇
when editingId match element.id show edit ui
⬇
show this a toggle, a edit input who has old task inside it and a save button
⬇
browser waits
⬇
user click
⬇
browser will read the input then run saveTask(id)
⬇
here saveTask will capture the input then it will check if its empty or not 
⬇
if empty show toast saying pls enter the task then exit the function
⬇ {i see why you were saying for a cancel button it will immeditaly make exit from the edit ui with whatever there is inside the task input}
if not empty save the task whatever there is  and make editingId =-1 
⬇
also save the new input in the task as well
⬇
run renderTask() since editingId is -1 it will show the data according to database
⬇
browser waits
```

 

<h5>TASK COUNTER</h5>
 
<p> Number of tasks that are not completed
anything which affect the completed state 
renderTask() should handle the ui for task counter
count unfinished tasks when the loop is running
get completed:false then count them 
a variable can easily store the !tasks
when a completed:false newly gets add to database it should increase the counter</p>
 
<h5>Algorithm</h5>

```

renderTask()
⬇
counter=0;
⬇
for loop
⬇
if task is completed:false
⬇
counter +1
⬇
after loop finishes show counter on screen

```


-------
<h5>Filters</h5>

when click on completed render should only show the task who are completed it should not affect the database in the sligtest bit and no filter button should affect the database, bcuz we wanna show from dataabase who is completed or not or show all tasks

if something is deleted from database why show it again like how will i recover it and whats the point 

when click on all make true to all tasks that way we can show the all tasks either false or true , again we will not be modifying the database just logic that can make true for all

when click on completed show only tasks who are completed
when click on active show tasks who are not completed yet

there is no point in makeing a seprate way for it identify the taks when it is already iterating over the tasks one by one and can easily capture the needed tasks 
if we suppose try to give it a array and then render on it we might need to make a seprate logic for this

```

user clicks completed
⬇
it will run the renderTasks()
⬇
clear display
⬇
run for loop
⬇
it will enter the ifelse section for the filterlogic
⬇
there it will then look for cases who are true and them else skip them , same for active and as for all we just need to make it true for all that it show all task like a cariable who will compare and then like this true === true this  will surely make like yes they all come under all task category
⬇
then display them
```



----------------------

<h1>Recap Of what i have done so far</h1>
<p>

What actually happens from the moment a user types a task and clicks Add until it appears on the screen?
when a user type and click add, the add button trigger a click event which eventually execute a function that function does mainly a few things that first store the input in a variable if it has any spaces without any spaces and then a it check based on condition that if the input is empty show toast noti saying enter the task again , if the input is not empty push that input with a id and completed value in a wrapper of object and push that object into the database then run renderTask() and after it empty the input value 
now come second what happeninside the renderTask() => it first empty the display innerhtml then render the data once again from database or from other areas it the call was from there 

run renderTasks()
⬇
empty display
⬇
store the counter as 0 & store a variable a check as ""
⬇
run for loop
⬇
now store the database[i] as element for easy purpose
⬇  => logic for counter &  checkbox 
⬇                        ⬇
⬇                       for every task check if its state of completed is true or false 
⬇                        ⬇
⬇                        if false add one to counter  and check as ""
⬇                        ⬇
                         if true show variable check as "checked"
⬇   
now it will decide if the editingId match the called id
⬇
if true show edit ui if no show normal ui
⬇ => since this is for very first time it will show the normal UI 
now display the Normal UI on top on empty display with every iteration
⬇
first ->  checkbox will display with this ${check}
⬇
second -> input will display with its task 
⬇
third -> edit button ui
⬇
fourth -> delete button ui
⬇
show task left value
⬇
browser wait

</p>


----------------------------

Local storage

Js does not remember the old array if refresh, it create a new array everytime.
Add Task 
⬇
update database
⬇
save to localstorage

we should save to local storage after every changes to database 

--------------------------
  

🚀 localStorage Challenge  
Part 1: Saving

1. Which functions modify database?
   => addTasks,deleteTasks,saveTasks,toggle

2. After database changes, what should happen immediately?
   => when database changes that new data should get transfer to local storage

3. Why do we need JSON.stringify() when saving?
   => we need this to convert the object to JSON formet

4. What exactly is stored in localStorage?
   => the string 
--- 
Part 2: Loading

5. When should we load data from localStorage?
   => Every time we refresh a page that's when should the data get load

6. Which function should be responsible for loading it?
   => renderTask()

7. Why do we need JSON.parse()?
   => We need JSON.parse() to turn a JSON string into a array of object so that we can acces to that database

8. What does getItem() return if nothing has ever been saved?
   => getItem() gives us the data stored inside the localstorage and if there is nothing we then need to make sure what we're getting it should turn it into array  

9. Why can't we directly assign that value to database?
   => I cant see what this question mean
---

Part 3: Edge Cases

10. If getItem() returns null, what should database become?
   =>we should first check if what we are getting is a string or a null when a database is empty inside the and you do json.parse on top of it, it gives the null so to get away from it we must check if the value we getting from localstorage is null or a array if its a null turn that into array by assigning a empty array to databas

11. After loading the data, what should be called next?
   => renderTask() to show available task if they are inside the database

12. What happens to nextId after a page refresh?
   => acc to our current logic it should become the 1 on every refresh but we can do like store that nextId inside the localstorage if possible that way the nextId wont destroy on refresh

13. Suppose before refresh your database was: 
[
 { id: 1 },
 { id: 2 },
 { id: 3 }
]

After refresh, nextId is still:

1

What bug will happen when you add another task?
well for instance if you click on id1 item but that is below in list so the item who upper in list will take consequences
How do you think you'll solve that?
hmm but it has a lot of flaw itself like say if i save last nextId value but again that value might get match again or maybe we can do like pull the last task id value and store it then add a random number to it that way we will be able to make our program have id who doesnt match to each other 

---

Part 4: Code Design

14. Should you write localStorage.setItem(...) in four different places?
   => i will not write it in four places ill do better and put this in a function and that fuction will live in four different place and get execute when happen any changes to database


Or should you create one helper like:

saveDatabase()  yes ill create one like this 

15. Similarly, should loading also have its own function?
   => we can put renderTask() at very last to make it execute for getItem who context so that way when ever a page gets load the task will display and as for loading i dont think it need a function but it do need a ifelse who can decide for it self what to do with null value when it pull a empty database string value and then put a empty array to it.


loadDatabase()


---

Part 5: Browser Thinking

Complete this flow:

Browser Opens
        ↓
it will load the data from local storage and then it will check wheather it is a null or a array
        ↓
if null have database a empty array 
        ↓
database = []
        ↓
then run rendertask()
        ↓
Browser waits

and

User toggles a task
        ↓
database changes
        ↓
save the data to local storage
        ↓
render the task on display
        ↓
Browser waits


--
who own setItem => the localstorage
who own JSON.stringify() => i dont know maybe none 
stringify should convert the database to string
local storage should store it 
database -> json stringify -> string -> push string to  -> localstorage


browser -> give me the string -> now convert that string -> store it in the databse 
getItem should run first to bring the string

after getItem returns where will i temporarily keep that returned that value dont know csnt guess

json parse should receive the string
 
 localStorage
↓
getitem
↓
string
↓
json parse
↓
array
↓
database


----------------------------

```
  

Round 1

❌ Delete renderTask()

What still works?
Function will work properly as they can make changes to databse but you cannot see any task being display at all , if this renderTask() to delete from specific place then it may have a different impact if entirely delete from the code the whole renderTask() then that changes everything you cannot see anything on the page bcuz nothing will render at all.

What stops working?
Tasks being on display will stop working.

Be as detailed as you can.


---

Round 2

❌ Delete saveDatabase()

Your app is running.

What changes in the user's experience?
When delete this mean the user can work perfectly fine but tasks won't be able to survive a refresh page 
What still works?
Yup everything works fine just you cannot access local storage anymore
What only breaks after a refresh?
i dont think anything will break bcuz what this function do is save the data to localstorage if nothing gets store then it wont load anything but just a empty array if loaddatbase still exist

---

Round 3

❌ Delete loadDatabase()

Imagine you have 50 tasks saved yesterday.

What happens when you open the app today?
Disaster, bcuz you cannot acces those tasks today at all and for that reason both save and load need to have a place in the code 

---

Round 4

❌ Delete checkFilter()

Don't just say "filter breaks."

Walk me through this scenario:

Current filter = Active
        ↓
User toggles a task
        ↓
What happens? 
lets learn what actually checkfilter do it check wheather a filter is active if yes call renderTask(activeTask) that will lead to show the task who are active 
how will it break so when we specifically delete only the check without doing any modification the database do will change but we wont see any changes on display bcuz no one called the rendertask
     1st - the first thing it wont work why bcuz i had made the app in such a way that toggle doesnt have the renderTask in itself the toggle works only if the checkfilter is there so thats why it cant work bcuz its missing a step which led to display of task but the database is still changing  , say i have active filter and since its active im calling renderTask(activeTasks), from here render will take array from activetask that will display the task who are active right but since in the first place toggle doesnt have the checkfilter so it can only change database but not show the new display



---

Round 5

❌ Delete editingId

You still have the Edit button.
if i dont have editingId that means i cannot enter the edit ui mode bcuz that editing id is something who matches the id with itself like editingId = Id so when these two are same you enter the edit ui mode but since none is there the edit ui mode will not apear 
Walk me through exactly what happens after clicking it.


---

Round 6

❌ Delete renderTask() from the end of toggleTask()

The database changes successfully.

Now what does the user actually see?
the user see nothing change to the display bcuz the toggle did happen in back but it wont show on the display

---

Round 7

❌ Delete database.findIndex() from deleteTask()

How would splice() know what to remove?
it will throw the error bcuz the splice(index,1)  doesnt have any knowledge about the index what number is that so that why it will throw a error

---

Round 8

❌ Delete JSON.stringify()

Everything else stays the same.

What does localStorage receive?
it wont receive anything bcuz setitem wont be able to send any data and since no data gets send it will stay same 
Why is that a problem?
that is a prblem bcuz when a refresh happen the task will destroy and thats why it wont show again

---

Round 9 (My favorite)

❌ Delete the line:

database = temp;

loadDatabase() still runs.

What happens after refresh? 
you will see a empty display bcuz with this line the json send the data to temp and that data gets transfer to databse but if we never pass data from temp to database then database show what it hold and it will be nothing bcuz i have assign my database like this let database ;

---

Final Boss 😈

Delete only this line from addTask():

saveDatabase();

Everything else remains.

Now answer these:

1. Does the new task appear immediately?
yes it does 

2. Does the counter increase?
yes it does

3. Does filtering still work?
yes it do

4. What happens after refreshing the page?
you see nothing 
5. Why?
bcuz you never send any data to localstorage
 
```