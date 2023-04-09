import React from 'react'

// Icon Imports
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
        <div className='w-full py-8 flex flex-col justify-center items-center '>
            <h1 className='font-bold text-3xl'>
                <span className='text-TILGold'>THIS</span> 
                IS 
                <span className='text-TILGold'>LIVE</span>
                <span>.</span>  
            </h1>
            <div className='flex justify-center items-center mt-8 space-x-3'>
                <a 
                    className='rounded-full cursor-pointer hover:scale-125 ease-linear duration-100'
                    href='/'
                >
                    <BsFacebook size={15}/>
                </a>
                <a 
                    className='rounded-full cursor-pointer hover:scale-125 ease-linear duration-100'
                    href='/'
                >
                    <BsTwitter size={15}/>
                </a>
                <a 
                    className='rounded-full cursor-pointer hover:scale-125 ease-linear duration-100'
                    href='/'
                >
                    <BsInstagram size={15}/>
                </a>
            </div>
            <p className='text-xs text-TILGrey mt-4 '>Copyright @ 2010-2022 ThisIsLive All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer