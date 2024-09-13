import { technicalSkills } from '@/data'
import React from 'react'
import { LampContainer } from './ui/lamp'
import { Vortex } from './ui/vortex'

export const Technologies = () => {
    debugger
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
        
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] ">
            <Vortex
                backgroundColor=""
                baseHue={120}
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div className='text-4xl lg:text-6xl font-bold text-purple-500 mb-20'>
                    Technologies
                </div>
               <div className='w-full pt-10 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px), transparent_100%)] rounded-lg'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
                {
                    technicalSkills.map((tech, ind) => (
                        <li key={`technical-skills-${ind}}`}>
                            { tech }
                        </li>
                    ))
                }
            </ul>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll' aria-hidden="true">
                {
                    technicalSkills.map((tech, ind) => (
                        <li key={`technical-skills-${ind}}`}>
                            { tech }
                        </li>
                    ))
                }
            </ul>
        </div> 
            </Vortex>
        </div>
        
    </div>
  )
}
