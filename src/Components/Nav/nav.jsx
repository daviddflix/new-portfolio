import {VscProject} from 'react-icons/vsc'
import {RiFileInfoLine} from 'react-icons/ri'
import {RiContactsBook2Line} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import logo from '../../assets/MyLogo.png'
import s from './nav.module.css'
import cv from '../../assets/cv.pdf'
import {BsDownload} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import BtnDarkMode from '../helper/BtnDarkMode/btnDarkMode'

const Nav = () => {
 
  const [open, setOpen] = useState(false)
  

  const contact = () => {
    window.location.replace("/#contact");
    setOpen(false)
    document.body.style.overflow = "visible"
  }
  const home = () => {
    window.location.replace("/#home");
    setOpen(false)
    document.body.style.overflow = "visible"
  }
  const portfolio = () => {
    window.location.replace("/#portfolio");
    setOpen(false)
    document.body.style.overflow = "visible"
  }
  const about = () => {
    window.location.replace("/#about");
    setOpen(false)
    document.body.style.overflow = "visible"
  }

  const menuBars = () => {

    if(open === false){
      document.body.style.overflow = "hidden"
      setOpen(true)
    } else {
      document.body.style.overflow = "visible"
      setOpen(false)
    }

  }

  console.log(open)

  return (
   <div id='containerLinks' className={s.main}>
    <FaBars onClick={menuBars} className={s.bars}/>
      <img src={logo} className={s.logo} alt='Logo'/>
        <div  style={open === false ?{left: '-100%'}: {left: 0}} className={s.containerLinks}>
          <div onClick={home} className={s.subContainerLink}>
              <AiOutlineHome className={s.linkIcon}/>
              <h3 className={s.link}>Home</h3>
          </div>
          <div onClick={about} className={s.subContainerLink}>
              <RiFileInfoLine className={s.linkIcon}/>
              <h3 className={s.link}>About Me</h3>
          </div>
          <div onClick={portfolio} className={s.subContainerLink}>
              <VscProject className={s.linkIcon}/>
              <h3 className={s.link}>Portfolio</h3>
          </div>
          <div onClick={contact} className={s.subContainerLink} >
              <RiContactsBook2Line className={s.linkIcon}/>
              <h3 className={s.link}>Contact</h3>
          </div>
         
        {/* <BtnDarkMode/> */}
       
        </div>
        <a href={cv} download={cv} className={s.containerDownload}>
        <h3 className={s.download}>DOWNLOAD CV</h3>
          <BsDownload className={s.downloadIcon}/>
        </a>
   </div>
  );
};

export default Nav