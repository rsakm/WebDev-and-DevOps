import { useEffect } from 'react';
import { useState } from 'react'

// // side effects

function App() {
  const [count, setCount] = useState(0)

  function increaseCount(){
    console.log("Increase count");
    setCount(prevCount=>prevCount+1);
  }

  useEffect(()=>{
    console.log("Set interval");
    setInterval(increaseCount,1000);
  },[])

  return (
    <>
    <div>{count}</div>
    </>
  )
}

export default App
