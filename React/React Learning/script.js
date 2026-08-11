const todos = ["learn react", "build todos"];
const oldTodos = todos;
// todos.push("practice js");
const newTodos = [...todos, "practice js"];
console.log("todos",todos);
console.log("oldTodos",oldTodos);
console.log("same array", todos === oldTodos);


console.log("newTodos",newTodos);
console.log()