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
       
    
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16  p-4 bg-gray-900 border-none  w-2/3 mx-auto rounded-md ">
     <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 pt-10">
      {SOFT_SKILLS.map((item, index) => (
        <div className="flex gap-10  justify-items-start " key={index}>
          <div className="text-md text-slate-200 w-1/3 text-start pl-5 font-medium">{item.name}  -- </div>
          <div className="text-md text-slate-400 text-start ">{item.description}</div>
        </div>
      ))}
      </div>
      <div className="text-slate-200 p-4 pl-10">
        <h4 className="text-slate-100 text-bold text-start mb-2">Languages</h4>
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
