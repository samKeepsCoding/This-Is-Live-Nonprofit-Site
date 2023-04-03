import React from 'react'

import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
      <div className='h-screen p-4'>
        <Navbar/>
        <div className=' w-full max-w-7xl' id='home'>
          <div className='flex flex-col justify-center items-center md:items-start mt-[9rem] w-full max-w-5xl md:px-16'>
            <div className='flex flex-col text-start'>
              <p className='text-4xl text-TILWhite font-medium'>Making steps toward</p>
              <h1 
                className='text-4xl md:text-6xl text-TILGrey font-extrabold mt-3 uppercase'
              >
                Empowering Creative Stabil<span className='text-TILGold'>ity</span>
              </h1>
              <div className='flex flex-col-reverse md:flex-row space-x-0 md:space-x-5 items-start md:items-center mt-6'>
                <button className='bg-TILGold rounded-xl text-TILBlack text-sm font-semibold py-3 w-[150px] mt-4 md:mt-0'>
                  <a href='/'>
                    DONATE NOW
                  </a>
                </button>
                <p className='text-sm font-medium max-w-sm '>We provide creative communities with an incubator that supports their musical growth and development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero