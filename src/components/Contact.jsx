import React from 'react'
import {CONTACT} from '../constants/index.js'

function Contact() {
    return (
        <div  id="contact" className=" grid sm: grid-cols-1 md:grid-cols-1 lg:grid-cols-2  bg-white  mt-4 sm:mx-0 md:mx-20 lg:mx-50 rounded-md mb-10 p-6">
          <div className=' '>
          <h1 className="text-center text-4xl text-purple-600">
          Get in<span className="text-neutral-500">Touch!</span>
          </h1>
            <div>
            <img src="./contact.jpg" alt="contact" className='object-fit' width="600px"/>
            </div>
          
       
          </div>
       
       
          
            
     <div className='p-10'>        

<form className=" p-4 pt-10  text-center  opacity-0.6
  mt-4 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30%
   to-violet-500 to-90% ... text-slate-300 rounded-md  ">
  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-200 dark:text-white">Your name</label>
    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
       placeholder="name" required />
  </div>
  <div className="mb-5">
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-200 dark:text-white">Your Message</label>
    <textarea id="message"  name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
     focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500
       dark:focus:border-violet-500" required />
  </div>
  
  <button type="submit" className="text-white bg-purple-700 mt-4 hover:bg-purple-800 focus:ring-4 focus:outline-none
   focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
    dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Send</button>
</form>
<div className="flex flex-col gap-2 text-md text-violet-900 mt-10 justify-center items-center mx-auto text-center">
          
        <p>{CONTACT.address}</p>  
         <p>{CONTACT.phoneNo}</p> 
         <p>{CONTACT.email} </p>         
   
          </div>
      </div>      

       
        </div>
        
    )
}

export default Contact
