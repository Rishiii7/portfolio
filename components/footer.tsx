"use client";

import React from 'react';
import { MagicButton } from './ui/magic-button';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div id='contact' className=' flex flex-col justify-center items-center w-full'>
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-4xl lg:text-6xl py-10 text-purple-500 font-bold">
          Let's Connect
        </h1>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-10 space-y-8 flex-col justify-between items-center">
        
        <div className=" w-full flex items-center justify-center gap-8">
          {socialMedia.map((info) => (
            <div
              key={info.link}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link  href={info.link}>
                {info.icon}
              </Link>
            </div>
          ))}
        </div>

        <div>
            <p className="md:text-base text-sm md:font-normal font-light mt-10">
            MADE WITH 💜 BY RISHIKESH SOLAPURE
            </p> 
        </div>
      </div>
    </div>
  )
}
