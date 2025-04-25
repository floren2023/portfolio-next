"use client"
import React from 'react'
import CardStudies from './CardStudies'
import { EDUCATION } from '@/constants'
import {motion} from "framer-motion"

export default function Education() {
    return (
        <div className="mb-4">
         <motion.h1 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1.5}}
         className='my-10 text-start text-2xl text-neutral-200 pl-20 '>Education</motion.h1>
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10'>
           
            {EDUCATION.map((item,index)=>(
            <div key={index} className='text-white  '>
                
                <CardStudies year={item.year} title={item.title} center={item.center} description={item.description} 
                address={item.address}  /> 
            </div>
          )  )}
            
        </div>
        </div>
    )
}


