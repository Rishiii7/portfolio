import React from 'react'
import { Button } from './ui/moving-border'
import { workExperience } from '@/data'

export const Experience = () => {
  return (
    <div id='experience' className='w-full py-20  flex flex-col justify-center'>
        <div className='text-center text-4xl font-bold lg:text-6xl'> 
            My{" "}
            <span className='text-purple-500'>
                Work Experience
            </span>
        </div>
        <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {
            workExperience.map( (card, ind) => (
            <Button 
              key={`${card.companyName}-${ind}`}
              borderRadius='1.75rem'
              duration={Math.floor(Math.random() * 1000) + 5000}
              className='flex-1 text-white border-neutral-200 dark:border-slate-800 p-2'
              style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
            >
                <div className='space-y-4'>
                  <div className='flex items-center gap-32'>
                  <img 
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className='w-16 lg:w-32 flex-none'
                    
                    />
                    <div>

                    <h1 className='text-2xl lg:text-4xl font-bold flex-grow'>
                      { card.companyName}
                    </h1>
                    <p className='text-lg'>
                      {card.designation}
                    </p>
                    </div>
                  </div>
                  <div className='p-4'>
                    
                    <p className='text-sm'>
                      { card.description}
                    </p>
                  </div>
                </div>
            </Button>
            ))
          }
        </div>
    </div>
  )
}
