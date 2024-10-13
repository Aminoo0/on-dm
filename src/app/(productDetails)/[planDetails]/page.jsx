'use client'

import { products } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaRegCheckCircle } from "react-icons/fa";


export default function PlanDetails({ params }) {

    let product = products?.filter((link) => link.id == params.planDetails)
    // console.log(params);


    if (product[0]?.id !== params.planDetails) {
        return notFound()
    }

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, scale: .8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: 'Spring ', duration: .5 }}
                className='w-11/12 lg:w-3/4 mx-auto mt-10 pt-10'>
                <Image src={product[0]?.img.src} width={500} height={500} alt="plan Details" className="rounded-md w-full h-auto" />
            </motion.div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h1 className='text-center text-3xl mt-36 font-bold'>{product[0]?.title}</h1>
                <h2 className='font-semibold text-lg my-5'>{product[0]?.h1}</h2>
                <ul className='text-sm flex flex-col gap-y-3'>
                    {product[0]?.h1Details.map((h1Detail, index) =>
                        <li key={h1Detail}>{h1Detail}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>{product[0]?.h2}</h2>
                <ul className='text-sm flex flex-col gap-y-3'>
                    {product[0]?.h2Details.map((h2Detail, index) =>
                        <li key={h2Detail}>{h2Detail}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>ما نقدمه:</h2>
                <ul className='text-sm flex flex-col gap-y-3 list-disc'>
                    {product[0]?.offers.map((offer, index) =>
                        <li key={offer}>{offer}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>{product[0]?.h3}</h2>
                <ul className='text-sm flex flex-col gap-y-3 list-disc'>
                    {product[0]?.h3Details.map((Detail, index) =>
                        <li key={Detail}>{Detail}</li>
                    )}
                </ul>
            </div>
            {!product[0].hidden ? <div className='mt-32 bg-slate-100 p-5'>
                <h2 className='text-5xl font-semibold text-center my-10'>{product[0].secTitle}</h2>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: 'Spring ', duration: .5 }}
                    className='flex flex-wrap justify-center items-center gap-0 gap-y-7 w-full xl:w-10/12 mx-auto'>
                    <div className="w-full md:w-full lg:w-1/3 px-2">
                        <div className='shadow-xl bg-white hover:shadow-slate-500 flex flex-col justify-between rounded-lg py-5 hover:scale-105 duration-300'>
                            <div>
                                <h2 className='font-bold text-xl text-center my-5 text-slate-600'>{product[0].planOneTitle}</h2>
                                <div className='flex items-center justify-between p-5'>
                                    <h2 className='flex flex-wrap gap-2'><span className='font-bold text-5xl'>{product[0].price}</span> <span className='flex flex-col'><span className="w-full font-bold">ر.س</span> <span className="w-full">{product[0].months}</span></span></h2>
                                    <h2 className='line-through'>{product[0].oldPrice}ر.س</h2>
                                </div>
                                <ul className="p-3 flex justify-center flex-wrap flex-col gap-y-5">
                                    {product[0].details.map((li, index) =>
                                        <li key={index} className="flex gap-x-3 items-center border-b border-slate-700 border-opacity-10 pb-1 hover:mr-5 duration-300"><FaRegCheckCircle color="#ffd32b" />{li}</li>
                                    )}
                                </ul>
                            </div>
                            <Link href={`/product/${product[0].anotherLink}`} className={`${product[0].anotherLink ? 'bg-black hover:bg-transparent hover:text-black outline outline-1' : 'bg-[#ffd32b] hover:bg-black hover:text-[#ffd32b] hover:outline-[#ffd32b] outline outline-1 outline-black'} py-3 w-1/2 text-center text-white self-center px-5 rounded-lg duration-300`}>اكتشف المزيد</Link>
                        </div>
                    </div>
                    <div className="w-full md:w-full lg:w-1/3 px-2">
                        <div className='shadow-xl overflow-hidden bg-[#1f1d0d] text-white hover:shadow-slate-500 flex flex-col justify-between rounded-lg py-5 hover:scale-105 duration-300'>
                            <div className='relative'>
                                <h2 className='font-bold text-xl text-center my-5 text-slate-100'>{product[0].planTwoTitle}</h2>
                                <h3 className='absolute top-2 -left-5 -rotate-45 bg-black w-32 text-center text-lg'>ألافضل مبيعا</h3>
                                <div className='flex items-center justify-between p-5'>
                                    <h2 className='flex flex-wrap gap-2'><span className='font-bold text-5xl'>{product[0].price2}</span> <span className='flex flex-col'><span className="w-full font-bold">ر.س</span> <span className="w-full">{product[0].months}</span></span></h2>
                                    <h2 className='line-through'>{product[0].oldPrice2}ر.س</h2>
                                </div>
                                <ul className="p-3 flex justify-center flex-wrap flex-col gap-y-5">
                                    {product[0].details2.map((li, index) =>
                                        <li key={index} className="flex gap-x-3 items-center border-b border-white border-opacity-50 pb-1 hover:mr-5 duration-300"><FaRegCheckCircle color="#ffd32b" />{li}</li>
                                    )}
                                </ul>
                            </div>
                            <Link href={`/product/${product[0].anotherLink2}`} className={`${product[0].isBlack ? 'bg-black hover:bg-transparent hover:text-black outline outline-1' : 'bg-[#ffd32b] hover:bg-black hover:text-[#ffd32b] hover:outline-[#ffd32b] outline outline-1 outline-black'} py-3 w-1/2 text-center text-white self-center px-5 rounded-lg duration-300`}>اكتشف المزيد</Link>
                        </div>
                    </div>
                    <div className="w-full md:w-full lg:w-1/3 px-2">
                        <div className='shadow-xl bg-white hover:shadow-slate-500 flex flex-col justify-between rounded-lg py-5 hover:scale-105 duration-300'>
                            <div>
                                <h2 className='font-bold text-xl text-center my-5 text-slate-600'>{product[0].planThreeTitle}</h2>
                                <div className='flex items-center justify-between p-5'>
                                    <h2 className='flex flex-wrap gap-2'><span className='font-bold text-5xl'>{product[0].price3}</span> <span className='flex flex-col'><span className="w-full font-bold">ر.س</span> <span className="w-full">{product[0].months}</span></span></h2>
                                    <h2 className='line-through'>{product[0].oldPrice3}ر.س</h2>
                                </div>
                                <ul className="p-3 flex justify-center flex-wrap flex-col gap-y-5">
                                    {product[0].details3.map((li, index) =>
                                        <li key={index} className="flex gap-x-3 items-center border-b border-slate-700 border-opacity-10 pb-1 hover:mr-5 duration-300"><FaRegCheckCircle color="#ffd32b" />{li}</li>
                                    )}
                                </ul>
                            </div>
                            <Link href={`/product/${product[0].anotherLink3}`} className={`${product[0].anotherLink3 ? 'bg-black hover:bg-transparent hover:text-black outline outline-1' : 'bg-[#ffd32b] hover:bg-black hover:text-[#ffd32b] hover:outline-[#ffd32b] outline outline-1 outline-black'} py-3 w-1/2 text-center text-white self-center px-5 rounded-lg duration-300`}>اكتشف المزيد</Link>
                        </div>
                    </div>
                </motion.div>
            </div> : null
            }
        </section >
    )
}
