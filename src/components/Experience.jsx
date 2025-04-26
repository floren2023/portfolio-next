"use client"
import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"
import { CardExperience } from './CardExperience'

function Experience() {
    return (
        <div className='sm:mx-0 md:mx-10 lg:mx-20'>
            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
             className='my-10 text-start text-2xl text-neutral-200 pl-20 pt-4 '>
            Experience</motion.div>
            <motion.div 
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0, x:-100}}
               transition={{duration:1.3}}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  sm:justify-center mx-10 '>
                 {EXPERIENCES.map((experience,index)=>
                (
                    
                    <div key={index} className='mb-8'>
                        <CardExperience year={experience.year} role={experience.role} company={experience.company} description={experience.description} technologies={experience.technologies}/>
                      
                    </div>
                )

                )} 
            </motion.div>
            
            </div>
    )
}

export default Experience
