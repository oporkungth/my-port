/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3];
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-2 uppercase tracking-[20px]  text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full h-500 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ec2929fb]/80'>

                {projects.map((project, i) => (

                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
        justify-center p-20 md:p-100 h-500 '>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            className='h-90 w-80' src='https://scontent.furt2-1.fna.fbcdn.net/v/t1.15752-9/316683839_1105036803709376_8516044651721918880_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGpeGpfzj39Z7Sz3Ud-Kn4e5Rjotegj8SHlGOi16CPxIf97f2jxksz4pPWsaYDThLkXw98jriLr4oZent72fMit&_nc_ohc=fsXg5CfBIH8AX9YA46-&_nc_oc=AQnvhfpdwILo5tySe876Psx5VJA0iOHWGdZcQRcGdNCDROFeQ5fRZdcxa7Ia6zZ6LeGS64PuLlFahWVsbv4birhG&_nc_ht=scontent.furt2-1.fna&oh=03_AdQiDetkZU9KGN82SNd3b9PxiZWs4zB-1gCh2bMzlGCdaw&oe=63A7917A'
                        />
                        <div>

                            <h4 className='rounded-full border border-gray-600 object-cover
            w-60 h-16 text-4xl font-semibold text-center'>Project {i + 1} of {projects.length}
                            </h4>

                        </div>
                        <p className='text-lg text-center md:text-left'>
                        This is a travel project where you can travel anywhere on the map,
                         but you need an e-wallet. in order to pay it to the driver. This project is web3.0, it will link to your Metamask.
                        </p>

                    </div>

                ))
                }

            </div>

            <div className='w-full absolute top[30%] bg-[#3b3a39] left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}