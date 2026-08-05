// const minus = document.createElement("button")
// minus.textContent = "-";
// document.body.appendChild(minus)
// const count = document.createElement("div")
// count.textContent = 0;
// document.body.appendChild(count)
// const plus = document.createElement("button")
// plus.textContent = "+";
// document.body.appendChild(plus)

// let counter = 0;
// const minusMake = () => {
//     counter--;
//     render()
// }
// const plusMake = ( ) =>{
//     counter ++;
//    render()
// }

// function render() {
//       count.textContent = counter;
// }

// plus.addEventListener("click", plusMake)
// minus.addEventListener("click" , minusMake)


// //tere bin jana me nhi jina

import {useState} from "react";

function App() {
    const [count, setCount ] = useState(0);
const increaseCount =()=>{
    setCount(count+1);
}
    return (
        <>
<h1>{count}</h1>
<button onClick={increaseCount}>Increase</button>
        
        </>
    );
}


export default App;