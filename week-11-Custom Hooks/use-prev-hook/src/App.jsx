import { useState } from 'react'
import usePrev from './hooks/usePrev'


function App() {
  const [count, setCount] = useState(0)
  const prev = usePrev(count);

  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(prevCount=>prevCount+1)} >Click</button>
      <p>The previous count was {prev}</p>
    </>
  )
}

export default App
