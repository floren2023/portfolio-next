
import { SOFT_SKILLS, LANGUAGES } from "@/constants";
import {motion} from 'framer-motion'


export function SoftSkills() {
  return (
    <div className="sm:mx-0 md:mx-5 lg:mx-10 sm:text-center md:text-center">
         <motion.h1  whileInView={{opacity:1, x:0}}
           initial={{opacity:0, x:-100}}
           transition={{duration:1.5}}
         className='my-10 text-start text-2xl text-neutral-200 pl-10 mx-10 font_title '>
        Soft Skills
      </motion.h1>
   <div >
       
    
    <div 
     
    className="grid sm:grid-cols-1 md.grid-cols-2 lg:grid-cols-2 gap-6
      p-4  sm:mx-0 md:mx-4 lg:mx-10 justify-center items-center m-auto">
   {/*  */}
     <div className=" py-5   bg-gray-900 shadow3 border-1 border-neutral-600 rounded-md p-4 pl-4">
       <div className="flex flex-col  sm:gap-2 md:gap-2 lg:gap-4 ">
      {SOFT_SKILLS.map((item, index) => (
        <div className=" flex justify-items-start  " key={index}>
          <div className="text-md   text-start text-fuchsia-600 font-medium justify-start pl-2">{item.name} :  </div>
          <div className="text-md text-slate-400 text-start justify-start pl-2">{item.description}</div>
        </div>
      ))}
      </div>
      </div>
      <div className="text-slate-200 p-4 bg-gray-900 shadow3 border-1 border-neutral-600 rounded-md pl-8 w-[200px]">
        <h4 className="text-fuchsia-600 text-bold text-start mb-4 mt-4 pl-8">Languages</h4>
  {LANGUAGES.map((language,index)=>(
    <div key={index} className="text-slate-300 text-start">
        {language.lang}<span className="text-amber-500 text-md text-medium pl-4">{language.cal}</span>
        </div>
  ))}

      </div>
    
    </div>
    </div>

    </div>
   
  );
}
