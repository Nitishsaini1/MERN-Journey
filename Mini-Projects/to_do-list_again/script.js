const taskInput = document.querySelector(".task-input");
const warning   = document.querySelector(".warning");
const  submitButton = document.querySelector(".add-task");
const displayTask = document.querySelector(".display");

let database = [];
let editingIndex = -1;

function addTask() {
    const  taskCard ={
        title:taskInput.value,
        status:"Pending"
    };

    if (taskInput.value.trim() =="") {
        warning.textContent = "Please Enter the name";
        taskInput.value= "";
    } else {
        database.push(taskCard);
        renderTasks();
        warning.textContent = "";
        taskInput.value = "";
    }

}
function renderTasks(){
        displayTask.innerHTML="";
        for (let i = 0; i < database.length; i++) { 
            if (i == editingIndex) {
                displayTask.innerHTML = displayTask.innerHTML+ "<br>"+'<input type="text" id="editInput" value="'+database[i].title+'">'
                displayTask.innerHTML = displayTask.innerHTML +"<br>" +"Status :  "+database[i].status;    
                displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<button onclick=completeTask("'+i+'")> ✔  </button>' 
                displayTask.innerHTML = displayTask.innerHTML + '<button onclick = saveTask("'+i+'")>Save</button>';
            } else if ( database[i].status == "Complete") {
                console.log(database);
                console.log("1");
                
                 displayTask.innerHTML = displayTask.innerHTML +"<br>"+(i+1)+" . "+database[i].title;
                   displayTask.innerHTML = displayTask.innerHTML +"<br>" +"Status :  "+database[i].status;
                   displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<button onclick=completeTask("'+i+'")> ✔  </button>'
                   displayTask.innerHTML = displayTask.innerHTML +  '<button onclick=deleteTask("'+i+'")> 🗑 </button>'
                   displayTask.innerHTML = displayTask.innerHTML +  '<button onclick=editTask("'+i+'")> Edit </button>'
                
            } else {
                console.log("run 2");
                
                   displayTask.innerHTML = displayTask.innerHTML +"<br>"+(i+1)+" . "+database[i].title;
                   displayTask.innerHTML = displayTask.innerHTML +"<br>" +"Status :  "+database[i].status;
                   displayTask.innerHTML = displayTask.innerHTML + "<br>" +'<button onclick=completeTask("'+i+'")> ✔  </button>'
                   displayTask.innerHTML = displayTask.innerHTML +  '<button onclick=deleteTask("'+i+'")> 🗑 </button>'
                   displayTask.innerHTML = displayTask.innerHTML +  '<button onclick=editTask("'+i+'")> Edit </button>'
                
            }
         
        }
      

}
function completeTask(index) {
    console.log(database);
    console.log("Before the ifelse");
    
    if (database[index].status == "Pending") {
        database[index].status = "Complete"
        console.log(database);
        console.log("Meant to make complete during 1st ifelse");
        
        
    } else {
        database[index].status = "Pending"
        console.log("Meant to make pending secondifelse" );
        console.log(database);
    }  
    // database[index].status = "Complete"
    renderTasks();
}
function deleteTask(index) {
    database.splice(index,1);
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
submitButton.addEventListener("click", addTask);