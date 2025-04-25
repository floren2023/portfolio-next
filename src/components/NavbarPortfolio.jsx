"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function NavPortfolio() {
  const pathname = usePathname();
  
  return (
    <div className="bg-neutral-800 px-20 fixed top-0 w-full z-40">
      <Navbar fluid rounded className="bg-neutral-800 z-40 py-4">
        <NavbarBrand href="/">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-purple-500">
            F V
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <div className="flex  m-2 gap-4 items-end text-end text-xl text-slate-300  justify-end  ">
            <FaLinkedinIn />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
            <label className="inline-flex items-center cursor-pointer pl-4">
              <span className="mr-3 text-sm font-medium text-gray-200 dark:text-gray-300">
                Blog
              </span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div
                className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300
   dark:peer-focus:ring-violet-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600 dark:peer-checked:bg-violet-600"
              ></div>
            </label>
          </div>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
         
          <ul className="flex gap-6">
            <li>
            <Link
            href="#home"
            className={
              pathname === "/" || pathname==="#home"
                ? " text-md text-purple-600  tracking-wide  uppercase"
                : "text-slate-200 text-md tracking-wide  uppercase hover:text-purple-600"
            }
            
          >
            Home
          </Link>
            </li>
<li>
<Link
            href="#skills"
            className={
               pathname === "#skills"
                ? " text-md text-purple-600  tracking-wide uppercase"
                : "text-slate-200 text-md tracking-wide  uppercase hover:text-purple-600"
            }
          >
            Skills
          </Link>
</li>
<li>
<Link
            href="#projects"
            className={
              pathname === "#projects"
                ? " text-md text-purple-600  tracking-wide uppercase"
                : "text-slate-200 text-md tracking-wide  uppercase hover:text-purple-600"
            }
          >
            Projects
          </Link>
</li>



          </ul>
          
          
          

          {/* <Link href="/blog" className="text-slate-200 text-md active:text-purple-600 hover:text-purple-600 tracking-wide">Blog</Link> */}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
