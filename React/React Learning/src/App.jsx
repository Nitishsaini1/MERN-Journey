// // import {useState} from 'react';

// // function Header() {
// //   return <h1 className="center">My website</h1>;
// // }
// // function Main() {
// //   return <p>Welcome to my website!</p>;
// // }
// // const user = [
// //   {
// //      id: 1,
// //     name: "KIRTI",
// //     age: 20,
// //     city: "Delhi",
// //     professional: "Software Engineer",
// //   },
// //   {
// //      id: 2,
// //     name: "roti",
// //     age: 21,
// //     city: "Delhi",
// //     professional: "Software Engineer",
// //   },
// //   {
// //     id: 3,
// //     name: "Kiss",
// //     age: 21,
// //     city: "Delhi",
// //     professional: "Software Engineer",
// //   },
// //   {
// //     id: 4,
// //     name: "Aman",
// //     age: 21,
// //     city: "Delhi",
// //     professional: "Software Engineer",
// //   },
// //   {
// //      id: 5,
// //     name: "Koert",
// //     age: 23,
// //     city: "Delhi",
// //     professional: "Software Engineer",
// //   }
// // ];
// // function UserCard({ name, age, city, professional }) {
// //   const [likes, changeLikes] = useState(0);
// //   return (
// //     <>
// //       <div className="center">
// //         -------------------------------------------------------------------------------
// //       </div>
// //       <div className="card">
// //         <h3>👤 {name || "Guest"}</h3>
// //         <p>Age  : {age || "Not entered"}</p>
// //         {/* <p>City :{city || "City not entered"}</p>
// //         <p>Professional : {professional || "profession not entered"}</p> */}
// //         <div>Like : {likes} </div>
// //         <button onClick = {()=>{changeLikes(likes+1)}} >Like</button>
// //       </div>
// //       {/* <div className="center">Ceneter</div> */}
// //     </>
// //   );
// // }
// // function Footer() {
// //   return <p>© 2023 My website. All rights reserved.</p>;
// // }
// // function App() {
// //   // const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <Header />
// //       <Main />
// //       <h1>Users</h1>
// //       {user.map((user) => (
// //         <UserCard
// //           key={user.id}
// //           name={user.name}
// //           age={user.age}
// //           // city={user.city}
// //           // professional={user.professional}
// //         />
// //       ))}

// //       <Footer />
// //     </>
// //   );
// // }
// // export default App;
// import "./App.css";
// import { useState } from "react";

//   let nextId = 1;

// function Todo() {

//   const [text, setText] = useState("");
//   const [todos, setTodos] = useState([]);
  
//   function addTodo(){ 
//     const newTodos = {
//       completed:false,
//     id: nextId,
//     text: text
//     };
//  setTodos([...todos, newTodos]);
//  nextId=nextId+1;
//  setText("");
  
// } 

     
// return (
//     <> 
//     <input
//         type="text"
//         placeholder="Enter the todo"
//         value={text}
        
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={addTodo}>Add Todo</button> 
//       <div>
//         { todos.map((todo) => {            
//           return  ( 
//             <div className="flex"  key={todo.id}>
//             <input  
          
//             type="checkbox" 
//             checked={todo.completed}
//             onChange={(e)=> {
//               setTodos(
//                 todos.map((currentTodo) =>
//                 currentTodo.id === todo.id 
//                 ? {...currentTodo , completed:e.target.checked}   
//                 : currentTodo
//                  ) 
//                 );
//             }}
//             />
//             <p  style={ todo.completed  ?  {textDecoration: "line-through"  } : {textDecoration: "none"  }}> 
//               {todo.text} </p>
//             <button onClick={()=>{
//              const filterTodo = todos.filter((todo)=>{
//               return todo.id !== todo.id ; 
//              });
//              console.log("run")
//              setTodos(filterTodo);
//              console.log(filterTodo)
//             }} >
//               Delete
//             </button>
          
//             </div>
             
//         )
//         })} 
//       </div> 
//     </>
//   ); 
// }

// function App() {
//   return (
//     <>
//       <Todo />
//     </>
//   );
// }

// export default App;
 



import "./App.css";
import { useState } from "react";

let nextId= 1;

function Todo(){
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  function addTodo(){
    const newTodos={
      id:nextId,
      completed:false,
      text:text
    }
    nextId = nextId+1;
    setTodos([...todos, newTodos])
    console.log(nextId)
    console.log(newTodos)
    setText("")
  }console.log(todos)
    function handleToggle(id,checked){
       setTodos( 
          todos.map((currentTodo)=>{
      const newTodo= []
      return(
        currentTodo.id===id? {...currentTodo, completed:checked} : currentTodo
       
      )
    })
       )
  
  }
  return (
    <>
    <input placeholder="Please Enter the todo" value={text} onChange={(e)=>{
      setText(e.target.value)
    }}></input>
    <button onClick={addTodo} >Add todo</button>
    <div>
      {
      todos.map((todo)=>{
        return (
         <TodoItem key={todo.id} todo={todo}/> 
      
        )
        
      })
    }    </div>
    </>
      )
 


}
function TodoItem(item){
   return <p   >{item.todo.text}</p>
}
function App(){
  return (<>
  <Todo/>
  </>)
}

export default App;

  // <div className="flex  " key={todo.id}>
          //   <input type="checkbox" 
          //   onClick={(e)=>{
          //     return ( 
          //   setTodos( todos.map((currentTodo)=>{
          //         return( 
                  
          //             currentTodo.id === todo.id  ?  
          //             {...currentTodo, completed:e.target.checked}
          //             : currentTodo
                 

          //         )
          //       }
          //   )
          // )
          //     )
          //   }}
          //   />
          //   <p  
          //   style={
          //     todo.completed
          //     ? {textDecoration:"line-through"}
          //     :{textDecoration:"none"}
          //   }
            
          //   >{todo.text}</p>
          //   <button className="button" 
          //   onClick={()=>{
          //     const newTodos=
          //       todos.filter((currentTodo)=>{
          //       return  currentTodo.id !== todo.id
          //       })
          //       setTodos(newTodos)
              
          //   }}
          //   >Delete</button>
          // </div>