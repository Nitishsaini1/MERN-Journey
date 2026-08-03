const inputTask  = document.querySelector(".input-task");
const addTaskBtn = document.querySelector(".add-task");
const allFilterBtn = document.querySelector(".all")
const activeFilterBtn = document.querySelector(".active");
const completedFilterBtn = document.querySelector(".completed");
const taskCounter = document.querySelector(".task-counter");
const displayTaskList = document.querySelector(".task-list");
const toast = document.querySelector(".toast");
let database = [];
let editingId = -1;
let nextId =1;
const toastText = (message)=>{
    toast.innerText = message; 
    toast.style.display = "block"; 
  setTimeout(() => {
      toast.style.display = "none"
    },  2000);
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
         renderTask();
         
        }
        // userInput = "" //why this not work but next line work  
         inputTask.value = "";
};

const renderTask = () => {
     displayTaskList.innerHTML = "";
       let counter = 0;
        for (let i = 0; i < database.length; i++) {
            const element = database[i];  
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
const toggleTask = (id) => { 
     let task = database.find((index)=> index.id === id);
     task.completed = !task.completed;
    renderTask();
};
const deleteTask = (id) => {
    let deleteIndex = database.findIndex((task)=> task.id === id);
    if(deleteIndex === -1 ){
         toastText("The task did not find");
        }else{
             database.splice(deleteIndex,1);
        }
   
    renderTask(); 
};
const editTask = (id) => {
    editingId = id;
    renderTask();
    const editInput = document.querySelector(".edit-input-task")
    editInput.focus();
     editInput.setSelectionRange(editInput.value.length,editInput.value.length )
};
const saveTask = (id) => {
    const editInput = document.querySelector(".edit-input-task")
     let task = database.find((index)=> index.id === id);
    if (editInput.value.trim() === "") { 
        toastText("Please enter the task"); 
        return
    } else { 
     task.text = editInput.value;
    }
    editingId =-1;
     renderTask();
};
addTaskBtn.addEventListener("click", addTask);