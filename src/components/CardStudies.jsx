

export default function CardStudies({
  year,
  title,
  center,
  description,
  address,
}) {
  return (
    <div className="bg-gray-900 shadow3 h-[200px] border-1 border-neutral-600 p-4 flex gap-2 flex-col rounded-md ">
      <div className="font-semibold  text-md  text-purple-600">{title}</div>
      <div className=" text-neutral-400 text-sm  ">{description}</div>
      <p className=" text-neutral-400 text-sm ">
        {year} - <span className="text-neutral-300">{center}</span>
      </p>
      <p className="text-sm text-neutral-400 italic justify-center text-center mt-2">{address}</p>
    </div>
  );
}
