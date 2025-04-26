"use client"
import React from "react";
import { HERO_CONTENT,HERO_ABOUT } from "../constants";
import Image from "next/image";
import { motion } from "framer-motion"

function Hero() { 

  
    const container=(delay)=>({
       hidden:{x:-100, opacity:0},
       visible:{x:0, opacity:1,
        transition:{duration:0.2,delay:delay}
       }
        
    })
  return (
    <div className="flex flex-wrap  mt-10 " >
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col sm:items-center md:items-center lg:items-center lg:pl-20 mx-10">
        
          <motion.h1   
          variants={container(0)}
          initial="hidden"
          animate="visible"         
            className=" text-6xl mb-10 tracking-tight font-thin
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-600
                      via-gray-500 to-indigo-400 " >
            HI, I'M FLOREN
          </motion.h1>
          
          <motion.div
            whileHover={{scale:1.2}}
            whileTap={{scale:1.1}}
            drag="x"
            dragConstraints={{left:-100, right:100}}
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-4xl bg-clip-text text-transparent tracking-thin 
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4"
          >
            Full Stack Dev
          </motion.div>
          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
          className="text-slate-200 my-2 font-light tracking-wider py-2 max-w-xl text-2xl ">
            {HERO_ABOUT}
          </motion.p>
          <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
          className="text-slate-200 my-2 font-light tracking-wider py-2 max-w-xl text-md  justify-center">
            {HERO_CONTENT}
          </motion.p>
          <motion.div className="flex gap-10 justify-center ml-10 mb-8 mt-4"
          variants={container(2)}
            initial="hidden"
            animate="visible">
              <a href="#contact" className="pt-4 px-4 text-md bg-gradient-to-r
               from-fuchsia-500 via-violet-500
                to-blue-500 text-white  opacity-0.8 shadow-md p-4 rounded-lg">
                Contact ME!</a>
              <a download href="./CVROMANA.pdf" className="pt-4 px-4 border-2 border-fuchsia-600 
               hover:border-fuchsia-400 text-md
               bg-black text-fuchsia-600
               hover:text-fuchsia-400 rounded-lg  shadow-md" >Download CV </a>
               
          </motion.div>
        </div>
      </div>
      <div className="items-center w-1/2 m-auto">
        <motion.div 
        initial={{x:100,opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, delay:1.2}}
        className="justify-center items-center mx-auto sm:m-0 sm:p-0 ">
          <Image
            src="/assets/fotoperfil.jpg"
            width={400}
            height={300}
            alt="imagen perfil"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
