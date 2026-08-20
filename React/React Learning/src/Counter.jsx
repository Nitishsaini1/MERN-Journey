import {useState} from 'react'

function Counter(){
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(5)
    const [stepInput, setStepInput] = useState("5")

    function increase(){
        setCounter(counter + step)
    }
     function decrease(){
        setCounter(counter - step)
    }
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
      
        <button onClick={()=>{
            setCounter(0)
        }}>Reset</button>
        <Display 
        counter={counter}
        increase={increase}
        decrease={decrease}
        
        />
        </>
    )

}

function Display(props){
    return<>
    <h1>{props.counter}</h1>
      <button onClick={ props.increase}>Increase</button>

        <button onClick={ props.decrease}>decrease</button>
        
    </>
}
export default Counter