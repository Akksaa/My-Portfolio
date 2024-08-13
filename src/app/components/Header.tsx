import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { AiOutlineMenuFold } from "react-icons/ai";

export default function header() {
  return (
    <div className='flex justify-between px-[60px] py-[20px] md:px-10  w-full items-center absolute'>
      <div>
        <Image src ='/my-pic.png' alt ='aqsa-pic' width={100} height={100} className='hover:animate-pulse transition-transform duration-300 flex rounded-full '/>
      </div>
      <div>
        <ul className='hidden md:flex space-x-[60px] font-semibold text-yellow-100 text-lg'>
          <li>
          
          </li>
            <li className=' transition-transform duration-300 hover:scale-125 hover:text-yellow-900'>
               <Link href={'/'}>Home</Link>
            </li>
            <li className='transition-transform duration-300 hover:scale-125 hover:text-yellow-900'>
                <Link href={'/about'}>About</Link>
            </li>
            <li className='transition-transform duration-300 hover:scale-125 hover:text-yellow-900'>
              <Link href={'/projects'}>Projects</Link>
            </li>
            <li className='transition-transform duration-300 hover:scale-125 hover:text-yellow-900'>
                <Link href={'/contact'}>Contact</Link>
            </li>
        </ul>
      </div>
      <div className='static md:hidden text-3xl space-x-40 text-yellow-950'><AiOutlineMenuFold/></div>
 
    </div>
  )
}
