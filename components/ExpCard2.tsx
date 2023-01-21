/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function ExpCard({ }: Props) {
    return (
        <article className='top-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
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
                className='top-10 h-52 w-52 rounded-full xl:w-[95px] xl:h-[100px]
                object-cover object-center'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA90ZrUfSUO-iDFK31XKrPQFDci_t78Z3gRmuYCA0IJmqiCL8ZIztnT55dkHJtwEj4kUA&usqp=CAU"
                alt="" />
        
        <div className='px-0 md:px-0 xl:h-[500px]'>
            <h4 className='text-4xl font-light'>Finstable Trainee</h4>
            <p className='font-bold text-2xl mt-1'>Finstable</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />
                 <img
                className='h-10 w-10 rounded-full'
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                 
            </div>
            <p className='uppercase py-5 text-gray-300'>
            start work 17 August 2022 end 5 December 2022</p>
            
            <ul className='list-disc scpae-y-4 ml-5 text-lg'>
                <li>I learned about Fronend at Finstable. </li>
                <li>i learn a new language for programming </li>
                <li>I got better at Fronend. </li>
                <li>I got along with a lot of people. </li>
                <li>I have experience with NextJs Typescript Javascript React and Tailwind.</li>
            </ul>

            </div>
        


        </article>

        
    )
}