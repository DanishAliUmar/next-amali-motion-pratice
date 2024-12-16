"use client";

import React, { useRef } from "react";
import { useScroll, motion, useTransform, useMotionValueEvent } from "framer-motion";
const ArchitectureDistortion = () => {
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
        ["0 0", "0 -240px"]
    );

    useMotionValueEvent(scrollYProgress, "change", (latest) => console.log(latest, 'section 2'))
    return (
        <motion.section ref={ref} className="architectureDistortionSection bg-red-50 0 h-[180vh] relative overflow-hidden">

        </motion.section>
    )
}


export default ArchitectureDistortion