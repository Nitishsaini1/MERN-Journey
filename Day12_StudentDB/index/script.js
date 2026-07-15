const studentName = document.querySelector(".student-name");
const studentAge = document.querySelector(".student-age");
const studentCourse = document.querySelector(".student-course");
const studentPass = document.querySelector(".student-pass");
const warning = document.querySelector(".warning");
const button = document.querySelector(".add-student");
const displayStudent = document.querySelector(".display-student");

let database = []; 


function addStudent() {    
    let student = {
        name:studentName.value,
        age:studentAge.value,
        course:studentCourse.value,
        passed:studentPass.checked
    };
         if (studentName.value.trim() == "") {      
            warning.textContent= "Please enter the name."
        } else if (studentAge.value < 5 || studentAge.value > 100) {
            console.log("check fail?");            
            warning.textContent = "Please enter the age"
        } else if (studentCourse.value.trim() =="") {
            warning.textContent = "Please enter the course"
        } else {
            database.push(student);
            displayStudent.innerHTML = "";
            for(let i=0; i<database.length; i++){
                let result = "";
                if(database[i].passed ){ result="Yes" } else {result="No" }
               
                displayStudent.innerHTML = displayStudent.innerHTML + "<br>"+(i+1)+" . "+database[i].name;
                displayStudent.innerHTML = displayStudent.innerHTML + "<br>" + " 🎂 Age     : "+database[i].age;
                displayStudent.innerHTML = displayStudent.innerHTML + "<br>" + " 📚 Course  : "+database[i].course;
                displayStudent.innerHTML = displayStudent.innerHTML + "<br>" + " ✅ Passed  : "+result;
                displayStudent.innerHTML = displayStudent.innerHTML + "<br>" + "------------------------";
            }
            studentName.value = "";
            studentAge.value = "";
            studentCourse.value = "";
            studentPass.checked = false;
            warning.textContent = "";
        };
}

button.addEventListener("click", addStudent);
 