import {useState} from 'react'

function Counter(){
    const [counter, setCounter] = useState(0)
    const [step, setStep] = useState(0)

return(
    <>
    <h1>{counter}</h1>
       {console.log(step)}
    <input 
    type="number"
    value={step}
    placeholder="Enter the number" 
    
    onChange={(e)=>{
        const value = (Number(e.target.value))
        if(value > 0){
            setStep(value)
        }
    }} />
    <button onClick={()=>{
        setCounter(counter+step)
    }} >+</button>
    <button onClick={()=>{
        setCounter(counter-step)
    }} >-</button>
    <button onClick={()=>{setCounter(0)}}>Reset</button>
 
    </>
)
}

export default Counter;