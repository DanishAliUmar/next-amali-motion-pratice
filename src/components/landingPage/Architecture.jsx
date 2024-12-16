"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useInView, useMotionValueEvent } from "framer-motion";
import ArchitectureTrakingBox from "./ArchitectureTrakingBox"
// Architecture Section
const Architecture = () => {
    const [sectionInview, setSectionInview] = useState(false)
    const ref = useRef()
    const { scrollY, scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })
    const H2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 0, 1, 0])
    const backdropColor = useTransform(
        scrollYProgress,
        [0, 0.6, 1],
        ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.1)"]
    );
    const backdropOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8], [0, 1, 1, 0])
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.2, 1, 1])
    const objectPosition = useTransform(
        scrollYProgress,
        [0, 1],
        ["0 0", "0 -120px"]
    );

    const isInView = useInView(ref)

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest, 'latest');

        setSectionInview(isInView && scrollYProgress.get() === 1)
    })

    useEffect(() => {
        setSectionInview(isInView && scrollYProgress.get() === 1)
    }, [isInView])

    const fixedStyle = {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: 99,
        PointerEvent: "none",
        paddingRight: `17px`,
    };

    return (
        <motion.section ref={ref} className="architectureSection h-[180vh] relative overflow-hidden">
            <ArchitectureTrakingBox sectionInview={sectionInview} fixedStyle={fixedStyle} opacity={opacity} objectPosition={objectPosition} />
            <motion.div style={{
                opacity: backdropOpacity,
                backgroundColor: backdropColor,
            }} className="fixed top-0 left-0 pointer-events-none w-screen h-screen z-10 backdrop-blur-[15px]">
                <motion.h2 style={{ opacity: H2Opacity }} className={`absolute left-1/2 -translate-x-1/2 text-center ease-in-out text-white font-light leading-[1.3] tracking-widest text-5xl top-[30vh]`}>
                    A COLLECTION OF
                    <br />DISTINGUISHED RESIDENCES IN
                    <br />TWO ARCHITECTURAL STYLES
                </motion.h2>
            </motion.div>
        </motion.section>
    )
}


export default Architecture