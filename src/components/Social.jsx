import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
function Social() {
  const links = [
    {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href:'https://www.linkedin.com/in/revaldohamdallah/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github <FaGithub size={30} />
            </>
        ),
        href:'https://github.com/revaldoh',
      
    },
    {
      id:3,
      child:(
          <>
          Mail <HiOutlineMail size={30} />
          </>
      ),
      href:'mailto:hamdallah89@gmail.com',
     
  },
  {
    id:4,
    child:(
        <>
        Resume <BsFillPersonLinesFill size={30} />
        </>
    ),
    href:'CV_RevaldoHamdallah.pdf',
    style:'rounded-br-md',
    download:true
}
  
    
  ]
    return (
   <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
     <ul className=''>
     {links.map(({id,child,href,style, download})=>(
        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'+ ' '+ style  }> 
        <a className='flex justify-between items-center w-full text-white' href={href} target='_blank' download={download} rel='noreferrer'>{child}</a>
    </li>
     ))}
        {/* <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
            <a className='flex justify-between items-center w-full text-white' href="https://www.linkedin.com/in/revaldohamdallah/"><>LinkedIn <FaLinkedin size={30} /></></a>
        </li> */}
    </ul>
   </div>
  )
}

export default Social