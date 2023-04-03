import React from 'react'

const About = () => {
  return (
    <>
        <div className='w-full h-screen flex jusify-center items-center px-4'>
            <div className='w-full max-w-7xl flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-y-0 mx-10'>
                {/* Left Side */}
                <div className='w-full md:max-w-[45%] text-center md:text-start'>
                    <p className='text-4xl md:text-7xl font-extrabold'>There is no big impact without Big Action<span className='text-TILGold'>.</span></p>
                </div>
                {/* Right Side */}
                <div className='w-full md:max-w-[50%] text-start text-xs font-medium leading-relaxed md:mt-10'>
                    <p>
                    <span className='text-6xl font-bold text-TILGold'>W</span>e create an ecosystem for creatives to gain access to resources arming them with the necessary tools to help carry-out their artistic passions. Live Music understands that the entertainment industry is a complex space to navigate. We aim to encompass the facets of studio production, marketing, music research, and case studies within local communities worldwide to drive initiatives that can support aspiring professionals and talent.
                    </p>
                    <p className='mt-[1rem]'>Our organization is led by innovative visionaries that wish to develop a bridge between creatives and independence. Live Music provides empowerment for the community to believe in all creative capabilities to live for music.</p>
                </div>
            </div>

        </div>
    </>
  )
}

export default About