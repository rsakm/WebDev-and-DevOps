import { useEffect, useState } from 'react'
import './App.css'

// // conditional rendering --> when we want to render something or sometimes we don't 
//  // Based on a certain condition, render a component

function App() {
  // let timerVariable = true;

  let [timerValue, setTimerValue] = useState(true);

  let toggleTimer = useEffect(function (){
    setInterval(function (){
      setTimerValue((prev) => !prev)
    },5000)

    return ()=>clearInterval(toggleTimer)
  },[]);
  
  return (
    <>
    <p>Hi</p>
     {/* <Counter></Counter> */}
     {timerValue ? <Timer></Timer> : null}
     {/* {timerValue && <Timer></Timer>} */}

     <div style={{visibility: timerValue ? 'visible' : 'hidden'}}><Timer/></div>
     <p>Hello</p>
    </>
  )
}

function Timer(){

const [time, settime] = useState(0)

console.log("Inside counter component");

// setInterval(() => {
//   settime(time+1)
  
// }, 1000);

/*
// Hooking into the lifecycle events of React : mounting, Re-rendering, unmounting  ---> useEffect

*/

useEffect(()=>{
console.log("on mount");
  let clock = setInterval(function() {
    settime((time)=>time+1)
  }, 1000);
  console.log("Mounted");
  

  return function(){
    console.log("On un-mount");
    clearInterval(clock);  //// unmounting/cleanup
  }
},[])  // // dependency array


// // dependency array, cleanup & fetch inside useEffect
  return <>
  
    <h1>{time}</h1>
  </>
}



export default App
