import React from 'react'
import { CardProject } from './CardProject'
import { PROJECTS } from '@/constants'

function Projects() {
    return (
        <div>
         <h1 className='my-16 text-center text-4xl text-neutral-200 '>Projects</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 lg:pl-20 lg:pr-20 sm:pl-5 sm:pr-5 md:pl-10 md:pr-10'>
           
            {PROJECTS.map((item,index)=>(
            <div key={index} className='text-white'>
                
                <CardProject title={item.title} image={item.image} description={item.description} 
                technologies={item.technologies} github={item.github}/> 
            </div>
          )  )}
            
        </div>
        </div>
    )
}

export default Projects
