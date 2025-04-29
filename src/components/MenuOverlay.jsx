
"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


function MenuOverlay({ links }) {
     const pathname = usePathname();
  return (
    <ul
      className=" lg:hidden  gap-10  md:flex md:flex-col sm:flex sm:flex-col
         items-center  fixed top-17  border-2 border-double border-fuchsia-700 right-4  left-4 z-50  bg-gray-800 
          rounded-md mx-auto shadow3"
    >
      {links.map((link, index) => (
        <li
          key={index}
          className="border-b-2 border-fuchsia-700 text-center w-full  "
        >
          <a
            href={link.href} 
                >
                    <div 
            className={
              pathname ===link.href
                ? "text-md  cursor-pointer bg-fuchsia-700 text-slate-200  uppercase py-10 w-full"
                : "text-slate-300 text-md   hover:text-slate-200 hover:bg-fuchsia-700 cursor-pointer uppercase py-10 w-full"
            }
          >
            {" "}
            {link.title}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuOverlay;
