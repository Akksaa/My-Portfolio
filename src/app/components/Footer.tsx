import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoLogoGithub}  from "react-icons/io"
import {FaLinkedinIn}  from "react-icons/fa"
import { SiDiscord } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <div className='md:flex align-middle gap-[30px] p-[60px] bg-yellow-950'>
      <div className='md:w-1/3 mb-[20px] md:mb-[0px]'>
            <h1 className='text-white text-2xl font-bold mb-5 border-l-yellow-700 border-l-[6px] pl-[10px]'>About Me</h1>
            <Image src={'/my-pic.png'} alt='Aqsa saeed' height={80} width={80} className='rounded-full'/>
            <p className='text-yellow-800 pr-[40px] mt-5'>Senior Student at GIAIC (Tuesday 2-5)
                Aspiring web developer with a strong foundation in coding and a passion for learning new technologies. </p>
      </div>
      <div className='md:w-1/3 mb-[20px] md:mb-[0px]'> 
            <h1 className='text-white text-2xl font-bold border-l-yellow-700 border-l-[6px] pl-[10px]'>Follow Me</h1>
            <ul className='pt-[20px] pl-[20px] text-yellow-800'>
                <li><Link href='https://www.linkedin.com/in/akksa-saeed-a561862b9' target='_blank' className='hover:text-yellow-700 flex gap-[10px]'> <FaLinkedinIn className='text-xl pt-[6px]'/> LinkedIn</Link></li>
                <li><Link href='https://github.com/Akksaa' target='_blank' className='hover:text-yellow-700 flex gap-[10px]'><IoLogoGithub className='text-xl pt-[6px]'/> GitHub</Link></li>
                <li><Link href='https://discordapp.com/users/TheAqsa/' target='_blank' className='hover:text-yellow-700 flex gap-[10px]'><SiDiscord className='text-xl pt-[6px]'/>Discord</Link></li>
            </ul>
      </div>
      <div className='md:w-1/3 mb-[20px] md:mb-[0px]'>
           <h1 className='text-white text-2xl font-bold border-l-yellow-700 border-l-[6px] pl-[10px]'>Contact Me</h1>
           <ul className='pt-[20px] pl-[20px] text-yellow-800'>
              <li><Link href={'/'} className='hover:text-yellow-700 flex gap-[10px] '><MdOutlineEmail className='text-xl pt-[6px]' />akksa007@gmail.com</Link></li>
              <li><Link href={'/'} className='hover:text-yellow-700 flex gap-[10px]'><FaLocationDot className='text-xl pt-[6px]'/>Karachi, Pakistan</Link></li>
           </ul>
      </div>
    </div>
    <div className='px-[60px] text-center py-[2px]'>
      <p className='font-semibold'>All Rights Reserved © | <br className='md:hidden' /> <Link href='https://github.com/Akksaa' target= '_blank'>Aqsa Saeed</Link></p>



    </div>

    </>
  )
}

