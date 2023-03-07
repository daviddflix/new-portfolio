import s from './footer.module.css'
import {BsLinkedin} from 'react-icons/bs'
import whatsapp from '../../assets/whatsapp.png'
import github from '../../assets/github.png'

export default function Footer(){

    const link =`https://wa.me/5491137858227?text=Hi%20`

    const linkedIn = 'https://www.linkedin.com/in/david-pajaro-rodriguez-0129109b/'

    return(
        <div className={s.main}>
            <div className={s.submain} >
                <a href='https://github.com/daviddflix'>
                <img className={s.icon} src={github} alt='Github'/>
                </a>
                <a href={link}>
                <img className={s.icon} src={whatsapp} alt='Whatsapp'/>
                </a>
                <a href={linkedIn}>
                <BsLinkedin  className={s.icon} />
                </a>
            </div>
            <div className={s.containerFirm}>
                <h3 className={s.doneBy}>Done by</h3>
                <h3 className={s.name}>David</h3>
            </div>
        </div>
    )
}