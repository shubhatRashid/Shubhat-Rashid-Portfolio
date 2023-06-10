import React from 'react'
import {useState,useEffect} from "react"
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from "../constants"
import {logo,menu,close} from "../assets"


function Navbar() {
  const [active, setActive] = useState("")
  const [toggle,setToggle] = useState(true)
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex item-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          } }
        >
          <img src={logo} alt='logo' className="w-12 h-12 object-contain relative top-1" />
          <p 
          className='text-white text-[20px] font-bold cursor-pointer flex relative top-3'>
          Shubhat Rashid
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=>(
              <li 
              key = {link.id}
              className={`${active===link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}>
                <a href = {`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>
        <div className='sm:hidden justify-end items-center flex flex-1'>
          <img 
          className='w-[28px] h-[28px] object-contain curser-pointer'
          src={toggle?menu:close}
          onClick={()=>{setToggle(!toggle)}}  
          />
          <div className={`${!toggle?"sm:hidden":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link)=>(
                  <li 
                  key = {link.id}
                  className={`${active===link.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={()=>{
                    setToggle(!toggle)
                    setActive(link.title)}}>
                    <a href = {`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar