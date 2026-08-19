import {useState} from 'react'

function Counter(){
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(5)
    const [stepInput, setStepInput] = useState("5")
    return(
        <>
        <h1>{counter}</h1>
        <input
        placeholder="Please enter the number"
        value={stepInput}
        onChange={(e)=>{
            setStepInput(e.target.value)
            const rawValue = Number(e.target.value)
            if(rawValue > 0){
                setStep(rawValue)
            }
        }}
        onKeyDown={(e)=>{
            if(e.key=== "ArrowDown"){
                console.log("Work")
                setCounter(counter - step)
            }else if(e.key === "ArrowUp"){
                setCounter(counter + step)
            }
        }}
        />
        <button
        onClick={()=>{
            setCounter(counter + step)
        }}
        >Increase</button>
        <button
        onClick={()=>{
            setCounter(counter - step)
        }}
        >Decrease</button>
        <button onClick={()=>{
            setCounter(0)
        }}>Reset</button>
        </>
    )

}

export default Counter