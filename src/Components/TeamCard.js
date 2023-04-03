import React from 'react'
import TeamCardImg from '../Assets/TestImages/TeamCardImgDemo.jpg'

const TeamCard = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-TILGold text-center p-4 rounded-md'>
        <img
          src={TeamCardImg}
          alt='Profile Picture'
          className='w-[6rem] h-[6rem] rounded-full'
        />
        <div>
          <p className='w-full '>Name</p>
          <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </>
  )
}

export default TeamCard