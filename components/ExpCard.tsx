/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function ExpCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true
                }}
                className='h-52 w-52 rounded-full xl:w-[95px] xl:h-[130px]
                object-cover object-center'
                src="https://www.computing.psu.ac.th/th/wp-content/uploads/2018/03/PSU-logo-Original.png"
                alt="" />
        
        <div className='px-0 md:px-0 xl:h-[500px]'>
            <h4 className='text-4xl font-light'>Prince of Songkla University Students</h4>
            <p className='font-bold text-2xl mt-1'>prince of songkla university phuket campus</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
        
                 
            </div>
            <p className='uppercase py-5 text-gray-300'>
            start study August 2017 end 5 December 2022</p>
            
            <ul className='list-disc scpae-y-4 ml-5 text-lg'>
                <li>I studied about the program. </li>
                <li>I learned program development from this university. </li>
                <li>I learned to work as a team. working with others. </li>
                <li>I can work on Fronend better than Backend. </li>
                
            </ul>

            </div>
        


        </article>

        
    )
}