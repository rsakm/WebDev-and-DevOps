import { useState , useContext, createContext} from 'react'

const BulbContext = createContext();

// // To make the codebase cleaner and more readable, we can wrap the components that need access to the context in a wrapper component.
// // we can pass children as a prop to the wrapper component and render them inside it.
// // So BulbProvider is a wrapper component.

function BulbProvider({children}){

  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{bulbOn:bulbOn, setBulbOn:setBulbOn}}>

    {children}

  </BulbContext.Provider>

}

function App() {
  

  return (
    <>
    {/* Provider */}
     <BulbProvider>
      <Light/>
     </BulbProvider>
    </>
  )
}

function Light(){

  return <div>
    <LightBulb/>
    <LightSwitch/>
  </div>
}

function LightBulb()
{

  const bulbOn = useContext(BulbContext);

  return <div>
    {bulbOn.bulbOn ? "Bulb is on" : "Bulb is off"}
  </div>

}

function LightSwitch(){
const {setBulbOn} = useContext(BulbContext);
  return <div>
    <button onClick={()=>{setBulbOn(bulb => !bulb)}} >Toggle the Bulb</button>
  </div>
}
export default App
