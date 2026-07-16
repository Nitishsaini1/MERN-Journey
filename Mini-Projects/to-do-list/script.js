const taskInput = document.querySelector(".task");
const warning = document.querySelector(".warning");
const submitBtn = document.querySelector(".add-task");
const displayTask=document.querySelector(".display-task");

let database = [];

function addTask() {   
    let taskCard = {
        title:taskInput.value,
        status:"Pending"
    };
    if (taskInput.value.trim() == "") {          
        warning.textContent = "Please enter the task";
    }  else { 
        database.push(taskCard); 
        displayTask.innerHTML= "";
        for (let i = 0; i < database.length; i++) { 
            displayTask.innerHTML = displayTask.innerHTML + "<br>"+(i+1)+" . "+database[i].title;
            displayTask.innerHTML = displayTask.innerHTML + "<br>"+ "Status :  "+database[i].status;
            displayTask.innerHTML = displayTask.innerHTML + "<br>"+ '<button onclick="completeTask('+i+')" >Complete</button>' +"  ";
            displayTask.innerHTML = displayTask.innerHTML + '<button onclick="deleteTask('+i+')" >Delete</button>';
        }

    }
}

function completeTask(index) { 
        database[index].status="Complete";
        displayTask.innerHTML= "";
        for (let i = 0; i < database.length; i++) { 
            displayTask.innerHTML = displayTask.innerHTML + "<br>"+ (i+1)+ (" . ")+ database[i].title;
            displayTask.innerHTML = displayTask.innerHTML + "<br>"+"Status : " + database[i].status;
            displayTask.innerHTML = displayTask.innerHTML + "<br>" + '<button onclick="completeTask('+i+')" >Complete</button>' + "    ";
            displayTask.innerHTML = displayTask.innerHTML + '<button onclick="deleteTask('+i+')" >Delete</button>';
        }
}

function deleteTask(index) { 
    database.splice(index, 1);
    displayTask.innerHTML = "";
    for (let i = 0; i < database.length; i++) { 
        displayTask.innerHTML = displayTask.innerHTML + "<br>" + (i+1)+" . "+ database[i].title;
        displayTask.innerHTML = displayTask.innerHTML + "<br>" + " Status : "+ database[i].status;
        displayTask.innerHTML = displayTask.innerHTML + "<br>" + '<button onclick="completeTask('+i+')">Complete</button>' + "    ";
        displayTask.innerHTML = displayTask.innerHTML + '<button onclick="deleteTask('+i+')">Delete</button>';
      }        
}


submitBtn.addEventListener("click", addTask);