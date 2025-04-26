import { Card } from "flowbite-react";

export default function CardStudies({
  year,
  title,
  center,  
  description,
  address,
}) {
  return (
    <Card className="bg-gray-900 text-slate-200 text-md h-[240px] border-none shadow3">
      <div className="w-full ">
        <p className=" text-neutral-400 text-sm mb-4">{year}</p>
        <p className=" text-neutral-400 text-sm mb-4">{center}</p>
      
        <h5 className="font-semibold mb-4 text-md">
           <span className="text-sm text-purple-100">{title}</span>
        </h5>
        <div className="mb-8 text-neutral-400 text-sm  ">
          {description}
        </div>
        <div className="">
        <span className="text-sm text-purple-100">{address}</span>
        </div>
      </div>
    </Card>
  );
}
