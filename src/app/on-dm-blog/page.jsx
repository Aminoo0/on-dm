'use client'

import { PaginationDemo } from "@/components/pagination/pagination";
import { FaArrowLeftLong } from "react-icons/fa6";
import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function page() {


  return (
    <section className='pt-10 flex flex-wrap w-10/12 mx-auto'>
      {blogs.map((blog) => <Link href={`/on-dm-blog/${blog?.id}/${blog?.title}`} key={blog?.id} className='w-full h-full md:w-1/2 lg:w-1/3 p-3'>
        <div className='shadow-2xl hover:shadow-lg hover:scale-105 duration-300 rounded-md p-5'>
          <Image src={blog?.img} alt="blog photo" className="w-full h-full rounded-lg" />
          <h2 className="font-bold my-3 text-2xl">{blog?.title?.split(' ').slice(0, 6).join(' ')} ...</h2>
          <span className='text-sm text-slate-600 my-3'>{blog?.date}</span>
          <p className="">{blog?.disc?.split(' ').slice(0, 10).join(' ')}</p>
          <p className='flex items-center gap-2 mt-5 font-bold'>اقراء المزيد <FaArrowLeftLong /></p>
        </div>
      </Link>)}
      {/* <PaginationDemo /> */}
    </section >
  )
}
