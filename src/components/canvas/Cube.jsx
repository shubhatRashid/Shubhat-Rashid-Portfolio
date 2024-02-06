import CanvasLoader from "../Loader"
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Loader = () => {
  return (
    <div className="text-xl text-indigo-500 h-[400px] flex justify-center items-center">
      <h1>Loading ...</h1>
    </div>
  )
}
export default function Cube() {
  return (
    
      <Suspense fallback={<Loader/>}>
        <Spline scene="https://prod.spline.design/ibZgDc2alkHGJDBn/scene.splinecode" />
      </Suspense>
   
  )
}
