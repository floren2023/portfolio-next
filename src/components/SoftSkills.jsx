import { Card } from "flowbite-react";
import { SOFT_SKILLS, LANGUAGES } from "@/constants";
import {motion} from 'framer-motion'

export function SoftSkills() {
  return (
    <div className="sm:mx-0 md:mx-5 lg:mx-10">
         <motion.h1  whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1.5}}
         className='my-10 text-start text-2xl text-neutral-200 pl-20 mx-10 '>
        Soft Skills
      </motion.h1>
   <div >
       
    
    <div 
     
    className="flex gap-6
      p-4 bg-gray-900 border-none sm:mx-0 md:mx-4 lg:mx-10 rounded-md shadow3">
    <div className="w-1/5 ">
        <img src="./hombre.png" width="150px" height="180px" alt="man"/>
    </div>
     <div className=" pt-10 w-3/5">
      {SOFT_SKILLS.map((item, index) => (
        <div className="flex gap-10  justify-items-start mb-2 " key={index}>
          <div className="text-md text-slate-200 w-1/3 text-start  font-medium justify-center">{item.name}   </div>
          <div className="text-md text-slate-400 text-start justify-start">{item.description}</div>
        </div>
      ))}
      </div>
      <div className="text-slate-200 p-4 ">
        <h4 className="text-slate-100 text-bold text-start mb-2 mt-4">Languages</h4>
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
