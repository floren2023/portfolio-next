"use client"
import React from 'react'
import {motion } from "framer-motion"
import Education from './Education'
import Tecnologies from './Tecnologies'
import Experience from './Experience'
import { SoftSkills } from './SoftSkills'

function Skills() {
    return (
        <div className=" -z-10  h-max-[1750px] overflow-y-hidden  w-full 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="pt-20 mx-10 items-center pb-10  ">
        <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.5}}
         className="my-10 text-center text-4xl text-fuchsia-600">
          SKILLS
        </motion.h1>
         <Education/>
         <Tecnologies/>
         <Experience/>
         <SoftSkills/>
        
        </div></div>
    )
}

export default Skills
