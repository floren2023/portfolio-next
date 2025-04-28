"use client";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_SECONDARY } from "@/constants";

function Hero() {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, delay: delay } },
  });
  return (
    <div className="flex flex-col items-center sm:mx-0 md:mx-0 pt-10 h-full
    lg:pl-20 mx-10 mb-10">
      <div className=" lg:mx-20 sm:mx-4 md:mx-4 ">
        <div className="text-center items-center">
          <h1
            className=" text-6xl mb-10 tracking-tight font-normal
                   bg-clip-text text-transparent bg-gradient-to-r from-violet-500
                    via-gray-500 to-fuchsia-400 "
          >
            HI, I'M FLOREN
          </h1>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-4xl bg-clip-text text-transparent tracking-thin 
                         bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 mb-4"
          >
            WEB DEVELOPER
          </motion.div>

         {/*  <div className="items-center justify-center ">
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-gray-300 my-2 font-light 
              tracking-wide py-2 text-md "
            >
              {HERO_PRINCIPAL}
            </motion.p>
          </div> */}

          <div className="items-center mt-4">
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-slate-200 mt-4 font-light tracking-wider py-2 
               text-2xl text-shadow-2xs justify-center text-center
               text-shadow-gray-200"
            >
              {HERO_SECONDARY}
            </motion.div>
          </div>
          <div className="flex gap-10 ml-10 mb-8 mt-8 items-center justify-center">
            <motion.div
              className=" "
              variants={container(2)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
            >
              <a
                href="/contact"
                className="pt-4 px-4 text-md bg-gradient-to-r
               from-fuchsia-500 via-violet-500
                to-blue-500 text-white  opacity-0.8 shadow-md p-4 rounded-lg items-center"
              >
                Contact ME!
              </a>
            </motion.div>
            <motion.div
              variants={container(3)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
              className="pt-3 pb-3 px-4 border-2 border-violet-600 
               hover:border-violet-600 text-md
               text-violet-600 items-center
               hover:text-violet-600 rounded-lg flex gap-2"
            >
              <IoMdDownload />
              <a download href="./CVROMANA.pdf" className="">
              
                Download CV
              </a>
            </motion.div>
          </div>
        </div>

        <div className=" mx-auto justify-center">
          <div
            
            className="justify-center items-center m-auto 
              sm:m-0 sm:p-0   "
          >
            
            <Image
              src="/assets/fotoperfil.jpg"
              width={500}
              height={300}
              alt="imagen perfil" className="m-auto "
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
