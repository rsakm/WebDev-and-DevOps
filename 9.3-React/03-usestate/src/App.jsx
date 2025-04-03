import { useState } from "react";

function App(){

  return(
    <>
    <div style={{background:"#dfe6e9", height:"100vh"}}>
      <ToggleMessage/>
    </div>
    </>
  )
}

function ToggleMessage(){
  const [isVisible, setIsVisible] = useState(false);

  return(
    <div>
      <button onClick={()=>setIsVisible(visible => !visible)} style={{padding:"4px"}}>
        Toggle Message
      </button>
      {isVisible && <p>This message is conditionally rendered! </p>}
    </div>
  )
}

export default App;