

export default function CardStudies({
  year,
  title,
  center,
  description,
  address,
}) {
  return (
    <div className=" shadow3 h-[240px]  p-4 flex gap-2 flex-col rounded-md ">
      <div className="pt-4 font-semibold  text-xl  text-fuchsia-600  mb-4">{title}</div>
      <div className=" text-neutral-400 text-sm  ">{description}</div>
      <p className=" text-neutral-400 text-sm ">
        {year} - <span className="text-neutral-300">{center}</span>
      </p>
      <p className="text-sm text-neutral-400 italic justify-center text-center mt-2">{address}</p>
    </div>
  );
}
