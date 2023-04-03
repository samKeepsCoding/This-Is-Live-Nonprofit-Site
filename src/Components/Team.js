import React from 'react'
import '../Assets/Styles/Team.css'
import teamworkDemoImg from '../Assets/TestImages/TeamworkDemoImg.jpg'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <>
        <div 
          className='w-full flex justify-center items-center px-4 py-16 bg-cover bg-center' 
          style={{backgroundImage:`url(${teamworkDemoImg})`}}>
          <div className='max-w-4xl w-full flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-16 space-y-11 md:space-y-0'>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
          </div>
        </div>
    </>
  )
}

export default Team