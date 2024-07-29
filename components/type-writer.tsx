"use client";

import { cn } from '@/lib/utils';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';


type TypewriterProps = {
    words: string[],
    className?: string
}

export const TypeWriter = ({
    words,
    className
}: TypewriterProps) => {
    const [typeEffect] = useTypewriter({
        words: words,
        loop: false,
        typeSpeed: 100,
        deleteSpeed: 40,
      })
  return (
    <div className={cn(className)}>
       {
        ""
       }
        {
            typeEffect
        }
    </div>
  )
}
