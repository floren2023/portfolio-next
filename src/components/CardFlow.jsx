
import { Card } from "flowbite-react";
import {  FaGithub , FaGlobe} from "react-icons/fa";

export function CardFlow({title,description,image,technologies,github,gitbackend,publicat}) {
  return (
    <Card
      className="max-w-sm shadow3 mt-10 sm:h-[450px]  lg:mt-0 lg:h-[450px] bg-black border-none pb-4"
         
      imgAlt={image}
      imgSrc={image}
    >
        <div className="h-[140px] flex flex-col gap-2  text-gray-200">
      <h5 className="text-xl font-bold tracking-tight text-gray-200 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-300 dark:text-gray-400">
        {description}      </p>
        <div className='flex flex-wrap'>
        {technologies.map((tech,index)=>(
            <span key={index} className='text-sm text-fuchsia-600
             mr-1 tracking-tighter bg-slate-800
             rounded-md px-1  '>{tech}</span>
        ))}
      </div>
      </div>
      
      <div className='flex  gap-4  content-baseline  justify-center mb-4 shadow3
       p-2 items-center w-[74px] rounded-2xl  bg-purple-950 mx-auto '>
        
      <div className=' align-bottom items-baseline'>
        <a href={github} className='text-xl text-green-500  '>
         <FaGithub /></a>
      </div>
       <div className='align-bottom items-baseline'>
        <a href={publicat} className='text-xl text-red-500  '>
        <FaGlobe/></a>
      </div>
  
      </div>
      
    </Card>
  );
}

