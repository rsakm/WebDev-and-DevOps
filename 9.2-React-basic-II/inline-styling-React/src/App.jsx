import React from "react";

const App = ()=>{


  return (<div>
<MyComponent></MyComponent>
  </div>
  
);

}

function MyComponent(){
  return(
    <div style={{backgroundColor:'blue',color:'white', padding:'10px', textAlign:'center'}}>
      Inline Styling
    </div>
  )
}


export default App;