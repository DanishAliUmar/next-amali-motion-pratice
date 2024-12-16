"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
const ArchitectureTrakingBox = ({ sectionInview, fixedStyle, opacity, objectPosition }) => {
    const ref = useRef()
    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const opacityBox = useTransform(scrollYProgress, [0, 1], [1, 1])
    useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest, 'TrakingBox'))
    console.log(scrollYProgress.get(), 'console.log(scrollYProgress.get())')
    return (
        <>
            <motion.div ref={ref} style={{ opacity: opacityBox }} className='z-999 absolute bottom-0 w-screen h-screen bg-black'></motion.div>
            <motion.div style={sectionInview ? fixedStyle : {}} className="">
                <motion.img src="src/assets/Grande-Home-2-1.jpg" style={{ opacity: opacity, objectPosition: sectionInview ? "0 -650px" : objectPosition }} alt="architecture Image" className={`w-full h-full object-cover object-[0_-240px] scale-150 uppercase`} />
                <div className="flex items-center px-24 gap-48 text-[250px] text-white absolute bottom-0 left-0">
                    <p className="italic">Grande</p>
                    <p className="italic">Minima</p>
                </div>
            </motion.div>
        </>
    )
}

export default ArchitectureTrakingBox