https://react-icons.github.io/react-icons/

import React, { useState } from 'react';
import './Navbar.scss'

import { images } from '../../constants'
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='navbar'>
            
            //1.BRAND
            <div className='navbar__brand'>
                <img src={images.brand} alt="brand" />
                <div>
                   <h1>h_text</h1>
                   <p>p_text</p>
                </div>
            </div>

            //2.LINKS
            <ul className='navbar__links'>
                {
                    ['home', 'about', 'contact'].map((item) => (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>
                                {item}
                            </a>
                        </li>
                    ))
                }
            </ul>

            //3.TOGGLE MENU
            <div className="navbar__menu">
                <HiMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {
                                ['home', 'about', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                                            {item}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
