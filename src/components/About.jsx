import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"
import {styles} from "../styles"
import {technologies} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from '../hoc/index'

const ServiceCard = ({index,name,icon}) =>{
  return  (
 <Tilt className="">
    <motion.div
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
    
      <div
        options ={{
        max:45,
        scale:1,
        speed:450
        }} 
        className='bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col '
        >
          <img src = {icon} alt = {name} className='h-10 w-10 object-contain' />
          <p className='text-center text-xs uppercase text-teal-600'>{name}</p>
      </div>
    </motion.div>
 </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled software developer with experience in JavaScript and frameWorks like React, Node.js, and 
        collaborate closely with clients to create efficient,scalable, and user-friendly solution that solve real world problems
        .Let's work together to bring your ideas to life!
      </motion.p>

      <h2 className={`${styles.sectionHeadText} mt-10`}>Skills</h2>
      <div className='mt-10 flex flex-wrap gap-5 justify-center items-center'>
        {technologies.map((tech,index) =>(
          <ServiceCard key = {tech.name} index = {index} name={tech.name} icon={tech.icon}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")