const taskInput = document.querySelector(".task-input");
const warning = document.querySelector(".warning");
const addTaskButton = document.querySelector(".add-task");
const taskCounter = document.querySelector(".task-counter");
const searchBarInput = document.querySelector(".search-bar");
const clearSearchButton = document.querySelector(".clear-search");
const searchTitleButton = document.querySelector(".search-title");
const searchWarning = document.querySelector(".search-warning");
const allTasksButton = document.querySelector(".all-tasks");
const pendingTasksButton = document.querySelector(".pending-task");
const completeTasksButton = document.querySelector(".complete-task");
const displayTasks = document.querySelector(".display-tasks");


let database ;
let editingIndex = -1;
let currentFilter = "All";
let searchText = "";
 

function addTask() {
    const taskCard = {
        title:taskInput.value,
        status:"Pending"
    };
    if (taskInput.value.trim(" ") == "") {
        warning.textContent = "Please Enter the text"
    } else {
      database.push(taskCard);  
      saveDatabase();
      renderTasks();
      warning.textContent = "";
    }
    taskInput.value = "";
}
function allTasks() {
    currentFilter = "All";
    renderTasks();
}
function completeTasks() {
    currentFilter = "Complete";
    renderTasks();
}
function pendingTasks() {
    currentFilter = "Pending"
    renderTasks();
}
function renderTasks(){     
    displayTasks.innerHTML = "";
    taskCounter.textContent = database.length;
    for (let i = 0; i < database.length; i++) {
        if (i == editingIndex) {
           displayTasks.innerHTML=displayTasks.innerHTML+("<br>")+ '<input type="text" value='+database[i].title+' id="edit-input">'; 
            displayTasks.innerHTML = displayTasks.innerHTML+'<button onclick=saveEdit("'+i+'")>Save</button>'+ ("<br>"); 
        } else if ( (database[i].status == currentFilter ||currentFilter == "All") &&  database[i].title.includes(searchText)) {
             loopRun(i);
        }  
    }
} 
function loopRun(i){
   displayTasks.innerHTML=displayTasks.innerHTML+("<br>")+(i+1)+(" . ")+database[i].title;
   displayTasks.innerHTML=displayTasks.innerHTML+("<br>")+"Status :"+database[i].status;
   if (database[i].status == "Pending") {
       displayTasks.innerHTML = displayTasks.innerHTML+("<br>")+'<button onclick=toggleStatus("'+i+'")>Complete</button>';
    } else {
        displayTasks.innerHTML = displayTasks.innerHTML+("<br>")+'<button onclick=toggleStatus("'+i+'")>Pending</button>';
    }
   displayTasks.innerHTML = displayTasks.innerHTML+'<button onclick=editInputTask("'+i+'")>Edit</button>';
   displayTasks.innerHTML = displayTasks.innerHTML+'<button onclick=deleteTask("'+i+'")>Delete</button>'+ ("<br>");
}
function editInputTask(index) {
    editingIndex = index;
    renderTasks()
}
function saveEdit(index){
    const editInput = document.querySelector("#edit-input"); 
       if (editInput.value.trim() == "" ) {
           displayTasks.innerHTML=displayTasks.innerHTML+("<br>")+ '<input type="text" value='+database[i].title+' id="edit-input">';  
           displayTasks.innerHTML = displayTasks.innerHTML+'<div>Warning :'+'Please Enter the task'+'</div>'+ ("<br>"); 
           displayTasks.innerHTML = displayTasks.innerHTML+'<button onclick=saveEdit("'+i+'")>Save</button>'+ ("<br>"); 
           } else {
            
               database[index].title = editInput.value;
               editingIndex = -1;
               saveDatabase();
               renderTasks();     
            }
}
function deleteTask(index) {
    database.splice(index,1);
    saveDatabase();
    renderTasks();
}
function toggleStatus(index) { 
    if (database[index].status == "Pending") { 
        database[index].status = "Complete";
        } else { 
        database[index].status = "Pending"; 
    }
    saveDatabase();
    renderTasks()
}
function clearSearch() {
    searchText ="";
    searchBarInput.value = "";
    renderTasks();
}
function searchTitle() {
    if (searchBarInput.value.trim() == "") {
        searchWarning.textContent = "Please Enter the task"
    } else {
        searchText = searchBarInput.value;
        renderTasks();
          searchWarning.textContent = ""
    }
}
function saveDatabase() {
    localStorage.setItem("Task",JSON.stringify(database))
}
addTaskButton.addEventListener("click",addTask )  
clearSearchButton.addEventListener("click",clearSearch  )  
searchTitleButton.addEventListener("click",searchTitle  )  
allTasksButton.addEventListener("click", allTasks ) 
pendingTasksButton.addEventListener("click",pendingTasks) 
completeTasksButton.addEventListener("click", completeTasks) 
if ((database = JSON.parse(localStorage.getItem("Task"))) == null) {
    database = []
}  

renderTasks();