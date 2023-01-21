/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContectMe from '../components/ContectMe'
import Exp from '../components/Exp'
import Header from '../components/Header'
import Me from '../components/Me'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ec2929fb]/80'>
      <Head>
        <title>Opor's Portfolio</title>
      </Head>
    
    <Header />
   
    <section id='Home' className='snap-start'>
      <Me />
    </section>

    <section id='About' className='snap-center'>
      <About />
    </section>

    <section id= 'Exp' className='snap-center'>
    <Exp />
    </section>

    <section id='Skills' className='snap-start'>
    <Skills />
    </section>
    
    <section id='Contectme' className='snap-start'>
      <ContectMe />
    </section>

    <Link href="#Home">
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img className='h-10 w-10 rounded-full fillter grayscale hover:grayscale-0'
        src="https://cdn-icons-png.flaticon.com/512/60/60817.png"/>
      </div>
    </footer>
    
    </Link>

    </div>
  )
}
