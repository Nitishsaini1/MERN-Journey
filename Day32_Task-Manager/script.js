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
let filter = "";
const toastText = (message)=>{
    toast.innerText = message; 
    toast.style.display = "block"; 
  setTimeout(() => {
      toast.style.display = "none"
    },  2000);
};
const applyCurrentFilter =()=>{
      if (filter === "active") {
        activeFilterTask();
     } else if (  filter === "complete") {
 completedFilterTask();
     } else {     
         renderTask(database);
     }

}
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
         renderTask(database);
         
        }
        // userInput = "" //why this not work but next line work  
         inputTask.value = "";
};
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
const toggleTask = (id) => { 
     let task = database.find((index)=> index.id === id);
     task.completed = !task.completed;
     applyCurrentFilter();
   
};
const deleteTask = (id) => {
    let deleteIndex = database.findIndex((task)=> task.id === id);
    if(deleteIndex === -1 ){
         toastText("The task did not find");
        }else{
             database.splice(deleteIndex,1);
        }
   
     applyCurrentFilter();
};
const editTask = (id) => {
    editingId = id;
    renderTask(database);
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
     renderTask(database);
};

const allFilterTask = ( ) => {
    // let allFilter = database.filter()
    filter = "";
    renderTask(database); //here simply let render do its work and let show according to database every tasks
}
const activeFilterTask = ( ) => {
    let pendingTasks = database.filter((tasks) => tasks.completed === false
    )
    filter = "active";
    renderTask(pendingTasks);
}
const completedFilterTask = () => {
      let completeTasks = database.filter((tasks) => tasks.completed === true
    )
     filter = "complete";
    renderTask(completeTasks);
}

addTaskBtn.addEventListener("click", addTask);
allFilterBtn.addEventListener("click", allFilterTask)
activeFilterBtn .addEventListener("click", activeFilterTask)
completedFilterBtn.addEventListener("click", completedFilterTask)


// let db = [
//     {name:true},
//     {name:false},
//     {name:true},
//     {name:false},
//     {name:true}
// ]

// const  render = (params) => { //here that new array got inside the params 

//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         console.log(element); 
//     }  
// } 
// const active = () =>
//     { 
//         let pending  = db.filter((task) => task.name === false);  
//         render(pending); //the new array is inside the pending 
//     } 

//     active();

    
// const complete = () =>
//     { 
//         let completes  = db.filter(( task) => task.name === true); 
//         render(completes); //the new array is inside the pending 
//     } 

//     complete();

//     const allFilter = () => {
//         //i kinda got stuck here what kind of compare i need to do here 
//         // let newDb = db; no need for this simple call whole database from heree
//         render(db);
//     }