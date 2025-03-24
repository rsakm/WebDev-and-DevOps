import { useState } from 'react'

import './App.css'
import { useRef } from 'react'

// // UseRef: 2 useCases:-
// // 1. Focussing on an input box
// // 2. reference to a value, such that when u change the value, the component does not re-render

function App() {
  // const [count, setCount] = useState(0)


  // // There are three ways to declare a variable in react:
  // // let value = 1;   // as a raw variable  ---> rarely used
  // // const[value, setValue] = useState(1); // as a state variable
  // // const valueRef = userRef(); // using useRef

  const inputRef = useRef();

  function focusOnInput(){
    inputRef.current.focus();
  }

  return (
    <>
     <div>
      {/* Focusing on input box */}
      Sign up
      <input ref={inputRef} type='text' ></input>
      <input type='text' ></input>
      <button onClick={focusOnInput} >Submit</button>
      <br/> <br/> <br/> <br/> <p>Clock</p>



{/* // Clock for understanding second useCase of useRef */}

<Clock/>
     </div>
    </>
  )
}


// // A clock with a start and stop button

function Clock(){
  const [currentCount, setCurrentCount] = useState(0);

  // const [timer, setTimer] = useState();  ///---> rather than using useState, we should use useRef when we want something to percist across rerenders but we don't want to rerender the component itself
  const timer = useRef();

  function startClock(){
    let time = setInterval(() => {
      setCurrentCount((count)=>count+1)
    }, 1000);

    // setTimer(time);  ////extra rerendering 
    timer.current = time;
  }
  function stopClock(){
   console.log(timer);
    clearInterval(timer.current)
  }

  return <div>
    {currentCount} <br/> <br/>
    <button onClick={startClock} >Start</button>
    <button onClick={stopClock} >Stop</button>
  </div>
}

export default App
