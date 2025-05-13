"use client"
import React from 'react'
import { CardFlow } from './CardFlow'
import { PROJECTS } from '@/constants'
import {motion} from "framer-motion"


function Projects() {
    return (
      <div className=" -z-10  h-max-[1750px] overflow-y-hidden  w-full 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="lg:mx-10">
         <motion.h1 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}}
          
         className='my-16 text-center text-4xl pt-14 text-fuchsia-600 font_title '>PROJECTS</motion.h1>
        <div 
         
        className='grid mx-auto justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         sm:gap-20 sm:m-4 md:gap-10 
          lg:gap-4 lg:pl-10 lg:pr-10 sm:pl-0 sm:pr-0 md:mx-10 lg:mx-10'>
           
            {PROJECTS.map((item,index)=>(
            <div key={index} className='text-white mx-auto items-center justify-center mb-4 '>
                
                <CardFlow title={item.title} image={item.image} description={item.description} 
                technologies={item.technologies} github={item.github} gitbackend={item.gitbackend} publicat={item.publicat}/> 
            </div>
          )  )}
            
        </div>
        </div></div>
    )
}

export default Projects
