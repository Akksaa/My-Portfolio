import React from 'react'
import Image from 'next/image'
import {IoLogoGithub}  from "react-icons/io"
import Link from 'next/link'

export default function Home() {
  return (

    <>
  
    <div className='text-center px-2 md:px-44 bg-[url("/bg.png")] bg-cover bg-fixed py-28 md:py-40 rounded-b-[30%]'>
      <h1 className='text-yellow-950 text:5xl md:text-6xl font-extrabold animate-bounce'>Hi, I&apos;m Aqsa Saeed </h1> <br />
      <h1 className='text-yellow-100 text:2xl md:text-5xl font-extrabold md:pl-[350px]'>- A Passionate Developer</h1>
      <p className=' text-sm md:text-lg mt-6 text-yellow-950 md:px-[80px]'>Welcome to my portfolio! I&apos;m Aqsa Saeed, a passionate developer with a focus on creating clean, efficient code and user-friendly experiences. With a solid foundation in TypeScript, HTML, CSS, and Next.js.</p>
    </div>

    <div className='flex-col md:flex-row flex shadow-2xl w-[60%] justify-evenly py-[20px] md:py-[60px] m-auto -mt-[80px] bg-white rounded-2xl'>
            <Image src={'/html-css_processed.png'} className='transition-transform duration-300 hover:scale-125' alt= 'html-css logo' width={250} height={250}/>
            <Image src={'/ts.png'} className='transition-transform duration-300 hover:scale-125' alt='typescript logo' width={200} height={200}/>
            <Image src={'/next_processed.png'} className='transition-transform duration-300 hover:scale-125' alt='next.js logo' width={200} height={200}/>
    </div>

    <div className='w-[80%] flex flex-col md:flex-row m-auto mt-10'> 
        <div className='md:w-1/2'>
        <Image  src={'/science.jpg'} alt='' width={250} height={250} className='mt-16 md:ml-32 duration-300 animate-pulse'/>
        </div>
        <div className='md:w-1/2 pt-10'>
          <h1 className='text-yellow-950 text-3xl md:text-5xl font-bold border-l-[10px] border-l-yellow-700 pl-3'>Currently Enrolled</h1> 
          <p className='text-sm md:text-base mt-4 mb-6 text-yellow-950'>I am currently enrolled at the Governor initiative of Artificial Intelligence and Computing (GIAIC), where I am expanding my knowledge and skills in modern web development and AI technologies. <br />
          My coursework includes advanced training in TypeScript, and I am exploring new technologies such as Next.js and Tailwind CSS. In addition to my studies, I have developed several CLI-based projects using TypeScript.</p>
        </div>
    </div>
    </>

  )

}  

    