/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

export default function About({}: Props) {
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
    className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
  
      <motion.img 
      initial={{
        x: -200,
        opacity:0,
      }}
      transition={{
        duration:1.2,
      }}
      whileInView={{
        x:0, 
        opacity:1,
      }}
      viewport={{
        once:true
      }}
        src='profileabout.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
            This's me.
            </h4>
            <p className='text-base'>Hi !🙂 My name is Suppnat Decharad.
             I am studying at Prince of songkla university phuket campus major software engineering 💻,
             My hobbies are quite a lot such as play games 🎮,drawing ✏️,coding for lernsomething 🧑‍💻,I want to be a front end developer 
             after graduating from this university,I'm easy to socialize, I'm friendly,I can learn what interests me for a long time,
             And most importantly, I can work as a team with other people 💼,I hope you are interested in me thank you so much.😁

            </p>
        </div>


    </motion.div>
  );
}