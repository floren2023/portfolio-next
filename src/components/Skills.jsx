"use client"
import React from 'react'
import {motion } from "framer-motion"
import Education from './Education'

function Skills() {
    return (
        <div className="pt-10 lg:pl-20 lg:pr-20 items-center   ">
        <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.5}}
         className="my-10 text-center text-4xl text-slate-200">
          SKILLS
        </motion.h1>
<Education/>
        
        </div>
    )
}

export default Skills
