import React from 'react'
import { useState,useRef } from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const [form,setForm] = useState({
    name : "",
    email : "",
    message : ""
  })
  const formRef = useRef();
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prevValues) =>({...prevValues,[e.target.name] : [e.target.value]}))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'template_i0id2l1', formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setLoading(true)
    window.setTimeout(() =>{
      setLoading(false)
      setForm({
        name : "",
        email : "",
        message : ""
      })
    },2000)

  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
          <motion.div
          variants={slideIn("left","tween",0.2,1)}
          className='flex-[1] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
            <label
            className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Name</span>
                    <input 
                    type='text'
                    name = "name"
                    value = {form.name}
                    onChange={handleChange}
                    placeholder="What's your name"
                    className='bg-tertiary py-4 px-6 
                    placeholder:text-secondary text-white rounded-lg outline-none
                    border-none font-medium' 
                    />
            </label>
            <label
            className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your Email</span>
                    <input 
                    type='email'
                    name = "email"
                    value = {form.email}
                    onChange={handleChange}
                    placeholder="Write your email"
                    className='bg-tertiary py-4 px-6 
                    placeholder:text-secondary text-white rounded-lg outline-none
                    border-none font-medium' 
                    />
            </label>
            <label
            className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>Your message</span>
                    <textarea 
                    name = "message"
                    value = {form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say"
                    className='bg-tertiary py-4 px-6 
                    placeholder:text-secondary text-white rounded-lg outline-none
                    border-none font-medium ' 
                    />
            </label>
            <button className='bg-tertiary py-3 px-8 w-fit 
                    text-white rounded-lg outline-none
                    border-none font-bold shadow-md shadow-primary'
                    type='submit'>
              {loading ? "Sending...": "send"}
            </button>
          </form>
          </motion.div>
          <motion.div 
          variants={slideIn("right","tween",0.2,1)}
          className='hidden sm:flex xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                <EarthCanvas />
          </motion.div>
          
    </div>
  )
}

export default SectionWrapper(Contact,"contact")