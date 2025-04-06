import { useEffect } from 'react'
import { useState } from 'react'


function App() {
  const [currTab, setCurrTab] = useState(1)
  const [currData, setCurrData]= useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    // send a backend request to get data for this tab
    setLoading(true)

    fetch(`https://jsonplaceholder.typicode.com/todos/${currTab}`)
    .then((res)=>res.json())
    .then((data)=>{
      // console.log(data);
      setCurrData(data)
      setLoading(false)
    })


  }, [currTab])


  return (
    <>
     <div>
      <button onClick={()=>setCurrTab(1)} style={{color: currTab === 1 ? "red" : "black"}} >ToDo1</button>

      <button onClick={()=>(setCurrTab(2))} style={{color: currTab === 2 ? "red" : "black"}}>ToDo2</button>

      <button onClick={()=>(setCurrTab(3))} style={{color: currTab === 3 ? "red" : "black"}}>ToDo3</button>

      <button onClick={()=>(setCurrTab(4))} style={{color: currTab === 4 ? "red" : "black"}}>ToDo4</button>

      {loading ? <p>Loading...</p> : currData.title && <h3>{currData.title}</h3>}

     </div>
    </>
  )
}

export default App
