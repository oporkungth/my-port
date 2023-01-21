import React from 'react'
import { motion } from 'framer-motion';

type Props = {
directionLeft?: boolean;
}

export default function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x:directionLeft ? -200 : 200,
            opacity:0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
        className='rounded-full border border-gray-500 object-cover
         w-24 h-24 xl:w-100 xl:h-100 fillter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute border object-cover opacity-0 group-hover:opacity-60 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0 md:w-22 md:h-22'>

            <div className='flex items-center justify-center h-full'>
              
               <p className='rounded-full text-3xl font-bold text-black fillter opacity-100 md:w-28 md:h-26 xl:w-20 '>50%</p>
            </div>
        </div>

    </div>
  );
}