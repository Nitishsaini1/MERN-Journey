//-----
-----------------------------------------
            Task Manager
      Stay Organized Every Day
-----------------------------------------

[ Enter a task............. ] [ Add ]

-----------------------------------------
 All | Active | Completed
-----------------------------------------

☐ Learn React             🗑
☑ Finish Weather App      🗑
☐ Practice Interview      🗑

-----------------------------------------
Tasks Left: 2

--------------------
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
*************************
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

**************************************
iwould like to use this it provide more detail for me to do a lot of work easily and be more precise about it
let taskCard = {

    id:1,
    text:"Learn React",
    completed:false
}
-----------
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
⬇
⬇
⬇
⬇
⬇