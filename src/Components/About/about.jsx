import s from './about.module.css'
import img from '../../assets/profilePic.png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function About(){

  useEffect(() => {
    AOS.init({duration: 2000})
})

    return(
     
        <div id='about' className={s.main}>
            <div className={s.containerPic}>
                <img src={img} className={s.profile} alt='Profile'/>
            <h3 className={s.p}>I'm a Full-stack developer with a great learning capacity, adaptability to new technologies, and a very passionate person.</h3>
            </div>
            <div  data-aos="zoom-in"className={s.submain}>
                <div className={s.containerIcons}>
                   <h4 className={s.title}>Basic</h4>
                   {
                    basic.map(p => {
                      return( 
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
                <div className={s.containerIcons}>
                <h4 className={s.title}>Intermidiate</h4>
                  {
                    intermidiate.map(p => {
                      return(
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
                <div className={s.containerIcons}>
                <h4 className={s.title}>Advanced</h4>
                {
                    advanced.map(p => {
                      return(
                        <Skills key={p.skill} tech={p.skill} porcentaje={p.porcentaje}/>
                      )
                    })
                   }
                </div>
            </div>
        </div>
      
    )
}

 export function Mark ({section}){
  return(
    <h4 className={`${s.about} ${s.mainTitle}`}>{section}</h4>
  )
}

const advanced = [{skill: 'CSS & HTML5', porcentaje: '45%'}, 
{skill: 'React', porcentaje: '70%'},
{skill: 'Node', porcentaje: '65%'},
{skill: 'PostgreSQL', porcentaje: '60%'},
{skill: 'Express', porcentaje: '70%'}]
const intermidiate = [{skill: 'React Native', porcentaje: '30%'}, {skill: 'Git', porcentaje: '40%'}, {skill: 'Github', porcentaje: '40%'}  ]
const basic = [{skill: "GraphQL", porcentaje: '20%'}, {skill: 'Electron', porcentaje: '25%'} ]


function Skills({porcentaje, tech}){
  return(
    <div className={s.mainSkills}>
       <h3 className={s.subMainSkills}>{tech}</h3>
       <div className={s.progress}>
          <div className={s.progressBar} style={{width: porcentaje}}>
              <span className={s.progressBarText}></span>
          </div>
      </div>
    </div>
  )
}




