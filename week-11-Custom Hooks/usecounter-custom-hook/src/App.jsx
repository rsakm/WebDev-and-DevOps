import { useState } from 'react'



// // Custom Hook
function useCounter(){
  const [count, setCount] = useState(0)

  function increaseCount(){
    setCount(count=>count+1);
  }

  function decreaseCount(){
    setCount(count=>count-1);
  }

  return {count , increaseCount , 
    decreaseCount}

}

function App() {
  // const [count, setCount] = useState(0)

  const {count,increaseCount} = useCounter();

  return (
    <>
     

      {/* <button onClick={()=>{setCount(count=>count+1)}} >Increase {count}</button> */}

      <button onClick={increaseCount}>Increase {count} </button>
    </>
  )
}

export default App
