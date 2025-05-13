import { Card } from "flowbite-react";

export function CardExperience({
  year,
  role,
  company,
  description,
  technologies,
}) {
  return (
  
    <Card className="border-1 border-neutral-600  text-slate-200 text-md h-[300px] pt-4
     bg-gray-900 rounded-md  shadow3">
      
      <div className="w-full ">
        <p className=" text-neutral-400 text-sm mb-2">{year}</p>
      
      
        <h5 className="font-semibold mb-4 text-md text-fuchsia-700">
          {role} - <span className="text-md text-gray-500">{company}</span>
        </h5>
        <div className="mb-8 text-gray-300 text-md  ">
          {description}
        </div>
        <div className="flex flex-wrap w-full">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-sm italic  text-fuchsia-500 bg-neutral-800 font-medium mr-1 mb-2 p-1 rounded-sm"
          >
            {tech}
          </span>
        ))}</div>
      </div>
      
    </Card>
    
  );
}
