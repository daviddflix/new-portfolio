import { useState } from 'react'
import './App.css'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Nav from './Components/Nav/nav'

function App() {

  return (
    <div className="App">
       <Nav/>
       <About/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
