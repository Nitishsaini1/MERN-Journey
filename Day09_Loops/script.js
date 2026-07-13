const result = document.querySelector(".result");
// const result1 = document.querySelector(".result1");
// const result2 = document.querySelector(".result2");

let students = ["Raj", "Kirti", "Kissan","Aman","Rahul"];

//  result.textContent = students[0];
//  result1.textContent = students[1];
//  result2.textContent = students[2];
// result.textContent = students(1);
// result.textContent = students(2);
// students=students.join(" | ");
for (let i = 0; i < students.length; i++) {
    result.innerHTML =  result.innerHTML+"<br>" + (i+1)+"."+students[i];   
};






 // console.log(students[i]);
    
    //  result.textContent =   result.textContent+"\n" + students[i]  ;
    // result.innerHTML =  result.textContent+"\n" + students[i];
    // const show = students[i];
// result.textContent = result.textContent(i)