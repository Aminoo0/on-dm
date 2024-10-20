'use client'

import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniServerStack } from "react-icons/hi2";
import { BsLifePreserver } from "react-icons/bs";
import { FcBusinessContact, FcAbout } from "react-icons/fc";
import { motion } from "framer-motion";



export default function BlogDetails() {

    const [isOpenServices, setIsOpenServices] = useState(false)
    const [isOpenPlans, setIsOpenPlans] = useState(false)
    let path = useParams()
    let blog = blogs.filter((oneBlog) => oneBlog.id == path.blogAndIdTitle[0])
    // console.log(path);
    // console.log(blog[0].id);

    useEffect(() => {
        blog[0].title
    }, [blog[0].id])

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

    return (
        <section className='pt-10 w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold my-10'>{blog[0].title}</h1>
            <div className='flex flex-wrap'>
                <div className="w-full lg:w-2/4">
                    <Image src={blog[0]?.img} className='w-full rounded-md' alt="blog photo" />
                    <div className='flex gap-3 mt-3 text-sm font-semibold'>
                        <span>{blog[0]?.auther}</span>
                        <span>{blog[0]?.date}</span>
                    </div>
                    <h3 className='my-5 text-lg'>{blog[0]?.disc}</h3>
                    <ul className='my-10'>
                        {blog[0]?.discDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <h4 className='text-xl font-semibold mb-3'>{blog[0]?.headZero}</h4>
                    <p>{blog[0]?.headZeroDetails}</p>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.headOne}</h3>
                        <p className='my-5 text-lg'>{blog[0]?.headOneTitle}</p>
                        {blog[0]?.headOneDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.headTwo}</h3>
                        {blog[0]?.headTwoDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.headThree}</h3>
                        {blog[0]?.headThreeDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.headFour}</h3>
                        {blog[0]?.headFourDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.headFive}</h3>
                        {blog[0]?.headFiveDetails?.map((detail) =>
                            <li key={detail} className='list-disc my-3 mr-6'>{detail}</li>
                        )}
                    </ul>
                    <ul className='my-10'>
                        <h3 className='text-xl font-semibold'>{blog[0]?.end}</h3>
                        {blog[0]?.endDetails?.map((detail) =>
                            <li key={detail} className='my-3'>{detail}</li>
                        )}
                    </ul>
                </div>
                <div className='lg:w-2/4 p-5 flex flex-col gap-y-10'>
                    <ul className='hidden lg:flex flex-col items-start justify-start w-1/2 border rounded-lg'>
                        <li className='w-full'>
                            <Link href={'/'} className="flex w-full h-16 justify-start items-center px-3 gap-3 text-fuchsia-900 rounded-md hover:mr-5 hover:scale-110 duration-300">
                                <IoHomeOutline size={25} />
                                <span className="font-bold">الرئيسية</span>
                            </Link>
                        </li>
                        <motion.li onHoverStart={() => setIsOpenServices(true)} onHoverEnd={() => setIsOpenServices(false)} className="relative w-full">
                            <Link href={''} className="flex w-full h-16 px-3 items-center justify-start gap-3 rounded-md p-1.5 text-indigo-600 hover:mr-5 hover:scale-110 duration-300">
                                <BsLifePreserver size={25} />
                                <span className="font-bold">الخدمات</span>
                            </Link>
                            <motion.ul
                                onClick={() => setIsOpenServices(false)}
                                // onHoverEnd={() => setIsOpenCategory(false)}
                                variants={show}
                                initial="exit"
                                animate={isOpenServices ? "enter" : "exit"}
                                className={`${isOpenServices ? '' : 'hidden'} absolute right-full top-0 cursor-pointer text-black bg-white z-40`}>
                                <Link href={`/تصميم-مواقع-إلكترونية-للشركات`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تصميم مواقع الكترونية للشركات</li></Link>
                                <Link href={`/تصميم-متاجر-إلكترونية`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تصميم متاجر الكترونية</li></Link>
                                <Link href={`/برمجة-خاصة`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>برمجة خاصة</li></Link>
                                <Link href={`/تسويق-إلكتروني`}><li className=' border-b-2 py-3 px-4 w-72 hover:bg-[#ffd32b] duration-300'>تسويق الكتروني</li></Link>
                            </motion.ul>
                        </motion.li>
                        <hr className="" />
                        <motion.li onHoverStart={() => setIsOpenPlans(true)} onHoverEnd={() => setIsOpenPlans(false)} className='relative w-full'>
                            <Link href={''} className="flex w-full h-16 px-3 items-center justify-start gap-3 rounded-md p-1.5 text-gray-700 hover:mr-5 hover:scale-110 duration-300">
                                <HiMiniServerStack size={25} />
                                <span className="font-bold">الخطط</span>
                            </Link>
                            <motion.ul
                                onClick={() => setIsOpenPlans(false)}
                                // onHoverEnd={() => setIsOpenCategory(false)}
                                variants={show}
                                initial="exit"
                                animate={isOpenPlans ? "enter" : "exit"}
                                className={`${isOpenPlans ? '' : 'hidden'} absolute right-full top-0 cursor-pointer text-black bg-white z-40`}>
                                <Link href={'/plan/خطة-on-track'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Track</li></Link>
                                <Link href={'/plan/خطة-on-air'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Air</li></Link>
                                <Link href={'/plan/خطة-on-phone'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON Phone</li></Link>
                                <Link href={'/plan/خطة-on-dm'}><li className=' border-b-2 py-3 px-4 w-40 hover:bg-[#ffd32b] duration-300'>خطة ON DM</li></Link>
                            </motion.ul>
                        </motion.li>
                        <li className='w-full'>
                            <Link href={''} className="flex w-full h-16 px-3 items-center justify-start gap-3 rounded-md p-1.5 text-gray-700 hover:mr-5 hover:scale-110 duration-300">
                                <FcAbout size={25} />
                                <span className="font-bold">من نحن</span>
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href={''} className="flex w-full h-16 px-3 items-center justify-start gap-3 rounded-md p-1.5 text-gray-700 hover:mr-5 hover:scale-110 duration-300">
                                <FcBusinessContact size={25} />
                                <span className="font-bold">تواصل</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="">
                        <h2 className='text-2xl font-semibold my-5 px-5'>مقالات ذات صلة</h2>
                        <div className="flex flex-wrap lg:flex-col">
                            {blogs?.slice(blog[0]?.id == 10 ? `${blog[0]?.id - 4}` : `${blog[0]?.id}`, blog[0]?.id !== 10 ? `${blog[0]?.id + 4}` : `${blog[0]?.id}`).map((item, index) => <Link href={`/on-dm-blog/${item.id}/${item.title}`} key={index}
                                className="flex flex-wrap flex-col mb-10 gap-y-2 w-full md:w-1/2 p-2 hover:scale-105 duration-300">
                                <Image src={item?.img} className="rounded-lg w-full" alt="blog photo" />
                                <h2 className="font-bold">{item?.title}</h2>
                            </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}