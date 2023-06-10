import React from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
const Tech = () => {
  return (
    <div>
     <motion.div
        variants={textVariant()}
        className='my-20'>
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) =>(
          <div className='w-28 h-28'>
          <BallCanvas key = {technology.name} icon = {technology.icon}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech,"")