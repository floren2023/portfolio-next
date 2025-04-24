import React from 'react'
import Image from 'next/image';




export function CardProject({title,description,image,technologies,github}) {
  return (
    <div className="max-w-sm text-white rounded-md shadow-md bg-slate-700 h-[420px]" >
        <div className='relative h-[170px] '>
          <img src={image}   alt="project" height="170px"
         className='object-cover rounded-t-md '/></div>
      
      <div className='p-4'>
      <h6 className="text-md font-semibold tracking-tight text-gray-200 ">
        {title}
      </h6>
      <p className="font-normal text-gray-300 text-sm tracking-tight mt-4 mb-4">
        {description}
      </p>
      <div className='flex flex-wrap mb-4'>
        {technologies.map((tech,index)=>(
            <span key={index} className='text-sm text-violet-700 mr-4 tracking-tighter'>{tech}</span>
        ))}
      </div>
      <div>
        <a href={github} className='text-sm text-red-500 mt-4 '>
        {github}</a>
      </div>
    </div>
    </div>
  );
}

