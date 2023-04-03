import React from 'react'
import DemoImage1 from '../Assets/TestImages/ImageSectionImage1.jpg'
import DemoImage2 from '../Assets/TestImages/ImageSectionImage2.jpg'

const ImageSection = () => {
  return (
    <>
        <div className='w-full flex justify-center items-center mt-10'>
            <div className='relative w-full max-w-7xl flex flex-row justify-center items-start p-10'>
                <img src={DemoImage1} className='relative top-1/2 w-[200px] md:w-[400px] -rotate-12 rounded-md'/>
                <div className='flex flex-col justify-center items-center text-start space-y-10 '>
                    <h2 className='text-sm md:text-3xl max-w-xs font-bold ml-6 md:ml-8'>People who have a passion to guide the next generation of creatives</h2>
                    <img src={DemoImage2}  className='w-[250px] md:w-[440px] h-[150px] md:h-[300px] rotate-12 rounded-md mt-[6rem]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ImageSection