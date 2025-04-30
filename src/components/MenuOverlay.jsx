
"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion"



function MenuOverlay({ links }) {
     const pathname = usePathname();
  return (
    <motion.ul
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
      className=" lg:hidden    md:flex md:flex-col sm:flex sm:flex-col
         items-center  fixed top-17  border-2  border-fuchsia-700 right-4  left-4 z-50  bg-gray-800 
          rounded-md mx-auto shadow3"
    >
      {links.map((link, index) => (
        <li
          key={index}
          className="border-b-2 border-fuchsia-700 text-center w-full  "
        >
          <a className=""
           
            href={link.href} 
                >
                    <div 
            className={
              pathname ===link.href
                ? "text-md  cursor-pointer bg-fuchsia-700 text-slate-200  uppercase py-10 w-full duration-300 ease-in-out"
                : "text-slate-300 text-md   hover:text-slate-200 hover:bg-fuchsia-700 cursor-pointer duration-300 ease-in-out hover:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] uppercase py-10 w-full"
            }
          >
            {" "}
            {link.title}
            </div>
          </a>
        </li>
      ))}
    </motion.ul>
  );
}

export default MenuOverlay;
