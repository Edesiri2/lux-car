import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Login from './components/login';
import Register from './components/Register'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    < Navbar/>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path ='/Register' element={<Register/>}/>
    </Routes>
    
   
    
    
    
   </div>
 </BrowserRouter>
  )   
}

export default App;
