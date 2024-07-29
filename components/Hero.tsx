"use client"
import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffect } from './ui/typewriter-effect';
// import Typewriter from 'typewriter-effect';
import { MainTechnologies } from '@/data';
import Typewriter from 'typewriter-effect';
import {useTypewriter, Cursor} from "react-simple-typewriter"
import { TypeWriter } from './type-writer';
import { MagicButton } from './ui/magic-button';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: MainTechnologies,
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  return (
    <div className='pb-20 pt-36'>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='blue' />
      <Spotlight className='top-28 left-80 md:-left-32 h-[80vh] w-[50vw]' fill='purple' />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-small-white/[0.03] bg-grid-small-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className=' uppercase tracking-widest text-xs text-center text-purple-200 max-w-80'>
            Made with 💜 by Rishikesh Solapure
          </h2>
          <div className='flex items-center space-x-2 flex-wrap justify-center relative text-2xl lg:text-7xl text-center'>
            <h1 className=' font-bold'>
              Software engineer that excels in <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600'>{ typeEffect }</span>
            </h1>
            
          </div>
          <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#6666FF]'>
          </div>
          <p className='text-center text-xs lg:text-lg pt-5'>
            Hi, I&apos;m Rishikesh Solapure a Software Engineer with passionate about developing building scalable, maintainable large scale applications
          </p>
          <a href='#about' className='pt-5'>
            <MagicButton 
              title='Show my work'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
