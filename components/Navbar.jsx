import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav style={{boder:"1px solid rgba(255, 255, 255, 0.18)",
    background:"rgba(255, 255, 255, 0.25)",zIndex:"2",backdropFilter:"blur(4px)"}}
    className="w-full flex justify-between items-center p-1 fixed">
      <div className="flex justify-start items-center">
        {/* <img src={images.logo} className="w-[90px] h-[20px] " alt="logo" /> */}
        <div className='text-4xl font-bold'>myPortfolio</div>
      </div>
      <ul className="flex-1 justify-center items-center list-none flex"> 
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="m-1 flex-col cursor-pointer" key={`link-${item}`}>
            <div className='w-[5px] h-[5px] bg-transparent rounded-[50%] mb-[5px]'/>
            <a className='text-gray-500 flex-col font-bold hover:bg-black' 
            style={{textDecoration:"none",textTransform:"uppercase",transition:"all 0.3s ease-in-out"}}
            href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="w-[35px] h-[35px] rounded-[50%] text-white relative flex justify-center items-center bg-black ">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
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
    </nav>
  );
};

export default Navbar;