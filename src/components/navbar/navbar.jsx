'use client'

import { AnimatePresence, color, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from '../../app/assits/mainLogo.png'
import egyptLogo from '../../app/assits/egyptLogo.png'
import Image from 'next/image';

export default function Navbar() {


    const [isOpen, setIsOpen] = useState(false)
    const [isOpenServices, setIsOpenServices] = useState(false)
    const [isOpenPlans, setIsOpenPlans] = useState(false)
    const [navHidden, setNavHidden] = useState(false)
    let { scrollY } = useScroll()
    // console.log(scrollY);
    useMotionValueEvent(scrollY, 'change', (latest) => {
        const prev = scrollY.getPrevious()
        if (latest <= prev && latest > 150) {
            setNavHidden(true)
        } else {
            setNavHidden(false)
        }
    })

    let closeMeun = () => {
        setIsOpenPlans(false)
        setIsOpenServices(false)
    }

    const showMenu = {
        enter: {
            opacity: 1,
            top: 100,
            display: "block",
            transition: {
                duration: .3,
            },
        },
        exit: {
            top: 0,
            display: "none",
            opacity: 0,
            transition: {
                duration: .3,
            },
            transitionEnd: {
                display: "none",
            },
        },
    };

    const show = {
        enter: {
            opacity: 1,
            y: 30,
            display: "block",
        },
        exit: {
            y: -5,
            opacity: 0,
            display: "none",
            transition: {
                duration: 0.3,
            },
        },
    };

    return (<>
        <motion.nav variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
            animate={navHidden ? 'hidden' : 'visible'}
            transition={{ duration: .5, ease: 'easeInOut' }}
            className="bg-white fixed top-0 left-0 right-0 z-50 shadow-2xl">
            <div className="flex flex-wrap items-center justify-evenly gap-10 lg:gap-0 lg:justify-evenly mx-auto p-2">
                <Link href={'/'} className="flex items-center ">
                    <Image priority={true} src={logo} className="w-52" alt="On-Dm Logo" />
                </Link>
                <div className="flex gap-5 items-center md:order-1">
                    <Image priority={true} src={egyptLogo} alt='button' className='hidden lg:block p-3' />
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="lg:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span className="sr-only">Open main menu</span>
                        <GiHamburgerMenu color='black' size={50} />
                    </button>
                </div>
                <div className="items-center justify-between hidden lg:flex">
                    <ul className="flex p-4 font-bold">
                        <li onClick={closeMeun}>
                            <Link hrefLang='#home' href={'/#home'} className="block py-2 px-3 text-gray-900">الصفحه الرئيسية</Link>
                        </li>
                        <motion.li onHoverStart={() => setIsOpenServices(true)} onHoverEnd={() => setIsOpenServices(false)} className='relative'>
                            <Link href={'/#products'} className="py-2 px-3 text-gray-900 flex items-center gap-x-1">الخدمات <IoMdArrowDropdown /></Link>
                            <motion.ul
                                onClick={() => setIsOpenServices(false)}
                                // onHoverEnd={() => setIsOpenCategory(false)}
                                variants={show}
                                initial="exit"
                                animate={isOpenServices ? "enter" : "exit"}
                                className={`${isOpenServices ? '' : 'hidden'} absolute cursor-pointer text-black bg-white z-40`}>
                                <Link href={`/تصميم-مواقع-إلكترونية-للشركات`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تصميم مواقع الكترونية للشركات</li></Link>
                                <Link href={`/تصميم-متاجر-إلكترونية`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تصميم متاجر الكترونية</li></Link>
                                <Link href={`/برمجة-خاصة`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>برمجة خاصة</li></Link>
                                <Link href={`/تسويق-إلكتروني`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تسويق الكتروني</li></Link>
                            </motion.ul>
                        </motion.li>
                        <motion.li onHoverStart={() => setIsOpenPlans(true)} onHoverEnd={() => setIsOpenPlans(false)} className='relative'>
                            <Link onPointerEnter={() => setIsOpenPlans(!isOpenPlans)} href={'/#plans'} className="py-2 px-3 text-gray-900 flex items-center gap-x-1">الخطط <IoMdArrowDropdown /></Link>
                            <motion.ul
                                onClick={() => setIsOpenPlans(false)}
                                // onHoverEnd={() => setIsOpenCategory(false)}
                                variants={show}
                                initial="exit"
                                animate={isOpenPlans ? "enter" : "exit"}
                                className={`${isOpenPlans ? '' : 'hidden'} absolute cursor-pointer text-black bg-white z-40`}>
                                <Link href={'/product/خطة-on-track'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Track</li></Link>
                                <Link href={'/product/خطة-on-air'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Air</li></Link>
                                <Link href={'/product/خطة-on-phone'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Phone</li></Link>
                                <Link href={'/product/خطة-on-dm'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON DM</li></Link>
                            </motion.ul>
                        </motion.li>
                        <li onClick={closeMeun}>
                            <Link href={'/aboutus'} className="block py-2 px-3 text-gray-900">من نحن</Link>
                        </li>
                        <li onClick={closeMeun}>
                            <Link href={'/contactus'} className="block py-2 px-3 text-gray-900">تواصل معنا</Link>
                        </li>
                        <li onClick={closeMeun}>
                            <Link href={'/ourblog'} className="block py-2 px-3 text-gray-900">المدونة</Link>
                        </li>
                    </ul>
                </div>
                {/* moblie screen */}

            </div>
        </motion.nav >
        <AnimatePresence>
            {isOpen && <nav className="lg:hidden z-50 fixed top-0 right-0 bottom-0 left-0 bg-slate-600 bg-opacity-75 md:order-1">
                <motion.ul initial={{ x: 350 }} whileInView={{ x: 0 }} exit={{ x: 300, opacity: 0 }} transition={{ duration: .5 }} className="fixed top-0 right-0 bottom-0 left-0 w-full h-lvh bg-[#fff] text-black flex flex-col justify-start font-bold overflow-auto cursor-pointer">
                    <li className='flex overflow-hidden items-center justify-between border-b-2 p-4 text-start bg-[#fff]'>
                        <IoCloseOutline onClick={() => setIsOpen(!isOpen)} size={35} className='cursor-pointer hover:rotate-180 duration-300' />
                        <Image priority={true} src={logo} className="w-52" alt="On-Dm Logo" />
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <Link href={'/'} className="block py-2 px-3 hover:mr-5 duration-300">الصفحه الرئيسية</Link>
                    </li>
                    <li onClick={() => setIsOpenServices(!isOpenServices)} className='relative border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <div className="py-2 px-3 hover:mr-5 duration-300 flex items-center gap-x-1">الخدمات <IoMdArrowDropdown /></div>
                    </li>
                    <motion.ul
                        variants={showMenu}
                        initial="exit"
                        animate={isOpenServices ? "enter" : "exit"}
                        className={`${isOpenServices ? '' : 'hidden'} cursor-pointer origin-top`}>
                        <Link href={`/تصميم-مواقع-إلكترونية-للشركات`}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>تصميم مواقع الكترونية للشركات</li></Link>
                        <Link href={`/تصميم-متاجر-إلكترونية`}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>تصميم متاجر الكترونية</li></Link>
                        <Link href={`/برمجة-خاصة`}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>برمجة خاصة</li></Link>
                        <Link href={`/تسويق-إلكتروني`}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>تسويق الكتروني</li></Link>
                    </motion.ul>
                    <li onClick={() => setIsOpenPlans(!isOpenPlans)} className='border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <div className="py-2 px-3 hover:mr-5 duration-300 flex items-center gap-x-1">الخطط <IoMdArrowDropdown /></div>
                    </li>
                    <motion.ul
                        // onClick={() => setIsOpenPlans(false)}
                        variants={showMenu}
                        initial="exit"
                        animate={isOpenPlans ? "enter" : "exit"}
                        className={`${isOpenPlans ? '' : 'hidden'} cursor-pointer origin-top`}>
                        <Link href={'/product/خطة-on-track'}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>خطة ON Track</li></Link>
                        <Link href={'/product/خطة-on-air'}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>خطة ON Air</li></Link>
                        <Link href={'/product/خطة-on-phone'}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>خطة ON Phone</li></Link>
                        <Link href={'/product/خطة-on-dm'}><li onClick={() => setIsOpen(!isOpen)} className=' border-b-2 py-3 pr-4 hover:bg-[#ffd32b] duration-300'>خطة ON DM</li></Link>
                    </motion.ul>
                    <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <Link href={'/aboutus'} className="block py-2 px-3 hover:mr-5 duration-300">من نحن</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <Link href={'/contactus'} className="block py-2 px-3 hover:mr-5 duration-300">تواصل معنا</Link>
                    </li>
                    <li onClick={() => setIsOpen(!isOpen)} className='border-b-2 p-4 hover:bg-[#ffd32b] duration-300'>
                        <Link href={'/ourblog'} className="block py-2 px-3 hover:mr-5 duration-300">المدونة</Link>
                    </li>
                </motion.ul>
            </nav>
            }
        </AnimatePresence>
    </>)
}
