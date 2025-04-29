"use client"
import React from 'react'
import { RiReactjsLine,RiPhpFill } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb,SiPostgresql,SiTailwindcss,SiAstro  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCss3,FaAngular, FaBootstrap,FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5,IoLogoVercel } from "react-icons/io5";
import {motion} from "framer-motion"

const iconVariants=(duration)=>({
    initial:{y:-5},
    animate:{
        y:[5,-5],
        transition:{
            duration:duration,
            ease:[0, 0.1,0.9, 1],
            repeat:Infinity,
            repeatType:"reverse"
        }
    }

})

function Tecnologies() {
    return (
        <div className='pb-4 sm:mx-0 md:mx-4 lg:mx-10 pt-4'>
           
           <motion.h1 
           whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:2}}
           className='my-10 text-start text-2xl text-neutral-200 pl-20 '>Tecnologies</motion.h1>
           
           <h2 className='my-10 text-start text-xl text-neutral-400 mx-10'>FrontEnd</h2>
           
            <div 
           
             className='flex flex-wrap items-start justify-start gap-3 lg:pl-20'>
                <motion.div 
               
                variants= {iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-2 border-neutral-600 p-3">
                    <RiReactjsLine className='text-4xl text-cyan-400'/>
                </motion.div>
                <motion.div 
                 variants= {iconVariants(3)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-2 border-neutral-600 p-3">
                    <TbBrandNextjs className='text-4xl text-white'/>
                </motion.div>
               
                <motion.div 
                 variants= {iconVariants(2)}
                 initial="initial"
                 animate="animate"className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiTailwindcss  className='text-4xl text-cyan-500'/>
                </motion.div>
                
                <motion.div 
                 variants= {iconVariants(3.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaCss3  className='text-4xl text-blue-600'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(1.5)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-2 border-neutral-600 p-3">
                    <IoLogoHtml5 className='text-4xl text-orange-500'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(1)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaAngular className='text-4xl text-red-600'/>
                </motion.div>
                <motion.div 
                 variants= {iconVariants(5)}
                 initial="initial"
                 animate="animate"className="rounded-2xl border-2 border-neutral-600 p-3">
                    <IoLogoVercel className='text-4xl text-slate-900 bg-white'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(2.5)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiAstro className='text-4xl text-white'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(4)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaBootstrap className='text-4xl text-violet-600'/>
                </motion.div>
               </div>
               
               
                <h2 className='my-10 text-start text-xl text-neutral-400 mx-10'>BackEnd</h2>
                <div className='flex flex-wrap items-start justify-start gap-3 lg:pl-20'>
                <motion.div 
                 variants= {iconVariants(2)}
                 initial="initial"
                 animate="animate"className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiMongodb className='text-4xl text-green-500'/>
                </motion.div>
                <motion.div 
                 variants= {iconVariants(3)}
                 initial="initial"
                 animate="animate"className="rounded-2xl border-2 border-neutral-600 p-3">
                    <GrMysql className='text-4xl text-blue-400'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(2)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiPostgresql className='text-4xl text-sky-700'/>
                </motion.div>
                <motion.div 
                 variants= {iconVariants(2.5)}
                 initial="initial"
                 animate="animate"className="rounded-2xl border-2 border-neutral-600 p-3">
                    <BiLogoSpringBoot  className='text-4xl text-green-400'/>
                </motion.div>
                <motion.div 
                 variants= {iconVariants(3)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-2 border-neutral-600 p-3">
                    <RiPhpFill className='text-4xl text-white bg-violet-400 p-1 rounded-full'/>
                </motion.div>
                <motion.div
                 variants= {iconVariants(3)}
                 initial="initial"
                 animate="animate"
                 className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaNodeJs className='text-4xl text-green-600'/>
                </motion.div>
                    </div>
                
               
            
        </div>
    )
}

export default Tecnologies
