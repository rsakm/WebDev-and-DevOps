import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
     <Counter></Counter>
     <Timer></Timer>
    </>
  )
}


function Counter(){
  // let count = 0

  const [count, setCount] = useState(0)


  function increaseCount(){
    //  count++;
    setCount(count+1);
    //  console.log(count);
  }

  function decreaseCount(){
    setCount(count-1)
  }

  function resetCount(){
    setCount(0)
  }
  return <div>
    <h1 id='text'>{count}</h1>
    <button onClick={increaseCount}>Increase Counter</button>
    <button onClick={decreaseCount}>Decrease Counter</button>
    <button onClick={resetCount}>Reset</button>
  </div>
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
  setInterval(function() {
    settime((time)=>time+1)
  }, 1000);
  console.log("Mounted");
},[])  // // dependency array


// // dependency array, cleanup & fetch inside useEffect
  return <>
  
    <h1>{time}</h1>
  </>
}



export default App
