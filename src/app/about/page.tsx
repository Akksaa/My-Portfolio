import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
    <div className='bg-[url("/bg.png")] px-2 md:px-44 bg-cover bg-fixed py-20 md:py-40 justify-center min-h-screen items-center  rounded-b-[30%]'>
    <h1 className='text-yellow-100 text-3xl md:text-5xl font-extrabold duration-300 animate-bounce text-center -mt-8 pl-3 hidden md:block'>- About</h1>
      <div className='w-[80%] my-10  flex shadow-2xl justify-around  py-[10px] md:py-[60px] m-auto text-center  bg-white rounded-3xl'> 
          <p className='text-center px-2 md:px-[80px] text-sm md:text-lg text-yellow-950'>I am a passionate developer with a strong foundation in web development, specializing in TypeScript, HTML, and CSS. I have completed my matriculation and am currently enrolled in the Governor Initiative for Artificial Intelligence & Computing (GIAIC), where I continue to expand my knowledge and skills. My journey in programming began with self-learning HTML and CSS, which laid the groundwork for my subsequent exploration of Typescript. <br /> <br />
          At GIAIC, I have had the opportunity to deepen my understanding of TypeScript, creating several CLI-based projects, including a student management program, ATM simulator, currency converter, todo list, and an adventure game. These projects have honed my problem-solving skills and given me practical experience in developing efficient, user-friendly applications. <br /> <br />
          Next, I am diving into Next.js to further enhance my web development skills. My goal is to become a full-stack developer, capable of building robust, scalable applications. I am excited to continue learning and growing in this ever-evolving field.</p>
      </div>

      </div>
      <div className='w-[80%] md:flex-row flex-col flex m-auto mt-10'> 
          <div className=' md:w-1/2'>
            <Image  src={'/books.jpg'} alt='' width={450} height={450} className='mt-4  duration-300 animate-pulse'/>
            </div>
            <div className='md:w-1/2 pt-10'>
              <h1 className='text-yellow-950 text-3xl md:text-5xl font-bold border-l-[10px] border-l-yellow-700 pl-3'>Education</h1> 
              <p className=' text-sm md:text-base mt-4 mb-6 text-yellow-950'>My educational journey began with my matriculation, where I built a strong foundation in various subjects, preparing me for more specialized studies in college. This period was crucial for developing my academic skills and shaping my interests. <br />
              In addition to my formal education, I have taken the initiative to self-learn HTML and CSS, the cornerstone technologies of web development through online resources, tutorials, and projects.</p>
          </div>
      </div>
    </>    
  )
}
