"use client"
import React, { useEffect, useRef, useState } from 'react';
import { ReactLenis } from 'lenis/dist/lenis-react'
import { useScroll, motion, useTransform, useInView, useMotionValueEvent } from 'framer-motion';
import HeroSection from '@/components/landingPage/HeroSection';
import Architecture from '@/components/landingPage/Architecture';
import ArchitectureDistortion from '@/components/landingPage/ArchitectureDistortion';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const [isHeadingLoading, setIsHeadingLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsHeadingLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <ReactLenis root>
        <main className="overflow-hidden">
          <div className={`loading__overlay backdrop-blur w-full h-full fixed bg-white/10 left-0 top-0 z-10 duration-[3s] transition-all pointer-events-none ${isLoading ? "opacity-100" : "opacity-0"}`}></div>
          <HeroSection isLoading={isLoading} isHeadingLoading={isHeadingLoading} />
          <Architecture />
          <ArchitectureDistortion />
        </main>
      </ReactLenis>
    </>
  );
}
