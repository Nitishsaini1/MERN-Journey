// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import {useState} from 'react';

import "./App.css";

function Header() {
  return <h1 className="center">My website</h1>;
}

function Main() {
  return <p>Welcome to my website!</p>;
}
const user = [
  { 
     id: 1,
    name: "KIRTI",
    age: 20,
    city: "Delhi",
    professional: "Software Engineer",
  },
  { 
     id: 2,
    name: "roti",
    age: 21,
    city: "Delhi",
    professional: "Software Engineer",
  },
  {
    id: 3,
    name: "Kiss",
    age: 21,
    city: "Delhi",
    professional: "Software Engineer",
  },
  {
    id: 4,
    name: "Aman",
    age: 21,
    city: "Delhi",
    professional: "Software Engineer",
  },
  { 
     id: 5,
    name: "Koert",
    age: 23,
    city: "Delhi",
    professional: "Software Engineer",
  } 
];
function UserCard({ name, age, city, professional }) {
  const [likes, changeLikes] = useState(0);
  return (
    <>
      <div className="center">
        -------------------------------------------------------------------------------
      </div>
      <div className="card">
        <h3>👤 {name || "Guest"}</h3>
        <p>Age  : {age || "Not entered"}</p>
        {/* <p>City :{city || "City not entered"}</p>
        <p>Professional : {professional || "profession not entered"}</p> */}
        <div>Like : {likes} </div>
        <button onClick = {()=>{changeLikes(likes+1)}} >Like</button>
      </div>
      {/* <div className="center">Ceneter</div> */}
    </>
  );
} 
function Footer() {
  return <p>© 2023 My website. All rights reserved.</p>;
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <h1>Users</h1>
      {user.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          // city={user.city}
          // professional={user.professional}
        />
      ))}
      

       
      <Footer />
    </>
  );
}

export default App;

// function App(){
//   console.log("App rendered");
//   const [banana, changeBanana] = useState(0); 
//   console.log("App rendered2" , banana)
//   return(
//     <>
//     <h1>{banana}</h1> 
//     <button onClick={()=> changeBanana(banana + 1)} >Add</button> 
   
//     </>
//   )
//     console.log("App rendered2") //why console.log is not working after return statement
// }

// export default App;