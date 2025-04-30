import { Card } from "flowbite-react";
import { SOFT_SKILLS, LANGUAGES } from "@/constants";
import {motion} from 'framer-motion'
import Image from "next/image";

export function SoftSkills() {
  return (
    <div className="sm:mx-0 md:mx-5 lg:mx-10">
         <motion.h1  whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1.5}}
         className='my-10 text-start text-2xl text-neutral-200 pl-10 mx-10 '>
        Soft Skills
      </motion.h1>
   <div >
       
    
    <div 
     
    className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
      p-4  sm:mx-0 md:mx-4 lg:mx-10 justify-center items-center m-auto">
    <div className="justify-center m-auto opacity-0.7 sm:pt-0 lg:pt-2 items-center sm:mb-4 ">
        <Image src="/hombre.png" width={130} height={150} alt="man" className=" justify-center pt-2 items-center "/>
    </div>
     <div className=" pt-10  lg:col-span-2 bg-gray-900 shadow3 border-1 border-neutral-600 rounded-md p-4 pl-4">
       <div className="grid  sm:grid-cols-1 md:grid-cols-1 grid-cols-2  sm:gap-2 md:gap-2 lg:gap-4 ">
      {SOFT_SKILLS.map((item, index) => (
        <div className="  justify-items-start  " key={index}>
          <div className="text-md text-slate-200  text-start  font-medium justify-start pl-2">{item.name}   </div>
          <div className="text-md text-slate-400 text-start justify-start pl-2">{item.description}</div>
        </div>
      ))}
      </div>
      </div>
      <div className="text-slate-200 p-4 bg-gray-900 shadow3 border-1 border-neutral-600 rounded-md pl-8">
        <h4 className="text-slate-100 text-bold text-start mb-4 mt-4 pl-8">Languages</h4>
  {LANGUAGES.map((language,index)=>(
    <div key={index} className="text-slate-300">
        {language.lang}<span className="text-amber-500 text-md text-medium pl-4">{language.cal}</span>
        </div>
  ))}

      </div>
    
    </div>
    </div>

    </div>
   
  );
}
