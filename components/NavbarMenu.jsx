import React, { useState } from 'react';

// import { HomeOutlined } from '@ant-design/icons/lib/icons'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const NavbarMenu = () => {
    const [toggle, setToggle] = useState(false);
    return (

        <div className="app__navbar-menu">
            {/* <HiMenuAlt4 /> */}
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    {/* <HiX /> */}
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {[' home', 'about', 'work', 'skills', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} onClick={() => setToggle(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>

    )
}

export default NavbarMenu
