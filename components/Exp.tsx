import React from 'react'
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';
import ExpCard2 from './ExpCard2';

type Props = {}

export default function Exp({ }: Props) {
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
        className='h-screen flex relative overflow-hidden flex-col 
    text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto'>

            <h3 className='absolute top-5 uppercase tracking-[20px] 
       text-gray-500 text-2xl items-center'>Experience
            </h3>
        
        <div className='absolute top-5 w-full flex-center flex space-x-3 p-10 snap-x snap-mandatory'>
        <ExpCard />
        <ExpCard2 />
        </div>
     
        </motion.div>
    )
}