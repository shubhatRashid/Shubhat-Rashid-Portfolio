import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import {client} from "../client";
import { useState,useEffect } from "react";

const ProjectCard = ({index,name,description,tags,image,link}) =>{
return (
  <motion.div >
    <Tilt 
    options={{
      max :45,
      scale:1,
      speed:450
    }}
    className=" relative rounded-2xl bg-tertiary p-5 sm:w-[360px] w-full h-[600px] flex flex-col justify-around"
    >
      <div>
        <img 
          src={image.asset.url}
          alt = {name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
              onClick={()=>window.open(link,"_black")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt='github' className='w-1/2 h-1/2 '/>
              </div>   
        </div>
      </div>
      <div className='mt-5 '>
          <h5 className='text-white font-bold text-[24px]'>{name}</h5>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map(tag => (
              <p
              key = {tag}
              className={`text-[14px]`}
              >#{tag}</p>
            ))}
      </div>
    </Tilt>
  </motion.div>
)
}
const Works = () => {
  
const [Data,setData] = useState([])
  useEffect(() => {
		client
			.fetch(
				`*[_type == "projects"]{
      title,
      name,
      image{
        asset->{
          _id,
          url
        },
      },
      description,
      link,
      tags,
    }`
			)
			.then((data) => setData(data))
			.catch(console.error);
	}, []);
 
  return (
    <>
      <motion.div
        >
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex flex-col' >
        <motion.p
         
         className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Following Projects showcase my skills 
        and experience through 
        real-world examples of my work. Each 
        project is briefly described with
        links to code repositories and live 
        demos in it. It reflects my 
        ability to solve complex problems,work
        with different technologies 
        and manage projects effectively.
        </motion.p>
        <div className='mt-10 flex flex-wrap gap-4 justify-around items-center'>
              {Data.map((project,index) => (
                <ProjectCard key = {index} {...project} index = {index}/>
              ))}
        </div>
      </div>

    </>
  )
}

export default SectionWrapper(Works,"works")