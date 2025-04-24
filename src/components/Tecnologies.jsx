import React from 'react'
import { RiReactjsLine,RiPhpFill } from 'react-icons/ri'
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb,SiPostgresql,SiTailwindcss,SiAstro  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaCss3,FaAngular, FaBootstrap,FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5,IoLogoVercel } from "react-icons/io5";


function Tecnologies() {
    return (
        <div className='pb-4 mx-10 '>
           
           <h1 className='my-16 text-center text-4xl text-neutral-200 '>Tecnologies</h1>
           <div className="flex ">
           <h2 className='my-10 text-start text-xl text-neutral-400 mx-20'>FrontEnd</h2>
            <div className='flex flex-wrap items-center justify-center gap-3'>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <RiReactjsLine className='text-4xl text-cyan-400'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <TbBrandNextjs className='text-4xl text-white'/>
                </div>
               
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiTailwindcss  className='text-4xl text-cyan-500'/>
                </div>
                
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaCss3  className='text-4xl text-blue-600'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <IoLogoHtml5 className='text-4xl text-orange-500'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaAngular className='text-4xl text-red-600'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <IoLogoVercel className='text-4xl text-slate-900 bg-white'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiAstro className='text-4xl text-white'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaBootstrap className='text-4xl text-violet-600'/>
                </div>
               </div>
               </div>
               <div className='flex'>
                <h2 className='my-10 text-start text-xl text-neutral-400 mx-20'>BackEnd</h2>
                <div className='flex flex-wrap items-center justify-center gap-3'>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiMongodb className='text-4xl text-green-500'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <GrMysql className='text-4xl text-blue-400'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <SiPostgresql className='text-4xl text-sky-700'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <BiLogoSpringBoot  className='text-4xl text-green-400'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <RiPhpFill className='text-4xl text-white bg-violet-400 p-1 rounded-full'/>
                </div>
                <div className="rounded-2xl border-2 border-neutral-600 p-3">
                    <FaNodeJs className='text-4xl text-green-600'/>
                </div>
                    </div>
                </div>
               
            
        </div>
    )
}

export default Tecnologies
