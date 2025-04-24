import React from 'react'
import { EXPERIENCES } from '../constants'

function Experience() {
    return (
        <div className=''>
            <div className='my-20 text-center text-4xl text-neutral-200 '>
            Experience</div>
            <div className='text-xl text-neutral-200 mx-10'>
                 {EXPERIENCES.map((experience,index)=>
                (
                    
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                       <div className='w-full lg:w-1/4'>
                       <p className=' text-neutral-400 text-sm mb-2'>{experience.year}</p>
                       </div>
                       <div className="w-full max-w-xl lg:w-3/4 pl-0 pr-0 sm:pr-5 sm:pl-5">
                       <h5 className='font-semibold mb-2 text-md'>
                        {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                       </h5>
                        <div className='mb-3 text-neutral-400 text-sm  '>{experience.description}</div>
                        {experience.technologies.map((tech,index)=>(
                            <span key={index} className='text-sm italic  text-purple-700 bg-neutral-800 font-medium mr-4 p-1 rounded-sm'>{tech}</span>
                        ))}
                        </div>

                    </div>
                )

                )} 
            </div>
            
            </div>
    )
}

export default Experience
