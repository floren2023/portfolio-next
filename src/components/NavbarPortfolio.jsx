"use client";
import React, { useState } from "react";
import '../app/globals.css'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
const navLinks = [
  {
    href: "/",
    title: "Home",
  },

  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#projects",
    title: "Projects",
  },
];

export default function NavPortfolio() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="bg-gray-900 z-40 py-4 flex w-full  sm:px-4 md:px-4 lg:px-10 lg:gap-20  justify-between fixed top-0 
    opacity-0.9  shadow3">
      <div className="sm:pl-4">
        <a href="/" className="flex ml-4 ">
          <img src="/favicon.svg" className="mr-3 h-10 sm:h-10" alt="Logo" />

          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-fuchsia-700">
            F V
          </span>
        </a>
      </div>
      <div className="flex md:order-2">
        <div className="flex  m-2 gap-4 items-end text-end text-xl text-slate-300  justify-end  ">
          <FaLinkedinIn />
          <FaGithub />

          <label className="inline-flex items-center cursor-pointer pl-4">
            <span className="mr-3 text-sm font-medium text-fuchsia-600 dark:text-gray-300">
              Blog
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
                 peer-focus:ring-fuchsia-400
   dark:peer-focus:ring-fuchsia-800 rounded-full peer
    dark:bg-gray-700 peer-checked:after:translate-x-full
     rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
     after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white
      after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
       dark:border-gray-600 peer-checked:bg-fuchsia-600 dark:peer-checked:bg-fuchsia-600"
            ></div>
          </label>
        </div>
      </div>
     
      <div className="menu  md:block hidden md:w-auto lg:flex" id="navbar">
        <ul className="lg:flex gap-10 text-md md:flex md:space-x-8 py-2">
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
            className="items-end p-2 border-2 border-slate-200 text-slate-200 rounded-md"
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
