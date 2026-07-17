const task = document.querySelector(".task");
const warning = document.querySelector(".warning");
const submitBtn = document.querySelector(".add-task");
const displayTask = document.querySelector(".display-task");

let database = [];
let editingIndex = -1;

function addTask() {
  let taskCard = {
    title: task.value,
    status: "Pending"
    };
  if (task.value.trim() == "") {
    warning.textContent = "Please Enter the task";
    task.value = "";
  } else {
    database.push(taskCard);
    renderTasks(); 
    task.value = "";
  }
}

function renderTasks() {
  displayTask.innerHTML = "";
  for (let i = 0; i < database.length; i++) { 

    if (i == editingIndex) {
    displayTask.innerHTML = displayTask.innerHTML +  '<input id="editInput" type="text" value="'+ database[i].title+'" >'
    displayTask.innerHTML = displayTask.innerHTML + "<br>"+ "Status : "+ database[i].status; 
    displayTask.innerHTML = displayTask.innerHTML +  "<br>"+'<button onclick="saveTask('+i+')">  💾</button>'; 
    } else {      
    displayTask.innerHTML = displayTask.innerHTML + "<br>"+ (i+1)+ " . "+ database[i].title;
    displayTask.innerHTML = displayTask.innerHTML + "<br>"+ "Status : "+ database[i].status;
    displayTask.innerHTML = displayTask.innerHTML + "<br>"+  '<button onclick="completeTask('+i+')">  ✔  </button>'+"   ";
    displayTask.innerHTML = displayTask.innerHTML +   '<button onclick="deleteTask('+i+')">  🗑  </button>'+"   ";
    displayTask.innerHTML = displayTask.innerHTML +  '<button onclick="editTask('+i+')"> ✏️ </button>'; 
    }

  }
}

function completeTask(index) { 
  database[index].status = "Complete";
  renderTasks();
}

function pendingTask(index) { 
  database[index].status = "Pending";
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



submitBtn.addEventListener("click", addTask);

