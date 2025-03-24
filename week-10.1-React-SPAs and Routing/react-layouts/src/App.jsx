import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";


function App() {

  return (
    <>
      <div>
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >

              <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />

               <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />

               <Route path='/' element={<LandingPage />} />

                <Route path='*' element={<ErrorPage/>} />
          
          </Route>
        </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

function Layout(){
  return <div style={{height:'100vh'}} >

    <Header/>
    <div style={{height:'90vh', background:'grey', marginTop:'16px'}} >
    <Outlet />
    </div>

    Footer | Contact Us
  </div>
}


function Header(){
  return <div>

    
<Link to="/">Allen</Link> | 

<Link to="/neet/online-coaching-class-11" >Class 11</Link>| 

<Link to="/neet/online-coaching-class-12" >Class 12</Link>

  </div>
}
function LandingPage(){
  return <div style={{padding:'8px', textAlign:'center'}}>
    Welcome to allen
  </div>
}


function Class11Program(){

  return <div style={{padding:'8px', textAlign:'center'}}>
    NEET programs for Class 11th
  </div>
}


function Class12Program(){
  const navigate = useNavigate();

  function goBacktoLanding(){
    navigate("/")
  }

  return <div style={{padding:'8px', textAlign:'center'}}>
    NEET programs for Class 12th
    <button style={{cursor:'pointer' }} onClick={goBacktoLanding}>Go back to Home page</button>
  </div>
}

function ErrorPage(){
  return <div style={{padding:'8px', textAlign:'center' }}>
    No Such page exists
  </div>
}

export default App