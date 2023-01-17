import { useState } from 'react'
import './App.css'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Home from './Components/Home/home'
import Nav from './Components/Nav/nav'
import Projects from './Components/Projects/projects'
import {BsArrowUp} from 'react-icons/bs'

function App() {

  const top = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="App">
       <Nav/>
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
       <BsArrowUp onClick={top} className='arrow'/>
    </div>
  )
}

export default App
