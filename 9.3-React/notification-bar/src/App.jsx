import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{background:"#dfe6e9", height:"100vh"}} >
      <NotificationBar/>
      <br></br>
      <NotificationBar/>
      </div>
    </>
  )
}


function NotificationBar(){
  let[notificationCount, setNotificationCount] = useState(0);

  function increment(){
    setNotificationCount(count=>count+1);

  }

  return(
    <div>
    <button onClick={increment} style={{padding:"4px"}} >Increase Count</button>
    {notificationCount}
    </div>
  )
}

export default App
