import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
<div className='bg-[url("/bg.png")] px-2 md:px-44 items-center py-20 md:py-40 bg-cover bg-fixed rounded-b-[20%]'>
    <h1 className='text-yellow-100 text-3xl md:text-5xl duration-300 animate-bounce font-extrabold text-center -mt-8 pl-3 hidden md:block'>- Contact</h1>
    <div className="flex items-center justify-center m-auto">
    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-yellow-700 outline-none rounded-md focus:ring-yellow-700"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="mt-8 block w-full px-4 py-2 border border-yellow-700 outline-none rounded-md focus:ring-yellow-700"
                  placeholder="Your Email"
                />
              </div>
              <div>
              <input
                  type="password"
                  id="email"
                  className="mt-8 block w-full px-4 py-2 border border-yellow-700 outline-none rounded-md focus:ring-yellow-700"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  className="mt-8 block w-full px-4 py-2 border border-yellow-700 outline-none rounded-md focus:ring-yellow-700"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-yellow-900 text-yellow-100 font-semibold rounded-md hover:bg-orange-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700"
              >
                Submit
              </button>
            </form>
          </div>
          </div>
    </div>
    <div className='flex-col md:flex-row flex shadow-2xl w-[60%] justify-evenly py-[20px] md:py-[60px] m-auto -mt-[80px] mb-[40px] bg-white rounded-2xl'>
            <Image src={'/search.jpg'} className='transition-transform duration-300 hover:scale-125' alt= 'html-css logo' width={100} height={100}/>
            <Image src={'/chrome.jpg'} className='transition-transform duration-300 hover:scale-125' alt='typescript logo' width={100} height={100}/>
            <Image src={'/robot2.jpg'} className='transition-transform duration-300 hover:scale-125' alt='next.js logo' width={100} height={100}/>
    </div>
    </>
  )
}
