import { technicalSkills } from '@/data'
import React from 'react'
import { LampContainer } from './ui/lamp'

export const Technologies = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
        <div className='text-4xl lg:text-6xl font-bold text-purple-500'>
            Technologies
        </div>
        
        <div className='w-full pt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px), transparent_100%)] rounded-lg'>
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
    </div>
  )
}
