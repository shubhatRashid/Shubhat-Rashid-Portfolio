import React from 'react'
import {styles} from "../styles"
import { Cube } from './canvas'
import { Tilt } from 'react-tilt'
import {fadeIn} from "../utils/motion"
import { motion } from "framer-motion"
import {services} from "../constants"

const Social = ({index,title,icon}) =>{
  return  (
 <Tilt className="">
    <motion.div
    variants={fadeIn("right","string",0.5*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
    
      <div
        options ={{
        max:45,
        scale:1,
        speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col'
        >
          <img src = {icon} alt = {title} className='h-10 w-10 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
 </Tilt>
  )
}

const Hero = () => {
  return (
    <section className={`h-screen relative mx-auto pt-20 px-20`}>
      <div className='md:flex-row flex-col flex justify-center items-center h-full pt-15'>

        <div className={`flex flex-col items-start justify-around h-full`}>
          <div className='flex flex-row mx-auto items-start justify-center gap-5'>
            <div className=''>
                  <div className='bg-[#915eff] w-5 h-5 rounded-full'/>
                  <div className='w-1 bg-[#915eff] sm:h-80 h-40 mx-auto violet-gradient'/>
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, i'm <span className="text-[#915eff]">Shubhat</span></h1>
              <p className={`${styles.heroSubText} text-white-100`}>I develop 3D visuals, user <br className='sm:block hidden'/>interfaces and web applications</p>
            </div>
          </div>

          <div className='flex gap-5 w-full justify-center '>
          {services.map((service,index) =>(
          <Social  index = {index} />
        ))}
          </div>
        </div>

        <div className='flex justify-center items-center lg:h-full h-1/2 w-1/2'>
        
            <Cube/>
          
        </div>
      </div>
      
    {/* <div className='absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center '>
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
    </div> */}
    </section>
  )
}

export default Hero