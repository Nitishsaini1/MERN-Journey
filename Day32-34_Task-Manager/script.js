const inputTask  = document.querySelector(".input-task");
const addTaskBtn = document.querySelector(".add-task");
const allFilterBtn = document.querySelector(".all")
const activeFilterBtn = document.querySelector(".active");
const completedFilterBtn = document.querySelector(".completed");
const taskCounter = document.querySelector(".task-counter");
const displayTaskList = document.querySelector(".task-list");
const toast = document.querySelector(".toast");
let database;
let nextId = 1;
let editingId = -1; 
let filter = "";
const toastText = (message)=>{
    toast.innerText = message; 
    toast.style.display = "block"; 
  setTimeout(() => {
      toast.style.display = "none"
    },  2000);
}; 


const applyCurrentFilter = () => {
    if (filter === "active") {
        activeFilterTask();
    } else if (filter === "complete") {
   completedFilterTask();
    } else { 
        renderTask(database);
    }
}
const calculateNextId = ()=> {
    let biggestId =0;
    for (let i = 0; i < database.length; i++) {
        const element = database[i];
        if (biggestId < element.id) { 
            biggestId = element.id;
            
        }  
    }
    nextId =  biggestId +1;
}
const renderTask = (tasks) => {
     displayTaskList.innerHTML = "";
       let counter = 0;
        for (let i = 0; i < tasks.length; i++) {
            const element = tasks[i];  
            let checkBox=""            
            if (element.completed === true) { 
               checkBox = "checked"
            } else { 
                counter++;
                checkBox ="";
            }
           
            if (editingId === element.id) {
                 displayTaskList.innerHTML  += `<ul class=" task-list">
                <li class="task-list-card flex"> 
                     <div class=" left-side flex">  <input type="checkbox" ${checkBox} onclick ="toggleTask(${element.id})" >
                      <input type="text" class="edit-input-task" value = "${element.text}">
                    </div>
                    <div class="right-side flex" >
                        <span class="edit-task pointer"   onclick="saveTask(${element.id})">💾</span> 
                    </div>
                </li> 
            </ul> `
            } else {
                
            displayTaskList.innerHTML  += ` <ul class=" task-list">
                <li class="task-list-card flex">
                    <div class=" left-side flex">  <input type="checkbox" ${checkBox} onclick ="toggleTask(${element.id})" >
                    
                    <span class="task-name"> ${element.text}</span>
                    </div>
                    <div class="right-side flex" >
                        <span class="edit-task pointer" onclick="editTask(${element.id})">✏️</span>
                        <span class="delete-task pointer" onclick="deleteTask(${element.id})">🗑</span>
                       
                    </div>
                </li> 
            </ul>  `
            }
            
        } 
         taskCounter.textContent = counter;
}; 
const addTask= ()=>{
    let userInput = inputTask.value.trim();
    if (userInput === "") { 
        toastText("Please enter the input again");
        return;
    } else {        
    let taskCard = {
        id:nextId,
        text:userInput,
        completed:false
    };
    nextId++; 
        database.push(taskCard);
        saveDatabase();
        applyCurrentFilter();
        //  renderTask(database);
         
        } 
         inputTask.value = "";
};
const toggleTask = (id) => { 
     let task = database.find((index)=> index.id === id);
     task.completed = !task.completed;
     
    editingId =-1;
    
    saveDatabase();
     applyCurrentFilter();
   
};
const deleteTask = (id) => {
    let deleteIndex = database.findIndex((task)=> task.id === id);  
    if(deleteIndex === -1 ){
         toastText("The task did not find");
        }else{
             database.splice(deleteIndex,1);
        }
        
    saveDatabase();
     applyCurrentFilter();
};
const editTask = (id) => {
    editingId = id;  
       applyCurrentFilter();
    const editInput = document.querySelector(".edit-input-task")
    editInput.focus();
     editInput.setSelectionRange(editInput.value.length,editInput.value.length )
  
};
const saveTask = (id) => {
    const editInput = document.querySelector(".edit-input-task")
     let task = database.find((task)=> task.id === id);
    if (editInput.value.trim() === "") { 
        toastText("Please enter the task"); 
        return
    } else { 
     task.text = editInput.value;
    }
    editingId =-1;
    saveDatabase();
    applyCurrentFilter();
    //  renderTask(database);
};

const allFilterTask = ( ) => { 
    filter = "";
    applyCurrentFilter();
    // renderTask(database);  
};
const activeFilterTask = ( ) => {
    let pendingTasks = database.filter((tasks) => tasks.completed === false
    )
    filter = "active";
    renderTask(pendingTasks);
};
const completedFilterTask = () => {
      let completeTasks = database.filter((tasks) => tasks.completed === true
    )
     filter = "complete";
    renderTask(completeTasks);
};
const saveDatabase =() =>{
    localStorage.setItem("task",JSON.stringify(database))
};

const loadDatabase = () => {
    let temp = JSON.parse(localStorage.getItem("task"));
    if (temp === null){
        
        database = [];
    } else{
        database = temp;
    }    
    applyCurrentFilter(); 
}; 
loadDatabase();
calculateNextId(); 
 
addTaskBtn.addEventListener("click", addTask);
allFilterBtn.addEventListener("click", allFilterTask);
activeFilterBtn .addEventListener("click", activeFilterTask);
completedFilterBtn.addEventListener("click", completedFilterTask);