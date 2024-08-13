import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IoLogoGithub}  from "react-icons/io"

export default function page() {
  return (

<>
    <div className='bg-[url("/bg.png")] px-2 md:px-44 bg-cover bg-fixed py-20 items-center text-center justify-center min-h-screen  md:py-40 rounded-b-[30%]'>
         <h1 className='text-yellow-100 text-5xl hidden md:block -mt-8 font-extrabold duration-300 animate-bounce pl-3'>- Projects</h1>
           <div className=' w-[80%]  my-10  shadow-2xl justify-around mt-8 py-[10px] md:py-[100px] m-auto   bg-white rounded-3xl'> 
            <h1 className='font-bold text-lg md:text-2xl text-yellow-950 '>CLI-Based Projects with Typescript:</h1>
            <p className='text-sm md:text-lg mt-4 mb-6 px-[2px] md:px-[40px] text-center text-yellow-700'>During my time at GIAIC, I have worked on several Command Line Interface (CLI) projects using TypeScript. Some notable projects are below:</p> <br /><br />
            <ol className='px-[20px]'>
              <li>
                <h1 className='text-md md:text-xl mt-[20px] font-semibold text-yellow-950'>1. Student Management System:</h1>
                <p className='text-yellow-700 px-[2px] md:px-[80px] text-sm md:text-base'>A comprehensive tool for managing student records, including enrollment, grading, and attendance tracking.</p><br />
                <Link href='https://github.com/Akksaa/Project06_Student-Management-System.git' target='_blank' className='flex gap-[8px] md:pl-[300px] hover:text-yellow-900 text-yellow-700 mb-[40px]'><IoLogoGithub className='text-xl pt-[4px]' />Code on GitHub</Link>
              </li>
              <li>
                <h1 className='text-md md:text-xl mt-[20px] font-semibold text-yellow-950'>2. ATM:</h1>
                <p className='text-yellow-700 px-[2px] md:px-[80px] text-sm md:text-base' >A simulation of an ATM machine, allowing users to perform banking operations such as withdrawals, deposits, and balance inquiries.</p><br />
                <Link href='https://github.com/Akksaa/Project06_Student-Management-System.git' target='_blank' className='flex gap-[8px] md:pl-[300px] hover:text-yellow-900 text-yellow-700 mb-[40px]'><IoLogoGithub className='text-xl pt-[4px]' />Code on GitHub</Link>
              </li>
              <li>
                <h1 className='text-xl mt-[20px] font-semibold text-yellow-950'>3. Currency Converter:</h1>
                <p className='text-yellow-700 px-[2px] md:px-[80px] text-sm md:text-base'>A CLI application for converting currencies based on real-time exchange rates.</p><br />
                <Link href='https://github.com/Akksaa/Project06_Student-Management-System.git' target='_blank' className='flex gap-[8px] md:pl-[300px] hover:text-yellow-900 text-yellow-700 mb-[40px]'><IoLogoGithub className='text-xl pt-[4px]' />Code on GitHub</Link>
              </li>
              <li>
                <h1 className='text-xl mt-[20px] font-semibold text-yellow-950'>4. Todo List:</h1>
                <p className='text-yellow-700 px-[2px] md:px-[80px] text-sm md:text-base'>A simple and intuitive tool for managing tasks and to-do lists.</p><br />
                <Link href='https://github.com/Akksaa/Project06_Student-Management-System.git' target='_blank' className='flex gap-[8px] md:pl-[300px] hover:text-yellow-900 text-yellow-700 mb-[40px]'><IoLogoGithub className='text-xl pt-[4px]' />Code on GitHub</Link>
              </li>
              <li>
                <h1 className='text-xl mt-[20px] font-semibold text-yellow-950'>5. Adventure Game:</h1>
                <p className='text-yellow-700 px-[2px] md:px-[80px] text-sm md:text-base'>An interactive text-based adventure game that allows players to explore different scenarios and make choices that affect the outcome.</p><br />
                <Link href='https://github.com/Akksaa/Project06_Student-Management-System.git' target='_blank' className='flex gap-[8px] md:pl-[300px] hover:text-yellow-900 text-yellow-700 mb-[40px]'><IoLogoGithub className='text-xl pt-[4px]' />Code on GitHub</Link>
              </li>
            </ol>
          </div>
    </div>
    <div className='w-[80%] flex flex-col md:flex-row m-auto mt-10'> 
        <div className='md:w-1/2'>
        <Image  src={'/robot.jpg'} alt='' width={300} height={300} className='mt-4 animate-pulse duration-300'/>
        </div>
        <div className='md:w-1/2 pt-10'>
          <h1 className='text-yellow-950 text-3xl md:text-5xl font-bold border-l-[10px] border-l-yellow-700 pl-3'>Skills</h1> 
          <p className='text-sm md:text-base mt-4 mb-6 text-yellow-950'>At GIAIC, I have successfully completed coursework in TypeScript, a powerful, statically typed language that builds on JavaScript. <br /> 
          Building on my TypeScript expertise, I look forward to leveraging Next.js to create dynamic, performant web applications, and further broadening my web development capabilities.</p>
        </div>
    </div>

    </>
  )
}
