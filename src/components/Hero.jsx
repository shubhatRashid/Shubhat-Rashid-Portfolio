import React from 'react'
import {styles} from "../styles"
import { Cube } from './canvas'
import { Tilt } from 'react-tilt'
import {fadeIn} from "../utils/motion"
import { motion } from "framer-motion"
import {socials} from "../constants"
import resume from "../assets/resume.pdf"

const ScrollButton = () => {
  return (
    <div className='flex justify-center items-center '>
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
  )
}
const Social = ({index,title,icon,url}) =>{
  return  (
 <Tilt className="">
    <motion.div
    variants={fadeIn("right","string",0.5*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
    
      <a
        target="_blank" 
        rel="noreferrer"
        href={url}
        options ={{
        max:45,
        scale:1,
        speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col gap-2'
        >
          <img src = {icon} alt = {title} className='h-10 w-10 object-contain' />
          <h3 className='text-indigo-500 text-xs text-center font-serif'>{title}</h3>
      </a>
    </motion.div>
 </Tilt>
  )
}

const Hero = () => {
  return (
    <section className={`flex items-center justify-center`}>
      <div className='lg:flex-row flex-col flex justify-center items-center h-full gap-20 w-full px-5'>

        <div className={`flex flex-col items-start justify-center gap-20 h-screen`}>
          <div className='flex flex-row mx-auto items-start justify-center gap-5 h-1/2 w-full'>
            <div className=''>
                  <div className='bg-[#915eff] w-5 h-5 rounded-full'/>
                  <div className='w-1 bg-[#915eff] sm:h-80 h-80 mx-auto violet-gradient'/>
            </div>
            <div className='flex flex-col  w-full gap-1'>
              <h1 className='text-white text-xl mt-5' >Hi, i'm </h1>
              <span className={`${styles.heroHeadText} text-[#915eff]`}>Shubhat</span>
              <span className={`${styles.heroSubHeadText} text-[#915eff] leading-tight`}>Rashid,</span>
              <p className={`${styles.heroSubText} text-white-100`}>Full/Mern Stack Developer <br className='sm:block hidden'/></p>
              <div className='flex w-full items-center justify-start p-1 '>
                <a className='py-4 px-8 rounded-lg bg-[#915eff] text-white' href={resume} download>Download CV</a>
              </div>
            </div>
            
          </div>

          <div className='w-full flex flex-row justify-around items-center gap-5'>
            <div className='flex gap-5 items-center justify-center'>
              {socials.map((social,index) =>(
              <Social  index = {index} title={social.title} icon={social.icon} url={social.url}/>
            ))}
            </div>
            <ScrollButton />
          </div>
        </div>

        <div className='hidden sm:flex justify-center items-center lg:w-1/2 w-full border border-2 rounded-lg border-[#915eff]'>
        
            <Cube/>
          
        </div>
      </div>
      
    </section>
  )
}

export default Hero