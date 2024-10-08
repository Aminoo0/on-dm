'use client'

import FilterOne from "@/components/filterOne/filterOne";
import { plans, plansTwo } from "@/data/plans"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


export default function PlanDetails({ params }) {

    const [openImg, setOpenImg] = useState(false)
    const keyword = params?.planName[0].replace(/%D8%AE%D8%B7%D8%A9-/g, '')

    const plan = plans?.filter((plann) => plann.link.replace(/خطة-/g, '') == keyword)
    console.log(params.planName[0]);

    const planTwo = plansTwo?.filter((plannTwo) => plannTwo?.id == params?.planName[0])
    console.log(planTwo);

    // let allData = await fetch('https://jsonplaceholder.typicode.com/posts')
    // let data = await allData.json()
    // console.log(data);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                setOpenImg(false)
            }
        })
    }, [])

    return (<>
        <section className="w-11/12 xl:w-8/12 mx-auto" >
            <div className="flex flex-wrap gap-y-10 border-b-2 border-slate-500 border-opacity-15 w-full mx-auto py-10">
                <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-between flex-col bg-slate-100 rounded-md rounded-l-none p-5 order-2">
                    <div>
                        <h1 className="text-6xl font-bold mb-10">{plan[0]?.name}</h1>
                        <div className="flex gap-5 text-xl">
                            <h2 className="text-2xl items-center font-bold">{plan[0]?.price}  ر.س</h2>
                            <h2 className="line-through blur-[1px]">{plan[0]?.oldPrice}  ر.س</h2>
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
                        <Image onClick={() => setOpenImg(true)} width={350} height={350} src={plan[0]?.img} alt={plan[0]?.name} className="mx-auto rounded-lg cursor-pointer hover:scale-125 duration-300 w-full h-full" />
                    </div>
                    <div onClick={() => setOpenImg(false)} className={`${openImg ? 'flex' : 'hidden'} fixed top-0 left-0 bottom-0 right-0 justify-center items-center bg-slate-800 cursor-pointer z-[60]`}>
                        <Image width={600} height={600} src={plan[0]?.img} alt={plan[0]?.name} className="mx-auto rounded-lg mt-5" />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <p>{plan[0]?.disc}</p>
                <ul className="my-5">
                    <li className="text-3xl my-5">المزايا الرئيسية:</li>
                    {plan[0]?.details.map((detail, index) =>
                        <li key={index} className="font-semibold my-3">{detail}</li>
                    )}
                </ul>
                <ul className="my-5">
                    <li className="text-3xl my-5">خدمات إضافية:</li>
                    {plan[0]?.moreDetails.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc">{moreDetail}</li>
                    )}
                </ul>
            </div>

            <div className="mt-10 flex flex-col items-center shadow-2xl hover:shadow-xl duration-300 shadow-slate-500 p-7 mx-auto w-full">
                <h2 className="text-4xl font-semibold text-nowrap">منتجات ذات صلة</h2>
                <div className="flex flex-wrap justify-center w-full mx-auto mt-10">
                    <FilterOne params={keyword} />
                </div>
            </div>
        </section >
    </>)
}
