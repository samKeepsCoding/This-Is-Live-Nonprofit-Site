import React, {useState} from 'react'
import { AnimatePresence } from 'framer-motion'
import '../styles.css'

// Component imports
import NavbarSideMenu from './NavbarSideMenu'

// Icon imports
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [sideMenu, setSideMenu] = useState(false);

  return (
    <>
        <>
            <div className='w-full p-4 px-8'>
                <nav className='flex justify-between items-center max-w-8xl mt-4'>
                    <h1 className='font-bold text-3xl'>
                        <span className='text-TILGold'>THIS</span> 
                        IS 
                        <span className='text-TILGold'>LIVE</span>
                        <span>.</span>  
                    </h1>
                    <ul className='hidden md:flex flex-row space-x-7'>
                        <li className='nav-links'>
                            HOME
                        </li>
                        <li className='nav-links'>
                            ABOUT
                        </li>
                        <li className='nav-links'>
                            CONTACT 
                        </li>
                    </ul>
                    <button className='border-[0.3px] border-TILGold text-TILGold rounded-md px-4 py-1 text-xl font-light hover:bg-TILGold hover:text-TILBlack duration-100 ease-linear hidden md:flex'>
                        <a href='/'>
                            DONATE
                        </a>
                    </button>

                    {/* SideMenu logic below*/}
                    <button
                        className='flex md:hidden cursor-pointer'
                        onClick={() => setSideMenu(!sideMenu)}
                    >
                        <AiOutlineMenu size={35}/>
                    </button>
                    <AnimatePresence>
                        {sideMenu ? (
                            <NavbarSideMenu handleSideMenu={value => setSideMenu(value)}/> 
                        ): null}
                    </AnimatePresence>

                </nav>

            </div>
        </>
    </>
  )
}

export default Navbar