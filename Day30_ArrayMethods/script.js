// //Template literal
// //Replace string concatenation('++');
// //insert variable with ${}
// //execute expression like ${age+1}
// //call methods like ${city.toUpperCase()}
// //Create multi-line string with a single string template literal.

// // let city = "delhi"
// // console.log(`${city.toUpperCase()}`);

// // -----

// // let name = "Nitish";
// // let age = 25;
// // //My name is Nitish.
// // // Next year I will be 26 years old.

// // console.log(`My name is ${name}.
// // Next year I will be ${age +1} years old`);

// //----

// //Destructuring
// // const user = {
// //   name: "Nitish",
// //   age: 25,
// //   city: "Delhi"
// // };
// // console.log(user.name);

// // //

// // const car = {
// //   brand: "BMW",
// //   model: "M4",
// //   year: 2024
// // };

// // let {brand,model,year} = car;

// // console.log(`${brand} ${model } was launched in ${car.year}`);


// // const user = {
// //     name:"Nitish"
// // }

// // let {name}=user;

// // name = "Rahul";

// // console.log(name);
// // console.log(user.name);

// //it creates new variable
// //it doesnt modify the original objects
// //after destructuring , you use name instead of user.name
// //reassigning the new variable doesnt affect the original object
// // const user = {
// //   name: "Nitish",
// //   skills: ["HTML", "CSS", "JavaScript"]
// // };

// // let {
// //   name,
// //   skills: [firstSkill, , thirdSkill]
// // } = user;

// // console.log(name); //Nitish
// // console.log(firstSkill); //HTML
// // console.log(thirdSkill); //Javascript

// //---------------------

// //spread operator
// //(...)



// // let array = [10,20,30]

// // let arr2 = [...array, 40]

// // console.log(arr2);
// //ex2

// // const arr1 = [1,2];
// // const array2 = [...arr1];

// // array2.push(3);

// // console.log(arr1); //1,2
// // console.log(array2); //1,2,3


// //ex3

// // const arr1 = [1, 2];
// // const arr2 = arr1;
// // 
// // arr2.push(3);
// // 
// // console.log(arr1);
// // console.log(arr2);

// //What will arr1 print? //1,2
// // What will arr2 print? //[[1,2],3]
// // Why do you think this behaves differently from the previous example? bcuz both are now pointing to same array intead of having a different set of array thats whyy arr2 will have a array inside a array


// //ex4

// // const a = [1, 2];
// // const b = [...a];

// // a.push(100);

// // console.log(a); //1,2,100 //it is like this bcuz 100 was push into this and then  
// // console.log(b); //1,2  this is like this bcuz when a was assigned inside it with spread operator it will like this so that 100 cannot come inside the b


// //--------------------------------------------------------


// //spread operatorfor objects


// // const user = {
// //   name: "Nitish",
// //   age: 25
// // };

// // const updatedUser = {
// //   ...user,
// //   city: "Delhi"
// // };

// // console.log(updatedUser); //{ name:"Nitish", age:25, city:"Delhi"}

// // //----------------------------------------------------------


// // 😂 Fair enough.

// // You remembered those because we literally solved them together.

// // Let's make this feel like an interview instead. These are new scenarios.


// // ---

// // Question 1

// // Predict the output.

const fruits = ["Apple", "Banana"];

const basket = ["Orange", ...fruits, "Mango"];

console.log(basket);

// 1. Output?  ["Orange","Apple", "Banana", "Mango"];


// 2. Spread or Rest? spread bcuz it is opeing the array




// // ---

// Question 2

// const numbers = [10, 20, 30, 40];

// const [...all] = numbers;

// console.log(all);

// 1. Output? ==> [10,20,30,40]


// 2. Spread or Rest? ==> rest bcuz it is collecting the array inside it and storing in a new variable


// 3. Why isn't there a first variable?  bcuz no first variable was defined 




// ---

// Question 3

// function student(name, ...marks) {
//     console.log(name);
//     console.log(marks);
// }

// student("Nitish", 90, 95, 100);

// 1. Output?  console.log(name); //"Nitish"
//     console.log(marks);  //90,95,100


// 2. Spread or Rest? rest because student values got stored in marks and and name was left  out which says collect this value




// ---

// Question 4

// This one is tricky.

// const person = {
//     name: "Nitish",
//     age: 25
// };

// const copy = person;

// copy.age = 30;

// console.log(person.age);

// What is the output? age will be 30

// And why? bcuz both person and copy are pointing to same object and when the copy age it mean change the age of person as both are pointing to same value


// ---

// Question 5

// const person = {
//     name: "Nitish",
//     age: 25
// };

// const copy = {
//     ...person
// };

// copy.age = 30;

// console.log(person.age); 25
// console.log(copy.age); 30

// Output? 

// Why? bcuz now copy has also its value its not now point to the value person hold so thats why if change in copy person wont be affected


// ---

// Question 6

// Predict the output.

// const nums = [1, 2, 3];

// const newNums = [0, ...nums, 4, 5];

// nums.push(100);

// console.log(nums); [1,2,3,100]
// console.log(newNums); [0,1,2,3,4,5] bcuz nums and newNums are different value from each other so when num has push 100 it actually only was for nums not for newNums as well thats why newNums didnt get modify


// ---

// Question 7 (Most Important)

// Without using the words Spread or Rest, explain what JavaScript is doing.

// const copy = [...arr]; here js is creating a variable copy and storing the values from arr isnide the copy and then both will have same values but with different variable and will not be same at all like any changes to copy will not affect the arr and same for arr

// Then explain this:

// function add(...numbers) {  //here numbers are a parameter who will accept the argument value inside it and can use those value whereever needed

// }

// Use your own words.


// ---

// Bonus Question ⭐⭐⭐⭐⭐

// Can you tell me why JavaScript uses the same ... syntax for two completely different jobs instead of inventing another symbol?
// i think both are kind of same job the difference is one is creating a new variable and other is seprating the value like something just clicked for me
// like spread will always have a already assigned variable inside it like you cannot create new variable and then say hypothetically store this value like this  const new = [...arr] ; as this will not work for spread if there was never a arr exist variable 
//and likewise the rest work this way like suppose a variable who has a array [1,2,3] and then i need to assign a new variable like this
//  const [first, ...new] = arr now here the interesting part is i dont actually new to specifically call new here i can actually put what ever i like say a , pick, one, second anything that the thing rest carry spread actually need a medium to store the but the rest can create a new one after the ... now after the dots come a new variable name thats what i can think of 

// This one has no right or wrong answer. I want to see how you think like a language designer. If you answer this well, I'll know you truly understand ... instead of just memorizing its name. 🚀


//-----------------------------

// const numbers = [5,10,15]

// const newNum = numbers.map(function (number) {
//     return number*2
// })

// console.log(newNum);


// =================>

    const cities = ["Delhi", "Mumbai", "Pune"];

  const upperCities = cities.find(function(city) {
    return  city.startsWith("D");
  });

  console.log(upperCities);

//   const num = [1,2,3,4];

//   const even= num.filter(
//     function (num) {
//         return num % 2 === 0;
        
//     }
//   )
//   console.log(even);
//    const num = [1,2,3,4];

//   const even= num.map(
//     function (num) {
//         if (num % 2 === 0) {
//             return num + "e"
//         } else {
//             return num
//         }  
        
//     }
//   )
//   console.log(even);
// 
//   What is the output?   ["DELHI", "MUMBAI", "PUNE"]
// Does cities change? no they do not map only iterate through the cities element not that it changes them as it consistently storing them in new variable upperCities 
// Why do we `return city.toUpperCase()` instead of just writing:  city.toUpperCase()   
//  cities.toUpperCase();  i think you meant to say this instead of city.toUppercase() right or maybenot 
//lets answer your question why we write this  city.toUpperCase(); without return right, so actually return does the main thing here like even if the map does its work and iterate over the elements it wont be able to store the new elements inside the uppCities bcuz when they make new element they wont understand what to do with it and only when did they have return do they will be able to store the cities inside the uppercities
//-----------------------------

