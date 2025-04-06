import { useEffect } from 'react';
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  function increaseCount(){
    setCount(prevCount=>prevCount+1);
  }

  useEffect(()=>{
    setInterval(increaseCount,1000)
  },[])

useEffect(()=>{
  console.log("Count has been updated");
},[count])

  return (
    <>
     <div>{count} </div>
    </>
  )
}

export default App
