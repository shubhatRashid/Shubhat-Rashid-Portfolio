import React from 'react'
import {styles} from "../styles"
import { ComputersCanvas } from './canvas'
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <section className='w-full h-screen relative mx-auto '>
      <div className={`${styles.paddingX}  absolute inset-0 top-[90px] max-w-7xl flex flex-row mx-auto items-start gap-5`}>
        <div className=''>
              <div className='bg-[#915eff] w-5 h-5 rounded-full'/>
              <div className='w-1 bg-[#915eff] sm:h-80 h-40 mx-auto violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, i'm <span className="text-[#915eff]">Shubhat</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>I develop 3D visuals, user <br className='sm:block hidden'/>interfaces and web applications</p>
        </div>
      </div>
    <ComputersCanvas />
    <div className='absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center '>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                  <motion.div 
                    animate = {{y:[0,24,0]}}
                    transition = {{
                      duration:1.5,
                      repeat : Infinity,
                      repeatype : "loop"
                    }}
                    className ="w-3 h-3 rounded-full bg-secondary mb-1 "
                  />
            </div>
          </a>
    </div>
    </section>
  )
}

export default Hero