import React from "react";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link"

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function NavbarPortfolio() {
  return (
    <Navbar  className=" fixed top-0 bg-slate-900 py-5 w-full z-40 text-xl text-slate-200">
    <NavbarBrand as={Link} href="#">
    <div className="text-6xl text-violet-600 font-semibold">F<span className="text-blue-500">V</span> 
        
        </div>
    
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      
      <NavbarLink href="#" active className="text-slate-200">Home</NavbarLink>
      <NavbarLink href="#" className="text-slate-200">Skills</NavbarLink>
      <NavbarLink href="#" className="text-slate-200">Projects</NavbarLink>
    </NavbarCollapse>
    <div className="flex m-2 gap-4 items-center text-2xl text-slate-300 ">
        <FaLinkedinIn />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
  </Navbar>

   
  );
}

export default NavbarPortfolio;
