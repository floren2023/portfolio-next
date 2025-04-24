import React from 'react'
import { HERO_CONTENT } from '../constants'
import Image from 'next/image'
function Hero() {
    return (
        
            <div className='flex flex-wrap  mt-20 mx-10'>
                <div className='w-full lg:w-1/2'>
                 <div className='flex flex-col sm:items-center md:items-center lg:items-start lg:pl-20'>
                    <div className=' text-6xl mb-10 tracking-tight font-thin
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-600
                      via-gray-500 to-indigo-400 '>
                    Florenta  &nbsp; Vakar 
                    </div>
                    <div className='text-4xl bg-clip-text text-transparent tracking-thin 
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                         Full Stack Developer</div>
                         <p className='text-slate-200 my-2 font-light tracking-tighter py-6 max-w-xl  '>
                            {HERO_CONTENT}
                         </p>

                 </div>


                </div>
                <div className='items-center w-full lg:w-1/2 lg:p-8 '>
                <div className='justify-center flex '>
                    <Image src="/assets/fotoperfil.jpg" width={500} height={300} alt ="imagen perfil"/>
                </div></div>
            </div>

        
        
    )
}

export default Hero
