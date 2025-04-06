import { useEffect } from 'react'
import { useState } from 'react'



function App() {
  // const [count, setCount] = useState(0)
  const [showTimer, setShowTimer] = useState(true)

  useEffect(()=>{
    let timeShow = setInterval(()=>{
      setShowTimer(timer=>!timer)
    },5000)

    // cleanup
  return function(){
    clearInterval(timeShow)
  }
  },[])

  
  return (
    <>
      <div>
        {showTimer && <Timer/>}
      </div>
    </>
  )
}

const Timer = ()=>{

  const [seconds, setSeconds] = useState(0)

  useEffect(()=>{
    let clock = setInterval(()=>{
      setSeconds(prev=>prev+1)
    },1000);

    // // cleanup
    return function(){
      clearInterval(clock)
    }

  },[]);

  return <div>
    {seconds} seconds elapsed
  </div>
}

export default App
