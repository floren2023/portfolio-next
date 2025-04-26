
import { Card } from "flowbite-react";

export function CardFlow({title,description,image,technologies,github,gitbackend}) {
  return (
    <Card
      className="max-w-sm  mt-10 sm:h-[450px] lg:mt-0 lg:h-[430px] bg-gray-900  border-none shadow3"
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
            <span key={index} className='text-sm text-violet-500
             mr-1 tracking-tighter bg-slate-800
             rounded-md px-1  '>{tech}</span>
        ))}
      </div>
      </div>
      <div className='flex  gap-10  content-baseline  justify-center'>
      <div className=' align-bottom items-baseline'>
        <a href={github} className='text-sm text-red-500  '>
        Git front-end</a>
      </div>
     {gitbackend&&( <div className='align-bottom items-baseline'>
        <a href={gitbackend} className='text-sm text-red-500  '>
        Git backend</a>
      </div>)}
      </div>
    </Card>
  );
}

