import React, {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import '../styles.css'

// Component imports
import NavbarSideMenu from './NavbarSideMenu'

// Icon imports
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [sideMenu, setSideMenu] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [navVisible, setNavVisible] = useState(true);


    const variants = {
        open: { opacity: 1, y: 0},
        closed: { opacity: 0, y: "-100%"},
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setNavVisible(true)
            } else {
                setNavVisible(false)
            }
            setPrevScrollPos(currentScrollPos)
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    },[prevScrollPos])
  return (
    <>
        <>
            <motion.div 
                className='w-full fixed top-0 p-4 px-8 bg-TILBlack z-40'
                initial='open'
                animate={navVisible ? 'open' : 'closed'}
                variants={variants}
                transition={{duration: 0.2}} 
            >
                <nav className='flex justify-between items-center max-w-8xl mt-4'>
                    <h1 className='font-bold text-3xl'>
                        <span className='text-TILGold'>THIS</span> 
                        IS 
                        <span className='text-TILGold'>LIVE</span>
                        <span>.</span>  
                    </h1>
                    <ul className='hidden md:flex flex-row space-x-7'>
                        <Link to='hero' smooth={true} className='nav-links'>
                            HOME
                        </Link>
                        <Link to='about' smooth={true} className='nav-links'>
                            ABOUT
                        </Link>
                        <Link to='team' smooth={true} className='nav-links'>
                            OUR TEAM
                        </Link>
                        <Link to='contact' smooth={true} className='nav-links'>
                            CONTACT 
                        </Link>
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

            </motion.div>
        </>
    </>
  )
}

export default Navbar