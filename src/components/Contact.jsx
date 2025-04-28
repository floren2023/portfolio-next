"use client"
import React from "react";
import { CONTACT } from "../constants/index.js";
import {motion} from "framer-motion"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link"

function Contact() {
  return (
    <div className=" -z-10  h-full mt-10 pt-10  w-full 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div  className="  pt-8 pb-10 ">
      <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.5}}
         className=" mb-10 text-center text-4xl text-fuchsia-600">
          CONTACT
        </motion.h1>
    
    <div
      
      className=" grid sm:grid-cols-1 bg-transparent
       md:grid-cols-1 lg:grid-cols-2 mt-4 sm:mx-0 md:mx-20 
       lg:mx-50 rounded-md mb-10 p-6 border-1 border-slate-700"
    >
      <div className=" ">
        <h1 className="text-center text-4xl text-purple-700 pt-10">
          Get in <span className="text-fuchsia-700">Touch!</span>
        </h1>
        <div className="pr-0 mr-0 pt-20">
          <img
            src="./contact.png"
            alt="contact"
            className="object-fit"
            width="600px"
          />
        </div>
      </div>

      <div className="sm:py-0 sm:pl-0 sm:pr-0 md:py-4  lg:py-4 lg:pl-0 lg:pr-10 
       sm:mx-auto sm:w-full">
        <form
          className=" p-4 pt-4  text-center  opacity-0.6
  mt-4 bg-gradient-to-r from-violet-900 from-10% via-purple-500 via-40%
   to-fuchsia-500 to-90% ... text-slate-300 rounded-md "
        >
           <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-200 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              placeholder="name@name.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-slate-200 dark:text-white"
            >
              Your Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              placeholder="subject"
              required
            />
          </div>
         
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-slate-200 dark:text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500
       dark:focus:border-violet-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-purple-700 mt-4 hover:bg-purple-800 focus:ring-4 focus:outline-none
   focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
    dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Send
          </button>
        </form>
        <div className="flex flex-col gap-2 text-md text-slate-300 
        mt-10 justify-center items-center mx-auto text-center">
          <p>{CONTACT.address}</p>
          <p>{CONTACT.phoneNo}</p>
          <p>{CONTACT.email} </p>
          <div className="flex gap-4 text-xl text-slate-300 pt-4">
          <Link href="https://www.linkedin.com/in/florenta-vakar-ba072b362/" ><FaLinkedinIn /></Link>
          <Link href="https://github.com/floren2023/portfolio-next"> <FaGithub /></Link>
        </div>
      </div>
    </div></div></div>
    </div>
  );
}

export default Contact;
