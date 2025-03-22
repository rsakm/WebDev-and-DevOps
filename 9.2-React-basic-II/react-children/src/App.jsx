import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
      <div>
      <Card>
        <h2>Card Title</h2>
        <p>Card 1 content</p>
      </Card>
      <Card><h2>Another Card</h2>
      <p>Card 2 content</p>
      </Card>
      </div>
   </>
  );
  
}


function Card({children}){

  return <>
   <div style={{border:"1px solid #ccc", borderRadius:'5px', padding:'20px', margin:'10px', boxShadow:'2px 2px 5px rgba(0,0,0,0.1)', }}>

    {children}

  </div>
  </>
}
export default App
