import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <BrowserRouter>
        <Link to="/">Allen</Link> | 

        <Link to="/neet/online-coaching-class-11" >Class 11</Link>| 

        <Link to="/neet/online-coaching-class-12" >Class 12</Link>

        <Routes>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />

          <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />

          <Route path='/' element={<LandingPage />} />

          <Route path='*' element={<ErrorPage/>} />
        </Routes>

        Footer | Contact Us
        </BrowserRouter>
      </div>
    </>
  )
}

function LandingPage(){
  return <div>
    Welcome to allen
  </div>
}


function Class11Program(){

  return <div>
    NEET programs for Class 11th
  </div>
}


function Class12Program(){
  const navigate = useNavigate();

  function goBacktoLanding(){
    navigate("/")
  }

  return <div>
    NEET programs for Class 12th
    <button style={{cursor:'pointer'}} onClick={goBacktoLanding}>Go back to Home page</button>
  </div>
}

function ErrorPage(){
  return <div>
    No Such page exists
  </div>
}

export default App
