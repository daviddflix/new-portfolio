import { Suspense } from "react";
import { Model } from "../../../../Model";
import useWindowDimensions from "../../helper/getWindowSize";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const query = {
    backgroundColor: '#282828',
    width: '15vw',
    height: '50vh',
    position: 'absolute',
    top: '5%',
    right: '13rem',
    zIndex: '-1',
   
  }
  
  const query1 = {
    backgroundColor: '#282828',
    width: '30vw',
    height: '30vh',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    zIndex: '-1',
   
  }
  
  
  export default function Avatar() {
  
    const { width } = useWindowDimensions()
  
    return (
       <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={width > 800? query : query1}
       >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
          <Model position={[0.025, -1.5, 0]} /> 
          </Suspense>
          {/* <OrbitControls /> */}
       </Canvas>
    );
  }