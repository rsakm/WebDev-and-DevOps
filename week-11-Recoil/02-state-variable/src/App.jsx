import { useState } from "react"


function App() {
  

  return (
   <>
   <Counter/>
   </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <Value count={count}/>
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />

    </div>
  )
}

function Value({count}){
  return(
    <div style={{textAlign:'center', width:'130px'}}>{count}</div>
  )

}


function Increase({setCount}){
  return(
    <span>
      <button onClick={()=>setCount(count=>count+1)} >Increase</button>
    </span>
  )
}
function Decrease({setCount}){
  return(
    <span>
      <button onClick={()=>setCount(count=>count-1)} >Decrease</button>
    </span>
  )
}

export default App
