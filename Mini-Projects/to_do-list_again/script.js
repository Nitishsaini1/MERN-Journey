const taskInput = document.querySelector(".task-input");
const warning = document.querySelector(".warning");
const submitButton = document.querySelector(".add-task");
const displayTask = document.querySelector(".display");
const counter = document.querySelector(".counter");
const pendingTaskBtn = document.querySelector(".show-Pending-task");
const completeTaskBtn = document.querySelector(".show-complete-task");
const allTaskBtn = document.querySelector(".show-all-task");
 
let currentFilter = "All";
let database = [];
let editingIndex = -1;
let showTasks = -2;

function addTask() {
  const taskCard = {
    title: taskInput.value,
    status: "Pending",
  };

  if (taskInput.value.trim() == "") {
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
            displayTask.innerHTML =
        displayTask.innerHTML + "<br>" +'<input type="text" id="editInput" value="' + database[i].title +'">';
      displayTask.innerHTML = displayTask.innerHTML + "<br>" + "Status :  " + database[i].status;
      displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<button onclick=toggleTask("' + i +  '")> complete  </button>';
      displayTask.innerHTML = displayTask.innerHTML + '<button onclick = saveTask("' +   i +  '")>Save</button>';
      } else
      
      if ( currentFilter == database[i].status) { 
           loopRun(i);
      } else if ( currentFilter == database[i].status || currentFilter == "All") {
        loopRun(i);
      } else  { 
   //empty
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
  database[index].title = editInput.value;
  editingIndex = -1;
  renderTasks();



}
// function saveTask(index) {
//   const editInput = document.querySelector("#editInput");
//   database[index].title = editInput.value;
//   editingIndex = -1;
//   renderTasks();
// }
submitButton.addEventListener("click", addTask);
allTaskBtn.addEventListener("click", allTasks);
pendingTaskBtn.addEventListener("click", pendingTasks);
completeTaskBtn.addEventListener("click", completeTaskShow);