"use client"
import React from 'react'
import { CardFlow } from './CardFlow'
import { PROJECTS } from '@/constants'
import {motion} from "framer-motion"

function Projects() {
    return (
      <div className="">
         <motion.h1 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}}
         className='my-16 text-center text-4xl pt-10 text-fuchsia-600 '>PROJECTS</motion.h1>
        <motion.div 
         whileInView={{opacity:1, x:0}}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.2}}
        className='grid mx-auto justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
         sm:gap-20 sm:m-4 md:gap-10 
          lg:gap-4 lg:pl-10 lg:pr-10 sm:pl-0 sm:pr-0 md:pl-10 md:pr-10'>
           
            {PROJECTS.map((item,index)=>(
            <div key={index} className='text-white mx-auto items-center justify-center mb-4 '>
                
                <CardFlow title={item.title} image={item.image} description={item.description} 
                technologies={item.technologies} github={item.github} gitbackend={item.gitbackend}/> 
            </div>
          )  )}
            
        </motion.div>
        </div>
    )
}

export default Projects
