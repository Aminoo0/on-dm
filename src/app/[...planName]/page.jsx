'use client'

import { plans } from "@/data/plans"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function ALlPlans({ params }) {
    // console.log(params);
    const [openImg, setOpenImg] = useState(false)
    const plan = plans[params.planName[1]]
    // console.log(plan);

    let fliterPlans = plans.filter((plann) => plann.id !== plan.id)
    // console.log(fliterPlans);

    // let allData = await fetch('https://jsonplaceholder.typicode.com/posts')
    // let data = await allData.json()
    // console.log(data);


    return (
        <section className="w-11/12 xl:w-8/12 mx-auto">
            <div className="flex flex-wrap gap-y-10 border-b-2 border-slate-500 border-opacity-15 w-full mx-auto py-10">
                <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-between flex-col bg-slate-100 rounded-md rounded-l-none p-5 order-2">
                    <div>
                        <h1 className="text-6xl font-bold mb-10">{plan.name}</h1>
                        <div className="flex gap-5 text-xl">
                            <h2 className="text-2xl items-center font-bold">{plan.price}  ر.س</h2>
                            <h2 className="line-through blur-[1px]">{plan.oldPrice}  ر.س</h2>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-center text-3xl font-bold my-5">اشترك الان</h2>
                        <div className="flex flex-wrap justify-center w-full gap-5 text-center">
                            <Link href={''} className="w-full bg-[#ffd32b] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300">Pay With PAYPALL</Link>
                            <Link href={''} className="w-full bg-[#7ad03a] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300 text-white"><FaWhatsapp /> واتساب</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-3">
                    <div className="bg-[#dbd2b7] w-full p-7 rounded-lg rounded-r-none mx-auto overflow-hidden">
                        <Image onClick={() => setOpenImg(true)} width={350} height={350} src={plan.img.src} alt={plan.name} className="mx-auto rounded-lg cursor-pointer hover:scale-125 duration-300 w-full h-full" />
                    </div>
                    <div onClick={() => setOpenImg(false)} className={`${openImg ? 'flex' : 'hidden'} fixed top-0 left-0 bottom-0 right-0 justify-center items-center bg-slate-800 cursor-pointer z-[60]`}>
                        <Image width={600} height={600} src={plan.img.src} alt={plan.name} className="mx-auto rounded-lg mt-5" />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <p>{plan.disc}</p>
                <ul className="my-5">
                    <li className="text-3xl my-5">المزايا الرئيسية:</li>
                    {plan.details.map((detail, index) =>
                        <li key={index} className="font-semibold my-3">{detail}</li>
                    )}
                </ul>
                <ul className="my-5">
                    <li className="text-3xl my-5">خدمات إضافية:</li>
                    {plan.moreDetails.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc">{moreDetail}</li>
                    )}
                </ul>
            </div>

            <div className="mt-10 flex flex-col items-center shadow-2xl hover:shadow-xl duration-300 shadow-slate-500 p-7 mx-auto w-full">
                <h2 className="text-5xl font-semibold">منتجات ذات صلة</h2>
                <div className="flex flex-wrap w-full mx-auto mt-10">
                    {fliterPlans.map((onePlan) =>
                        <div key={onePlan.id} className="w-1/2 md:w-1/3 p-5">
                            <Link href={`/product/${onePlan.id}/${onePlan.link}`} key={onePlan.id} className="hover:text-[#ffd32b] duration-300">
                                <Image src={onePlan.img.src} width={500} height={500} alt="plan" className="rounded-md hover:scale-105 duration-300" />
                                <h3 className="text-lg text-center mt-3">{onePlan.name}</h3>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
