const task = document.querySelector(".task");
const warning = document.querySelector(".warning");
const submitBtn = document.querySelector(".add-task");
const displayTask = document.querySelector(".display-task");

let database = [];

function addTask() {
  let taskCard = {
    title: task.value,
    status: "Pending", //i have wrote pending in string b/q im still in part where it need to improve over time so soon this guy will have its proper identity
  };

  if (task.value.trim() == "") {
    warning.textContent = "Please Enter the task";
    task.value = "";
  } else {
    database.push(taskCard);
    displayTask.innerHTML = "";
    for (let i = 0; i < database.length; i++) {
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + (i + 1) + " . " + database[i].title;
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "Status :" + database[i].status;
      displayTask.innerHTML =
        displayTask.innerHTML +
        "<br>" + '<button onclick="completeTask('+i+')">Complete</button>';//its not i didnt wrtie like that but its showing error to me when i wrote like this
      displayTask.innerHTML =
        displayTask.innerHTML +'<button onclick = "deleteTask('+i+')">Delete</button>';
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "-----------------------";
    }
    task.value = "";
  }
}

function completeTask(index) {
  console.log(index);
  database[index].status = "Complete";
  
    displayTask.innerHTML = "";
    for (let i = 0; i < database.length; i++) {
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + (i + 1) + " . " + database[i].title;
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "Status :" + database[i].status;
      displayTask.innerHTML =
        displayTask.innerHTML +
        "<br>" + '<button onclick="completeTask('+i+')">Complete</button>';//its not i didnt wrtie like that but its showing error to me when i wrote like this
      displayTask.innerHTML =
        displayTask.innerHTML +'<button onclick = "deleteTask('+i+')">Delete</button>';
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "-----------------------";
    }

}

function deleteTask(index) {
  console.log(database);
  database.splice(index, 1);
  console.log(database);
  
    displayTask.innerHTML = "";
    for (let i = 0; i < database.length; i++) {
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + (i + 1) + " . " + database[i].title;
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "Status :" + database[i].status;
      displayTask.innerHTML =
        displayTask.innerHTML +
        "<br>" + '<button onclick="completeTask('+i+')">Complete</button>';//its not i didnt wrtie like that but its showing error to me when i wrote like this
      displayTask.innerHTML =
        displayTask.innerHTML +'<button onclick = "deleteTask('+i+')">Delete</button>';
      displayTask.innerHTML =
        displayTask.innerHTML + "<br>" + "-----------------------";
    }

}

submitBtn.addEventListener("click", addTask);
