// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function Header() {
  return(
     
    <h1 className="center">My website</h1>
  
  )
}
 
function Main() {
  return(
  
    <p>Welcome to my website!</p>
 
  )
}
function UserCard({name,age,city,professional}){

  return(
    
    <>
    <span>----------------------</span>
    <div className="card">
      
    <h3>👤 {name || "Guest"}</h3>
    <p>Age : {age || "Not entered"}</p>
    <p>City :{city  || "City not entered"}</p>
    <p>Professional : { professional || "profession not entered"}</p>
    </div>
    {/* <div className="center">Ceneter</div> */}
    </>
  )
}

function Footer() {
  return(
    <p>© 2023 My website. All rights reserved.</p>
  )
}

function App() {
  // const [count, setCount] = useState(0)
 return(
  <> 
  <Header />
  <Main />
  <UserCard name="Raj" age={20}    city={"Delhi"} professional={"Scientist"}      />
   <UserCard name="Aman" age={21}  city={"Mumbai"} professional={"Designer"}      />
  <UserCard name="Priya" age={23 } city={"Pune"} professional={"Teacher"}/>
  <Footer />

</>
 )
}


 


export default App
