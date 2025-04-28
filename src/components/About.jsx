"use client"
import React from "react";
import Image from "next/image"
import {motion} from "framer-motion"
import { ABOUT_CONTENT,ABOUT } from "../constants";

const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{x:0, opacity:1,
   transition:{duration:0.5,delay:delay}
  }
        
})


export default function About() {
  return (
    <div className=" -z-10  h-full   w-full 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className=" lg:pl-20 lg:pr-20 items-center pt-10 mt-10  ">
      <motion.h1 
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 1.1 }}
       variants={container(1)}
       initial="hidden"
       animate="visible"
      className="my-10 text-center text-4xl text-fuchsia-600">
        About<span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 sm:mx-0 md:mx-4 lg:mx-10">
        <div className="items-center w-full lg:p-8 ">
          <motion.div
             whileHover={{ scale: 1.2 }}
             whileTap={{ scale: 1.1 }}
             variants={container(2)}
             initial="hidden"
             animate="visible"
          className="justify-center flex ">
            <Image src="/assets/about.jpg" width={400} height={200} alt="about me" />
          </motion.div>
        </div>
        <div className="w-full  lg:p-8 sm:p-4">
          <div className="items-center justify-center lg:justify-start">
          <motion.p 
            variants={container(3)}
            initial="hidden"
            animate="visible"
          className="text-slate-200 my-2 font-light tracking-wider py-2 max-w-xl text-2xl ">
            {ABOUT}
          </motion.p>
          <motion.p 
            variants={container(4)}
            initial="hidden"
            animate="visible"
          className="text-slate-200 my-2 font-light tracking-wider py-2 max-w-xl text-md  justify-center">
            {ABOUT_CONTENT}
          </motion.p>
          </div>
        </div>
      </div>
    </div></div>
  );
}

