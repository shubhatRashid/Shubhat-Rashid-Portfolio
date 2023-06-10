import React from 'react'
import CanvasLoader from "../Loader"
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf")
  return (
    <mesh>
      <primitive 
      object={earth.scene} 
      scale = {2.25}
      position-y ={0}
      rotation-y = {0}
      />
    </mesh>
  )
}

const EarthCanvas = () =>{
  return (
    <Canvas
      frameloop= "demand"
      shadows
      camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]}
        }
      gl={{preserveDrawingBuffer :true}}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate = {true}
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}
export default EarthCanvas