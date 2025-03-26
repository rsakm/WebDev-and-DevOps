
import React, { useState } from "react";

const BulbContext = React.createContext();   ///context (As a container for the data we want to share)

function App(){

  const [bulbOn, setBulbOn] = useState(true);

  return <div>

    {/* Provider is used to wrap the components that need access to the context. Here we have declared the bulbOn state which we want to share with the child components of App at any level*/}

    <BulbContext.Provider value={{bulbOn:bulbOn, setBulbOn:setBulbOn}}>     
    <Light/>
    </BulbContext.Provider>
  </div>
}

function Light(){

  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb(){
  const bulbOn = React.useContext(BulbContext);

  // // Consumer is used to wrap the components that need access to the context being provided by one of its parents.

  return <div>
    {bulbOn.bulbOn ? "Bulb is on" : "Bulb is off"}

  </div>
}

function LightSwitch(){
  const  {setBulbOn} = React.useContext(BulbContext);

  return <div>
    <button onClick={()=>{setBulbOn(bulbOn =>!bulbOn)}}>Toggle the Bulb</button>
  </div>
}


export default App


