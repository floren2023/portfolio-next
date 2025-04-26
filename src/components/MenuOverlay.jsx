import React from 'react'
import NavLink from './NavLink'

function MenuOverlay({links}) {
    return (
        <ul className=' lg:hidden  gap-10  md:flex md:flex-col sm:flex sm:flex-col
         items-center  fixed top-17 rounded-md border-2 border-fuchsia-500 right-4 z-50 left-0 bg-gray-800  w-full'>
            {links.map((link,index)=>(
                <li key={index} className='border-b-2 border-fuchsia-500   w-full pb-8 text-center pt-8'>
                    <NavLink href={link.href} title={link.title}/>
                </li>
            )
            )}

        </ul>
        
    )
}

export default MenuOverlay
