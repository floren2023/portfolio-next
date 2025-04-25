import React from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react"

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




export default function NavPortfolio() {
  return (
    <div className="bg-neutral-800 px-20 fixed top-0 w-full">
    <Navbar fluid rounded className="bg-neutral-800 ">
      <NavbarBrand href="https://localhost:3000">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-purple-500">F V</span>
      </NavbarBrand>
      <div className="flex md:order-2">
      <div className="flex  m-2 gap-4 items-end text-end text-2xl text-slate-300  justify-end  ">
      <FaLinkedinIn />
      <FaGithub />
      <FaSquareXTwitter />
      <FaInstagram />
    </div>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
      <NavbarLink href="#home" active className="text-slate-200 text-md active:text-purple-600 hover:text-purple-600 tracking-wide">Home</NavbarLink>
      <NavbarLink href="#skills" className="text-slate-200 text-md active:text-purple-600 hover:text-purple-600 tracking-wide">Skills</NavbarLink>
      <NavbarLink href="#projects" className="text-slate-200 text-md active:text-purple-600 hover:text-purple-600 tracking-wide">Projects</NavbarLink>
      
      <NavbarLink href="/blog" className="text-slate-200 text-md active:text-purple-600 hover:text-purple-600 tracking-wide">Blog</NavbarLink>

      </NavbarCollapse>
    </Navbar>
    </div>
  );
}





      
