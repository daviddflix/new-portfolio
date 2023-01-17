import s from './home.module.css'
import {BsInstagram} from 'react-icons/bs'
import React, { Suspense, useState } from 'react';
import useWindowDimensions, {Model} from '../../../Model'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

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
         <Avatar/>
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

const query = {
  backgroundColor: '#282828',
  width: '15vw',
  height: '60vh',
  position: 'absolute',
  top: '3.6rem',
  right: '14rem',
  zIndex: '-1',
 
}

const query1 = {
  backgroundColor: '#282828',
  width: '30vw',
  height: '20vh',
  position: 'absolute',
  top: '3.5rem',
  right: '2rem',
  zIndex: '-1',
 
}


 function Avatar() {

  const { height, width } = useWindowDimensions()

  return (
     <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={width > 800? query : query1}
     >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} /> 
        </Suspense>
        {/* <OrbitControls /> */}
     </Canvas>
  );
}