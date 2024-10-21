'use client'

import FilterOne from "@/components/filterOne/filterOne";
import PlanImage from "@/components/planImage/planImage";
import { plans } from "@/data/plans"
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
// import payPal from "@/app/assits/paypal.svg";

export default function PlanDetails({ params }) {

    const keyword = params?.planName[0].replace(/%D8%AE%D8%B7%D8%A9-/g, '')

    const plan = plans?.filter((plann) => plann.link.replace(/خطة-/g, '') == keyword)
    // console.log(params.planName[0]);

    return (<>
        <section className="w-11/12 xl:w-8/12 mx-auto" >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'Spring ', duration: .5 }}
                className="flex flex-wrap gap-y-10 border-b-2 border-slate-500 border-opacity-15 w-full mx-auto py-10">
                <div className="w-full lg:w-1/2 flex items-center lg:items-start justify-between flex-col bg-slate-100 rounded-md rounded-l-none p-5 order-2">
                    <div>
                        <h1 className="text-6xl font-bold mb-10">{plan[0]?.name}</h1>
                        <div className="flex gap-5 text-xl">
                            <h2 className="text-2xl items-center font-bold">{plan[0]?.price}  ر.س</h2>
                            <h2 className="line-through blur-[1px]">{plan[0]?.oldPrice}  ر.س</h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="text-center text-3xl font-bold my-5">اشترك الان</h2>
                        <div className="flex flex-wrap justify-center w-full gap-5 text-center">
                            {/* <Link href={''} className="w-full bg-[#ffd32b] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300"><Image src={payPal} width={80} height={80} /> Pay With</Link> */}
                            <Link href={'https://wa.me/201508301467'} className="w-full bg-[#7ad03a] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300 text-white"><FaWhatsapp /> واتساب</Link>
                        </div>
                    </div>
                </div>
                <PlanImage id={keyword} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="my-5">
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
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'Spring ', duration: .5 }}
                className="mt-10 flex flex-col items-center shadow-2xl hover:shadow-xl duration-300 shadow-slate-500 p-7 mx-auto w-full">
                <h2 className="text-4xl font-semibold text-nowrap">منتجات ذات صلة</h2>
                <div className="flex flex-wrap justify-center w-full mx-auto mt-10">
                    <FilterOne params={keyword} />
                </div>
            </motion.div>
        </section >
    </>)
}
