"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
const HeroSection = ({ isLoading, isHeadingLoading }) => {
    const ref = useRef()
    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const H1Opacity = useTransform(scrollYProgress, [0, 0.25, 1], [(isHeadingLoading ? 0 : 1), 0, 0])
    return (
        <motion.section ref={ref} className='HeroSection h-screen relative'>
            <img src="src/assets/Artboard-1-1.jpg" alt="Hero Image" className={`w-full h-[500%] object-cover scale-[2] duration-1000 transition-all ${isLoading ? "object-[0_0%] brightness-90" : "object-[0_128%] brightness-100"}`} />
            <motion.h1 style={{ opacity: H1Opacity }} className={`absolute left-1/2 -translate-x-1/2 text-center drop-shadow-2xl ease-in-out transition-all uppercase text-white font-light leading-[1.3] tracking-widest text-5xl whitespace-nowrap top-[30vh]`}>
                Discover an exclusive <br />island sanctuary on Dubai's<br />iconic archipelago
            </motion.h1>
        </motion.section>
    )
}


export default HeroSection