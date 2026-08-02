const inputTask  = document.querySelector(".input-task");
const addTaskBtn = document.querySelector(".add-task");
const allFilterBtn = document.querySelector(".all")
const activeFilterBtn = document.querySelector(".active");
const completedFilterBtn = document.querySelector(".completed");
const taskCounter = document.querySelector(".task-counter");
const displayTaskList = document.querySelector(".task-list");
const toast = document.querySelector(".toast");
let database = [];

let nextId =1;
const toastText = (message)=>{
    toast.innerText = message; 
    toast.style.display = "block"; 
  setTimeout(() => {
      toast.style.display = "none"
    },  2000);
}
const addTask= ()=>{
    let userInput = inputTask.value.trim();
    if (userInput === "") {
        console.log("RUn");
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
}
const renderTask = () => {
     displayTaskList.innerHTML = "";
        for (let i = 0; i < database.length; i++) {
            const element = database[i];  
            let checkBox=""
            if (element.completed === true) { 
               checkBox = "checked"
            } else { 
                checkBox ="";
            }
        displayTaskList.innerHTML  += ` <ul class=" task-list">
                <li class="task-list-card flex">
                    <div class=" left-side flex">  <input type="checkbox" ${checkBox} onclick ="toggleTask(${element.id})" >
                    
                    <span class="task-name"> ${element.text}</span>
                    </div>
                    <div class="right-side flex" >
                        <span class="edit-task pointer  ">✏️</span>
                        <span class="delete-task pointer" onclick="deleteTask(${element.id})">🗑</span>
                       
                    </div>
                </li> 
            </ul>  ` 
         }
} 
const toggleTask = (id) => {
    console.log("run work");
     let task = database.find((index)=> index.id === id);
     task.completed = !task.completed;
      
    renderTask();
} 
addTaskBtn.addEventListener("click", addTask);
 
