"use client"
import React from 'react';
import { Spotlight } from '@/components/ui/Spotlight';
import { MainTechnologies } from '@/data';
import { useTypewriter } from 'react-simple-typewriter';
import { MagicButton } from './ui/magic-button';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { BackgroundGradient } from './ui/background-gradient';

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: MainTechnologies,
    loop: false,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className='py-20 relative'>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
      <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='blue' />
      <Spotlight className='top-28 left-0 md:-left-32 h-[80vh] w-[50vw]' fill='purple' />
      <Spotlight
        className="top-20 left-1/2 md:left-1/2 md:-top-10 h-[80vh] w-[50vw]"
        fill="purple"
      />
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-small-white/[0.03] bg-grid-small-black/[0.02] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div id='about' className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw]  flex flex-col items-center justify-center'>
          {/* <h2 className='uppercase tracking-widest text-xs text-center text-purple-200 max-w-80'>
            Made with 💜 by Rishikesh Solapure
          </h2> */}
          <div className='flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-40'>
            <div className='text-center'>
                <h1 className='font-bold space-x-2 flex-wrap justify-center relative text-3xl lg:text-6xl w-full'>
                  Software Engineer that excels in <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600'>{typeEffect}</span>
                </h1>
              <p className='text-center text-sm lg:text-lg py-5'>
                Hi, I&apos;m Rishikesh Solapure, a Software Engineer passionate about developing scalable, maintainable large-scale applications.
              </p>
              <a href='#projects' className='mt-10'>
                <MagicButton 
                  title='Show my work'
                  icon={<FaLocationArrow />}
                />
              </a>
            </div>
            <div className='mt-10 md:mt-0'>
            <BackgroundGradient >
              <Image 
                src={"/photo.jpeg"}
                alt='logo'
                width={500}
                height={500}
                className='rounded-3xl'
              />
              </BackgroundGradient>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
