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

