"use client";
import React, { useState } from "react";
import '../app/globals.css'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link"
const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },

  {
    href: "/skills",
    title: "Skills",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  
];

export default function NavPortfolio() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-black z-40 py-4 flex w-full  sm:px-4 md:px-4 lg:px-10 lg:gap-8  justify-between fixed top-0 
    opacity-0.9  shadow3">
      <div className="sm:pl-4">
        <a href="/" className="flex ml-4 ">
          <img src="/favicon.svg" className="mr-1 h-10 sm:h-10" alt="Logo" />

          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white
           text-fuchsia-700 font_title">
            FV
          </span>
        </a>
      </div>
      <div className="flex md:order-2">
        <div className="flex  pr-4 m-2 gap-4 items-end text-end text-xl text-violet-700  justify-end  ">
         <Link href="https://www.linkedin.com/in/florenta-vakar-ba072b362/" className="hover:text-fuchsia-700"><FaLinkedinIn /></Link>
         <Link href="https://github.com/floren2023/portfolio-next" className="hover:text-fuchsia-700"> <FaGithub />
         </Link>
         
         
        </div>
      </div>
     
      <div className="menu  md:block hidden md:w-auto lg:flex" id="navbar">
        <ul className="lg:flex gap-10 text-xl md:flex md:space-x-8 py-2 font_title">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink href={navLink.href} title={navLink.title} />
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mobile-menu block md:hidden mr-8 ">
      {navbarOpen && <MenuOverlay links={navLinks} />}
        {navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(false)}
            className="items-end p-2 border-2 border-slate-200 text-slate-200 rounded-md "
          >
            <MdOutlineClose className="w-5 h-5" />
            
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(true)}
            className="items-end p-2 border-2 border-slate-200 text-slate-200 rounded-md"
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>
        )}
       
      
      </div>
     
    </nav>
  );
}
