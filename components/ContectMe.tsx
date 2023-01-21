/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { type } from 'os';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

export default function ContectMe({ }: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formdata) => {
        window.location.href = `mailto:oporkungchannel@gmail?subject=${formdata.subject}&body=
        Hi, my name is ${formdata.name}. ${formdata.message} (${formdata.email})`;

    };

    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
    justify-evenly top-6 mx-auto items-center z-0'>
            <h3 className='absolute top-2 uppercase tracking-[20px]  text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col top-2 space-y-10'>
                <h4 className='text-3xl font-semibold text-center'>
                    <span className='decoration-[#ff4040] underline'>Let's Talk.</span>
                </h4>
                <div className='space-y-6'>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#ec2929fb] h-7 w-7 animate-pulse" />
                        <p className='text-2xl'>+66987022691</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#ec2929fb] h-7 w-7 animate-pulse" />
                        <p className='text-2xl'>oporkungchannel@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#ec2929fb] h-7 w-7 animate-pulse" />
                        <p className='text-2xl'> Sub-District: Kathu District: Kathu Province: Phuket Postal Code: 83120 </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button className='bg-[#ec2929fb] py-5 px-10 rounded-md text-black
                        font-bold text-lg'>
                        Submit</button>

                </form>
            </div>
        </div>
    )
}