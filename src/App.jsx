import { useState } from 'react'
import './App.css'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import Nav from './Components/Nav/nav'
import Projects from './Components/Projects/projects'

function App() {

  return (
    <div className="App">
       <Nav/>
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
