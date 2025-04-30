"use client"
import React from "react";
import Image from "next/image"
import {motion} from "framer-motion"
import { ABOUT_CONTENT,ABOUT } from "../constants";




const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{x:0, opacity:1,
   transition:{duration:0.6,delay:delay}
  }
        
})
const container1=(delay)=>({
  hidden:{x:100, opacity:0},
  visible:{x:0, opacity:1,
   transition:{duration:0.7,delay:delay}
  }
        
})

export default function About() {
  return (
    <div className=" -z-10  h-full   w-full pt-10
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className=" sm:mx-4 md:mx-10 lg:pl-20 lg:pr-20 items-center sm:pt-10 sm;pb-10 md:pt-10 lg:pt-20 lg:mt-10  ">
      <motion.div 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}} 
       
      className="mt-14 mb-10  text-center  md:text-3xl lg:text-4xl text-fuchsia-600">
        About<span className="text-slate-200 pl-2">Me</span>
      </motion.div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 sm:mx-0 md:mx-4 lg:mx-10">
        <div className="items-center w-full lg:p-8 ">
          <motion.div
             
             variants={container(1)}
             initial="hidden"
             animate="visible"
          className="justify-center mx-auto ">
            <Image src="/assets/about.png" width={300} height={160} alt="about me" className="mx-auto"/>
          </motion.div>
        </div>
        <div className="p-4">
          <div className="items-center justify-center ">
          <motion.div
            variants={container1(2)}
            initial="hidden"
            animate="visible"
          className="text-slate-200 my-2 font-light text-center
           tracking-wider py-2  md:text-xl lg:text-2xl justify-center ">
            {ABOUT}
          </motion.div>
          <motion.div
            variants={container1(3)}
            initial="hidden"
            animate="visible"
          className="text-slate-200  
           my-2 font-light tracking-wider py-2 sm:text-sm lg:text-md lg:text-md  justify-center text-center">
            {ABOUT_CONTENT}
          </motion.div>
          </div>
        </div>
      </div>
    </div></div>
  );
}

