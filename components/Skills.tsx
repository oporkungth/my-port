import React from 'react'
import { motion } from 'framer-motion';
import Skill from './Skill';
import Skill2 from './Skill2';
import Skill3 from './Skill3';
import Skill4 from './Skill4';
import Skill5 from './Skill5';
import Skill6 from './Skill6';
import Skill7 from './Skill7';
import Skill8 from './Skill8';

type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
    className='flex relative flex-col text-center md:text-left
     xl:flex-row max-w-[500px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-5 uppercase tracking-[20px] 
       text-gray-500 text-2xl'>Skills</h3>

      <h4 className='absolute top-20 uppercase tracking-[6px] text-gray-500 text-sm'>
        Hover over a skill for currency profieciency</h4>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill2 />
        <Skill3 />
        <Skill4 /> 
        <Skill5 /> 
        <Skill6 /> 
        <Skill7 /> 

      </div>

    </motion.div>
  )
}