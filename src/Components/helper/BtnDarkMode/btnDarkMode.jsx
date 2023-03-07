
import React, { useContext } from 'react';
import {BsFillSunFill} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'
import { ThemeContext } from '../../../App';
import s from '../BtnDarkMode/DarkMode.module.css'

export default function BtnDarkMode() {

  const {theme, Toggle} = useContext(ThemeContext)

  return (
     <button className={theme === 'Light'? s.btnDarkModeLight : s.btnDarkModeDark} onClick={Toggle}>{theme === 'Light' ? <BsFillMoonFill className={s.moon}/>: <BsFillSunFill className={s.sun}/>}</button>
  );
}