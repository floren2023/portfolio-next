"use client";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { HERO_SECONDARY } from "@/constants";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: delay } },
  });
  
  
  return (
    <div
      className="flex flex-col items-center sm:mx-0 md:mx-0 pt-10 h-full
    lg:pl-20 mx-10 lg:mb-10 sm:mb-10" 
    >
      <div className=" lg:mx-20 sm:mx-4 md:mx-4 ">
        <div className="text-center items-center ">
          <motion.h1
              whileInView={{opacity:1, y:0}}
              initial={{opacity:0, y:-100}}
              transition={{duration:0.5}}
            className="sm:text-4xl md:text-4xl lg:text-6xl mb-10 tracking-tight font-normal
                   bg-clip-text text-transparent bg-gradient-to-r from-violet-500
                    via-fuchsia-500 to-blue-300 font_title"
          >
            HI, I'M FLOREN
          </motion.h1>

          <motion.div
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text text-transparent tracking-thin 
                         bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 mb-4 font_title"
          >
            <TypeAnimation
              sequence={["WEB DEVELOPER", 2000, "FULL STACK DEVELOPER", 2000]}
              wrapper="span"
              speed={200}
              style={{ display: "inline-block" }}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>

          <div className="items-center mt-4">
            <motion.div
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="text-slate-200 mt-4 font-light tracking-wider py-2 
               lg:text-2xl text-shadow-2xs justify-center text-center
               text-shadow-gray-200 sm:text-xl md:text-xl"
            >
              {HERO_SECONDARY}
            </motion.div>
          </div>
          <div className="flex gap-10 ml-10 mb-8 mt-8 items-center justify-center">
            <motion.div
              className=" "
              variants={container(3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
            >
              <a
                href="/contact">
                <div 
                className="pt-4 px-4 text-md bg-gradient-to-r
               from-fuchsia-500 via-violet-500 sm:text-md md:text-md lg:text-xl
                to-blue-500 text-white  opacity-0.8 shadow-md p-4 rounded-lg items-center"
              >
                Contact Me!
                </div>
              </a>
            </motion.div>
            <motion.div
              variants={container(4)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
              className=" "
            >
              <a download href="./CVDev.pdf" className="pt-4 pb-4 px-4 border-2 border-violet-600 
              sm:text-md md:text-md lg:text-xl
               hover:border-violet-600 text-md
               text-violet-600 items-center
               hover:text-violet-600 rounded-lg flex gap-2">
              <IoMdDownload />
              
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={container(5)}
         initial="hidden"
         animate="visible"
       className=" mx-auto justify-center sm:m-0 sm:p-0">
        <Image
          src="/assets/fotoperfil.jpg"
          width={500}
          height={300}
          alt="imagen perfil"
          className="m-auto "
        />
      </motion.div>
    </div>
  );
}

export default Hero;
