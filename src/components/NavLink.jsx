"use client"
import React from 'react'
import Link from "next/link"
 
import { usePathname } from 'next/navigation'


function NavLink({href,title}) {
    const pathname=usePathname()
    
    return (
          <Link href={href} 
         className={
            pathname === href
              ? "text-md  cursor-pointer  text-fuchsia-400" 
              : "text-slate-400 text-md   hover:text-fuchsia-400 cursor-pointer "
         } > {title}
               </Link>
      
             
                 
         
    )
}

export default NavLink
