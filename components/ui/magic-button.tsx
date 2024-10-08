import { cn } from '@/lib/utils'
import React from 'react'

type MagicButtonProps = {
    title: string,
    icon?: React.ReactNode,
    position?: string,
    onClick?: () => void,
    className?: string
}
export const MagicButton = ({
    title,
    icon,
    position="right",
    onClick,
    className
}: MagicButtonProps) => {
  return (
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={cn("inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-x-2", className)}>
                { position === 'left' && icon}
                {title}
                { position === 'right' && icon}
            </span>
        </button>
  )
}
