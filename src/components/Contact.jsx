"use client"
import React,{useState} from "react";
import { CONTACT } from "../constants/index.js";
import {motion} from "framer-motion"
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

  const schema = z.object({
  name: z.string().min(1, 'Name required'),
  email: z.string().email('Bad format email'),
  message: z.string().min(5, 'The message must have more then 5 characters'),
});

function Contact() {

 
 const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [status, setStatus] = useState('');

   const onSubmit = async (data) => {
    setStatus('Enviando...');
  console.log(data)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus('Message sent with exit ✅');
        reset();
      } else {
        setStatus(`Error: ${result.error}`);
      }
    } catch (err) {
      setStatus('Red Error');
    }
  };

   
  return (
    <div className=" -z-10  h-full mt-10 pt-10  w-full 
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div  className="  pt-8 pb-8 ">
      <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.5}}
         className=" mb-6 text-center text-3xl text-fuchsia-600">
          CONTACT
        </motion.h1>
    
    <div
      
      className=" grid sm:grid-cols-1 bg-transparent
       md:grid-cols-1 lg:grid-cols-2 mt-4 sm:mx-0 md:mx-20 
       lg:mx-50 rounded-md mb-10 p-6 "
    >
      <div className=" ">
        <h1 className="text-center text-4xl text-purple-700 pt-10 font_title">
          Get in <span className="text-fuchsia-700">Touch!</span>
        </h1>
        <div className="pr-0 mr-0 pt-20 mx-auto items-center">
          
        </div>
      </div>

      <div className="sm:py-0 sm:pl-0 sm:pr-0 md:py-4  lg:py-4 lg:pl-0 lg:pr-10 
       sm:mx-auto sm:w-full">
       
        <form onSubmit={handleSubmit(onSubmit)}
          className=" p-6  w-[360px] mx-auto items-center text-start pb-6 opacity-0.6 bg-transparent
           text-slate-300 rounded-md shadow3"
        >
           <h1 className="text-fuchsia-700 text-md text-center font-mediun pt-4 pb-8">Contact Form</h1>
 <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Your Name
            </label>
            <input  {...register('name')}
              type="text"
              id="name"
              className="bg-slate-800   text-gray-300 text-sm rounded-lg
      block w-full p-2.5 dark:bg-gray-700 
      dark:placeholder-gray-600 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              placeholder="John Doe"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

           <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Your Email
            </label>
            <input  {...register('email')}
              type="email"
              id="email"
              className="bg-slate-800   text-gray-300 text-sm rounded-lg
      block w-full p-2.5 dark:bg-gray-700 
      dark:placeholder-gray-600 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              placeholder="name@name.com"
              required
            />
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
         
         
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-slate-300 dark:text-white"
            >
              Your Message
            </label>
            <textarea {...register('message')}
              id="message"
              name="message" rows="3"
              className="bg-slate-800   text-gray-300 text-sm rounded-lg
      block w-full p-2.5 dark:bg-gray-700 
      dark:placeholder-gray-600 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
              required
            />
            {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
          </div>

          <button
            type="submit"
            className="text-gray-300 bg-fuchsia-800 mt-4 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none
   focus:ring-violet-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-3 my-6 text-center"
          >
            Send
          </button>
          {status && <p>{status}</p>}
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
