import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      {/* <Footer /> */}
    </>
  )
}

export default App

// components for 
// info
// about
// interests
// footer