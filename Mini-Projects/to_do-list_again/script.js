const taskInput = document.querySelector(".task-input");
const warning = document.querySelector(".warning");
const submitButton = document.querySelector(".add-task");
const displayTask = document.querySelector(".display");
const counter = document.querySelector(".counter");
const pendingTaskBtn = document.querySelector(".show-Pending-task");
const completeTaskBtn = document.querySelector(".show-complete-task");
const allTaskBtn = document.querySelector(".show-all-task");
const searchBarInput = document.querySelector(".search-bar-input");
const searchButton = document.querySelector(".search-button")
const clearSearchButton = document.querySelector(".clear-search")
const searchWarning = document.querySelector(".search-warning");

let currentFilter = "All";
let database = [
  {title: 'Learn React', status: 'Pending'}, 
  {title: 'Learn Javascript', status: 'Complete'},   
  {title: 'Study React', status: 'Complete'},   
  {title: 'Build Portfolio', status: 'Pending'},
];
let editingIndex = -1;
let showTasks = -2;
let showWarning = "";
let temporaryTitle = "";

function addTask() {
  const taskCard = {
    title: taskInput.value,
    status: "Pending",
  };

  if (taskInput.value.trim(" ") == "") {
    warning.textContent = "Please Enter the name";
    taskInput.value = "";
  } else { 

    database.push(taskCard);
    renderTasks();
    warning.textContent = "";
    taskInput.value = "";
  }
} 
function pendingTasks(index) {
  currentFilter = "Pending";
  renderTasks();
}
function completeTaskShow(index) {
  currentFilter = "Complete";
  renderTasks();
}
function allTasks(params) {
  currentFilter = "All";

  renderTasks();
}

function renderTasks() {
  displayTask.innerHTML = "";
  counter.textContent = database.length;
  for (let i = 0; i < database.length; i++) { 
             if (i == editingIndex) {  
            displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<input type="text" id="editInput" value="' + database[i].title +'">';
            if (showWarning == "Please Enter the task") {displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<div>Warning : Please Enter the task</div>'; } else { }
            displayTask.innerHTML = displayTask.innerHTML + "<br>" + "Status :  " + database[i].status;
            displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<button onclick=toggleTask("' + i +  '")> complete  </button>';
            displayTask.innerHTML = displayTask.innerHTML + '<button onclick = saveTask("' +   i +  '")>Save</button>';
      } else if ( (currentFilter == database[i].status || currentFilter == "All") && database[i].title.includes(temporaryTitle) ){ 
        console.log("Reach 1");
        
           loopRun(i);
      } else 
     //i would never reach this at all bcuz upper condition is always true in whatever the condition and now the question should one if really hold two responsibility i think it can if gave the logic in good way it can i think so
      // if ( currentFilter == database[i].status || currentFilter == "All" ) {
      //      console.log("Reach 2");
        
         
      //   loopRun(i);
      // } else
      
      { 
 
      }
    }
  }

function loopRun(i) { 
  displayTask.innerHTML =displayTask.innerHTML + "<br>" + (i + 1) + " . " + database[i].title;
  displayTask.innerHTML =displayTask.innerHTML + "<br>" + "Status :  " + database[i].status;
  if (database[i].status == "Pending") {    
    displayTask.innerHTML =displayTask.innerHTML +"<br>" +'<button onclick=toggleTask("' + i + '")>[ Complete ] </button>';
  } else {
    displayTask.innerHTML =displayTask  .innerHTML +"<br>" +'<button onclick=toggleTask("' + i + '")>[ Pending ] </button>';
  }
  displayTask.innerHTML =displayTask.innerHTML +'<button onclick=deleteTask("' +i + '")> 🗑 </button>';
  displayTask.innerHTML =displayTask.innerHTML +'<button onclick=editTask("' +i + '")> Edit </button>';
}
function toggleTask(index) { 
  if (database[index].status == "Pending") {
    database[index].status = "Complete"; 
       } else {
      database[index].status = "Pending";
       } 
  renderTasks();
}
function deleteTask(index) {
  database.splice(index, 1);
  renderTasks();
}
function editTask(index) {
  editingIndex = index;
  renderTasks();


   


}
function saveTask(index) {  
  const editInput = document.querySelector("#editInput");
  if (editInput.value.trim(" ") == "") {
    //  editingIndex = -1;
    showWarning = "Please Enter the task";
    renderTasks();
  } else {    
    database[index].title = editInput.value;
     showWarning = "";
    editingIndex = -1;
    renderTasks();
  }
  showWarning = "";
}
function searchBar(index) { 
  if ( searchBarInput.value.trim(" ") == "" ) {
    searchWarning.textContent = "Please enter a task";
  } else {
    temporaryTitle = searchBarInput.value;
    renderTasks();
    searchWarning.textContent="";
  }
  
  // searchBarInput.value="";
  // temporaryTitle = "";
}
function clearSearch() {
  temporaryTitle = "";
  searchBarInput.value = "";
  renderTasks();
}
submitButton.addEventListener("click", addTask);
allTaskBtn.addEventListener("click", allTasks);
pendingTaskBtn.addEventListener("click", pendingTasks);
completeTaskBtn.addEventListener("click", completeTaskShow);
searchButton.addEventListener("click", searchBar);
clearSearchButton.addEventListener("click", clearSearch);