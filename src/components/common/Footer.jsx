import React from 'react'

const Footer = () => {
    return (
        <div className='h-[800px] bg-[#1A2026] text-white p-32 space-y-10 font-alegreya'>
            <div className="flex items-center text-6xl">
                NAMY
            </div>
            <div className="flex items-start gap-10 justify-between">
                <div className="space-y-2 font-light text-xl">
                    <div className="flex items-center gap-3 text-white">
                        <p className="">Email :</p>
                        <p className="">info@namyinc.com</p>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <p className="">Address :</p>
                        <p className="">
                            12860 EUCLID ST
                            GARDEN GROVE, CA 92840</p>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <p className="">Phone Number :</p>
                        <p className="">(888) 528-8825</p>
                    </div>
                </div>
                <div className="w-[340px] space-y-2">
                    <p className="">Namy, Inc. | NMLS# 1647249 | CA DRE# 02036098</p>
                    <p className="text-sm font-sans text-white/70">All information is deemed reliable but not guaranteed and should be independently reviewed and verified.</p>
                </div>
            </div>
            <div className="flex items-stretch justify-between gap-20 font-alegreya uppercase pb-0">
                <div className="space-y-10 flex-1 border-b border-white/30">
                    <p className="text-6xl">Register <br /> interest</p>
                    <a href="#" className="group w-fit inline-flex justify-between items-center gap-10 bg-[#5C7A92] rounded-full p-5 py-2 overflow-hidden">
                        <span className="relative text-white z-10 transition-colors duration-200 group-hover:text-black">Contact</span>
                        <div className="flex justify-center items-center relative size-9 rounded-full before:absolute before:size-full before:bg-white before:rounded-full before:transition-transform before:duration-500 group-hover:before:scale-[20] children:z-10">
                            <svg className='size-4 relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </a>
                </div>
                <div className="space-y-10 min-w-[340px]">
                    <p className="text-6xl">Where <br /> next?</p>
                    <div className="flex items-center gap-10 justify-between w-full border-b-2 border-white pb-6 hover:px-5 transition-all cursor-pointer">
                        <p className="text-2xl">About Namy</p>
                        <div className="flex items-center justify-center size-10 bg-[#32373C] rounded-full">
                            <svg className='size-5 fill-white relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                    <div className="flex items-center gap-10 justify-between w-full border-b-2 border-white pb-6 hover:px-5 transition-all cursor-pointer">
                        <p className="text-2xl">Mortgage</p>
                        <div className="flex items-center justify-center size-10 bg-[#32373C] rounded-full">
                            <svg className='size-5 fill-white relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-10">
                <p className="">Real Estate Website Design by Luxury Presence</p>
                <p className="font-sans">Copyright © 2024 | Privacy Policy</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full group hover:bg-white border-white border transition-all cursor-pointer">
                        <svg className='size-5 fill-white group-hover:fill-black transition-all' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    </div>
                    <div className="flex items-center justify-center size-10 rounded-full  group hover:bg-white border-white border transition-all cursor-pointer">
                        <svg className='size-5 fill-white group-hover:fill-black transition-all' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                    </div>
                    <div className="flex items-center justify-center size-10 rounded-full  group hover:bg-white border-white border transition-all cursor-pointer">
                        <svg className='size-5 fill-white group-hover:fill-black transition-all' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                    </div>
                    <div className="flex items-center justify-center size-10 rounded-full  group hover:bg-white border-white border transition-all cursor-pointer">
                        <svg className='size-5 fill-white group-hover:fill-black transition-all' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M42.9 240.3l99.6 48.6c19.2 9.4 16.2 37.5-4.5 42.7L30.5 358.5a22.8 22.8 0 0 1 -28.2-19.6 197.2 197.2 0 0 1 9-85.3 22.8 22.8 0 0 1 31.6-13.2zm44 239.3a199.5 199.5 0 0 0 79.4 32.1A22.8 22.8 0 0 0 192.9 490l3.9-110.8c.7-21.3-25.5-31.9-39.8-16.1l-74.2 82.4a22.8 22.8 0 0 0 4.1 34.1zm145.3-109.9l58.8 94a22.9 22.9 0 0 0 34 5.5 198.4 198.4 0 0 0 52.7-67.6A23 23 0 0 0 364.2 370l-105.4-34.3c-20.3-6.5-37.8 15.8-26.5 33.9zm148.3-132.2a197.4 197.4 0 0 0 -50.4-69.3 22.9 22.9 0 0 0 -34 4.4l-62 91.9c-11.9 17.7 4.7 40.6 25.2 34.7L366 268.6a23 23 0 0 0 14.6-31.2zM62.1 30.2a22.9 22.9 0 0 0 -9.9 32l104.1 180.4c11.7 20.2 42.6 11.9 42.6-11.4V22.9a22.7 22.7 0 0 0 -24.5-22.8 320.4 320.4 0 0 0 -112.3 30.1z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer