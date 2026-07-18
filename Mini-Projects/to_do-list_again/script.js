const taskInput = document.querySelector(".task-input");
const warning = document.querySelector(".warning");
const submitTask = document.querySelector(".add-task");
const displayTask = document.querySelector(".display");

let database = [];

let editingIndex = -1;


function addTask( ) {
    let taskCard = {
        title:taskInput.value,
        status:"Pending"
    };

    if (taskInput.value.trim() == "") {
        warning.textContent = "Please Enter the name"
    } else {
        database.push(taskCard);
        renderTask();         
        taskInput.value="";
    }
}

function renderTask() {
      displayTask.innerHTML ="";
        for (let i = 0; i < database.length; i++) { 
            if ( i == editingIndex) {
                displayTask.innerHTML=displayTask.innerHTML + '<input type="text" id="edit-input" value="'+database[i].title+'" >' ;            
                displayTask.innerHTML=displayTask.innerHTML + "<br>" +  "Status : "+database[i].status;  
            displayTask.innerHTML=displayTask.innerHTML + "<br>" + '<button onclick="completeTask('+i+')"> ✔ </button>' ;               
                displayTask.innerHTML=displayTask.innerHTML  +'<button onclick="editSave('+i+')"> save </button>'  ;     
            } else {
                displayTask.innerHTML=displayTask.innerHTML + "<br>" + (i+1)+ " . "+database[i].title;            
            displayTask.innerHTML=displayTask.innerHTML + "<br>" +  "Status : "+database[i].status;            
            displayTask.innerHTML=displayTask.innerHTML + "<br>" + '<button onclick="completeTask('+i+')"> ✔ </button>' ;            
            displayTask.innerHTML=displayTask.innerHTML +'<button onclick="deleteTask('+i+')"> 🗑 </button>'  ;            
            displayTask.innerHTML=displayTask.innerHTML +'<button onclick="editTask('+i+')"> edit </button>'  ;     
            }
                   
        }
}
function completeTask(index) { 
    database[index].status = "Complete";
    renderTask();
}
function deleteTask(index) { 
    database.splice(index, 1); 
    renderTask(); 
}
function editTask(index) {
    editingIndex = index;
    renderTask();
}
function editSave(index) {
    const editInput = document.querySelector("#edit-input");
    database[index].title =editInput.value 
    editingIndex = -1
    renderTask();
}
submitTask.addEventListener("click", addTask);