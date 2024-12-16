"use Client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 z-[999] p-3 px-10 fixed top-0 left-0 w-screen">
      <p
        className={`bg-black/20 px-5 py-3 rounded-full w-fit ease-in transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'
          }`}
      >
        Left Menu
      </p>

      <motion.p
        className={`text-white font-bold text-center ${isLoading ? 'animate-pulse' : ''}`}
        initial={{
          marginTop: '50vh',
          translateY: '-50%',
          fontSize: '5rem',
        }}
        animate={{
          marginTop: 0,
          translateY: 0,
          fontSize: '3rem',
        }}
        transition={{
          ease: 'easeIn',
          duration: 1,
          delay: 3,
        }}
      >
        AMALI
      </motion.p>
      <div
        className={`flex items-center justify-end ease-in transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <p className="bg-black/20 px-5 py-3 rounded-full w-fit">Right</p>
      </div>
    </div>
  );
};

export default Header;
