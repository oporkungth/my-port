/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BgCircle from './BgCircle';

type Props = {}

export default function Me({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi my name's Suppnat.",
            "I'am trainee from Finstable.",
            "Let's See My Portfolio!"
        ],
        loop: true,
        delaySpeed: 2000,
    });


    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BgCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='profile3.jpg' />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>Software Engineer</h2>
                <h1 className='text-4xl lg:text-3.5xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#8197FF' />
                </h1>

                <div className='pt-5'>
                    
                    <Link href="#About">
                    <button className='MeButton'>About</button>
                    </Link>
                    
                    <Link href="#Exp">
                    <button className='MeButton'>Experience</button>
                    </Link>
                    
                    <Link href="#Skills">
                    <button className='MeButton'>Skill</button>
                    </Link>

                    <Link href="#Contectme">
                    <button className='MeButton'>Contact</button>
                    </Link>

                    
                </div>
            </div>



        </div>
    )
}