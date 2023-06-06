import React from 'react'
import Profile from './../assets/images/profile.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div name='home' className=' h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='text-white flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold'>I'm a Front End Developer</h2>
          <p className='text-gray-400 py-4 max-w-md'>
          I'm Revaldo Hamdallah i'm a graduate majoring in information systems at the at Multimedia Nusantara University. I'm a hardworking, diligent, and fast learner. 
          I love to learn new things and not too linear my major like anything new for me. I'm a web developer enthusiast especially in the field of front end developer.
          I can use technologies like React, Tailwind, Laravel, Mysql, Oracle.

          </p>
          <div className='py-4'>
            <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25}/></span>
            </button>
          </div>
        </div>
        <div className='max-w-xs'> 
              <img className='profile rounded-2xl mx-auto w-2/3 md:w-full' src={Profile} alt="my profile"  />
            </div>
      </div>
    </div>
  )
}

export default Home