import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../../../Model'; /* highlight-line */


export default  function Home(){

    return(

          <div className={s.main}>
            <div className={s.subMain}>
                 <h3 className={s.title}>HELLO</h3>
                <h3 className={s.subtitle}>I'm</h3>
                  <div className={s.containerName}>
                    <h3 className={s.name}>David P.</h3>
                    <h3 className={s.lastname}>Rodriguez</h3>
                    
                  </div>
               <span className={s.spanline}></span>
                  <span className={s.role}>Full Stack Developer</span>
            </div>
           {/* <div className={s.containerModel}> */}
         
          {/* </div>  */}
            <div className={s.containerFollow}>
                <h3 className={s.follow}>Follow Me</h3>
                <span className={s.line}></span>
                <a href='https://www.instagram.com/daviddflix/' className={s.instaBox}>
                <BsInstagram className={s.instagram}/>
                </a>
            </div>
        </div>
    )
}



function Avatar() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 10 }}
         style={{
            position: 'absolute',
            top: '3rem',
            right: '0',
            width: '50vw',
            height: '50vh',
            // border: '1px solid #fff'
          
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
         </Suspense>
         {/* <OrbitControls /> */}
      </Canvas>
   );
}
