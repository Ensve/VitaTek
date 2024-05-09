'use client';
import React, {useEffect} from 'react';
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants";
import Hamburger from "@/app/components/common/buttons/Hamburger";
import {motion} from "framer-motion";
import {FaGithub, FaLinkedin} from "react-icons/fa";


const Navbar = () => {
    const [nav, setNav] = React.useState(false);

    const toggleNav = () => {
      setNav(!nav);
    };
    const closeNav = () => {
        setNav(false);
    }

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
        },
        duration: .2,
    };

    return (
        <>
        <nav className="bg-[#ecf0f3] relative mx-auto w-full px-6 py-5 flexBetween max-w-[1440px] z-[100] lg:px-20 3xl:px-0">
            <div className="flex h-full w-full items-center justify-between px2 2xl:px-16 tracking-wide">
                <Link href='#home'>
                    <h2 className='text-gray-700'>Pure<span className='text-green-600'>Vita</span></h2>
                </Link>

                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key}
                              className='cursor-pointer tracking-wide text-gray-700 text-[16px] font-[400] border-b-2 border-transparent hover:border-b-2 hover:border-green-600 easeTransition'>
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div onClick={toggleNav} className="relative cursor-pointer lg:hidden">
                    <Hamburger nav={nav} />
                </div>
            </div>
        </nav>
            {nav && (
                <div
                    className="absolute top-0 left-0 z-50 flex h-full w-screen flex-col items-center justify-center bg-gray-300 p-10 text-white lg:hidden">
                    <motion.div variants={listVariants} initial={"closed"} animate={"opened"}
                                className="z-40 flex flex-col items-center justify-center gap-4 py-4 pt-10 text-center text-white">
                        <ul className="h-full flex-col gap-12">
                            {NAV_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} onClick={closeNav}
                                      className='cursor-pointer py-2 text-gray-700 text-[16px] font-[400] flexCenter border-b-2 border-transparent hover:border-b-2 hover:border-green-600 easeTransition'>
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                            <div className="flex justify-center mt-8 space-x-6">
                                <a href="#" className="text-gray-700 hover:text-green-600 easeTransition">
                                    <span className="sr-only">LinkedIn</span>
                                    <FaLinkedin className="w-6 h-6"/>
                                </a>
                                <a href="#" className="text-gray-700 hover:text-green-600 easeTransition">
                                    <span className="sr-only">GitHub</span>
                                    <FaGithub className="w-6 h-6"/>
                                </a>
                            </div>
                            <p className="mt-8 text-base leading-6 text-center text-gray-600 easeTransition">
                                © 2024 Endre Svendsen.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </>

    );
};

export default Navbar;
