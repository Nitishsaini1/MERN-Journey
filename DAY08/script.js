const studentName = document.querySelector(".studentName");
const pushbtn = document.querySelector(".push");
const popbtn = document.querySelector(".pop");
const unshiftbtn = document.querySelector(".unshift");
const shiftbtn = document.querySelector(".shift");
const result = document.querySelector(".result");
const resultStundent = document.querySelector(".result-stundent");
const studentNameAdd = document.querySelector(".success");

let students = ["Raj", "Aman", "Kirti"];
resultStundent.textContent = students.join(" | ");


function addStudent() {
  if (studentName.value == "") {
    result.textContent = "Please Enter a Name";
  } else if (students.includes(studentName.value) ) {
     result.textContent = "❌ Student already exists.";
  } else  if (studentName.value.includes(" ")) {
                result.textContent = "❌ cannot enter empty names";
  } else {
    students.push(studentName.value);
    studentNameAdd.textContent =
      "✅ Student '" + studentName.value + "' added successfully.";
    resultStundent.textContent = students.join(" | ");
    studentName.value = "";
     result.textContent = "";
  }
}

function addFront() {
  if (studentName.value == "") {
    result.textContent = "Please Enter a name";
  } else if (students.includes(studentName.value) ) {
     result.textContent = "❌ Student already exists.";
  } else   if (studentName.value.includes(" ")) {
                result.textContent = "❌ cannot enter empty names";
  } else {
    students.unshift(studentName.value);
    studentNameAdd.textContent =
      "✅ Student '" + studentName.value + "' added successfully.";
    resultStundent.textContent = students.join(" | ");
    studentName.value = "";
     result.textContent = "";
  }
}
function remove() {
  if (students.length == 0) {
    resultStundent.textContent = "No name to erase";
  } else {
  let remove =   students.pop();
    resultStundent.textContent = students.join(" | ");
    studentNameAdd.textContent =
      "✅ Removed '" + remove + "' successfully.";
   
  }
}


function removeFront() {
  if (students.length == 0) {
    resultStundent.textContent = "No name to erase";
  } else {
    let remove = students.shift();
    resultStundent.textContent = students.join(" | ");
    
    studentNameAdd.textContent =
      "✅ Removed '" + remove + "' successfully.";
  }
}

pushbtn.addEventListener("click", addStudent);
popbtn.addEventListener("click", remove);
unshiftbtn.addEventListener("click", addFront);
shiftbtn.addEventListener("click", removeFront);

//I should show results from the very start.
// /✅ Student added successfully.
