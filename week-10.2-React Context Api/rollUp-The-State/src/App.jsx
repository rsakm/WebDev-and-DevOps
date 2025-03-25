
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

    <LightBulb/>
    </>
  )
}


function LightBulb(){
  const [bulbState, setBulbState] = useState(true);

  return <>
  <BulbState bulbState = {bulbState}/>
  <ToggleBulbState setBulbState = {setBulbState} />

  </>
}

function BulbState({bulbState}){

  // const [bulbState, setBulbState] = useState(true);


  return<>
  {
    bulbState ? <div>On</div> :<div>off</div>
  }
  </>
}

function ToggleBulbState({setBulbState}){

  return <>
  <button onClick={()=>setBulbState(bulbState => !bulbState)} >Toggle the bulb</button>
  </>

}


export default App
