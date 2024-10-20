'use client'

import FilterTwo from "@/components/filterTwo/filterTwo";
import ProductImage from "@/components/productImage/productImage";
import { anotherProdcuts, anotherProdcutsThree, anotherProdcutsTwo } from "@/data/products";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";


export default function ProductDetails({ params }) {

    const product = anotherProdcuts?.filter((plan) => plan?.id == params?.productName)
    const productTwo = anotherProdcutsTwo?.filter((plan) => plan?.id == params?.productName)
    const productThree = anotherProdcutsThree?.filter((plan) => plan?.id == params?.productName)
    const keyword = params?.productName
    // console.log(params.productName);
    // console.log(keyword);


    return (<>
        <section className="w-11/12 xl:w-8/12 mx-auto" >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'Spring ', duration: .5 }}
                className="flex flex-wrap gap-y-10 border-b-2 border-slate-500 border-opacity-15 w-full mx-auto py-10">
                <div className="w-full lg:w-2/3 flex items-center lg:items-start justify-between flex-col bg-slate-100 rounded-md rounded-l-none p-5 order-2">
                    <div>
                        <h1 className="text-3xl font-bold mb-10">{product[0]?.name || productTwo[0]?.name || productThree[0]?.name}</h1>
                        <div className="flex gap-5 text-xl">
                            <h2 className="text-2xl items-center font-bold">{product[0]?.price || productTwo[0]?.price || productThree[0]?.price}  ر.س</h2>
                            <h2 className="line-through blur-[1px]">{product[0]?.oldPrice || productTwo[0]?.oldPrice || productThree[0]?.oldPrice}  ر.س</h2>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="text-center text-3xl font-bold my-5">اشترك الان</h2>
                        <div className="flex flex-wrap justify-center w-full gap-5 text-center">
                            {/* <Link href={''} className="w-full bg-[#ffd32b] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300"><Image src={payPal} /> Pay With</Link> */}
                            <Link href={''} className="w-full bg-[#7ad03a] py-5 px-10 rounded-lg flex items-center justify-center gap-3 text-xl hover:scale-105 duration-300 text-white"><FaWhatsapp /> واتساب</Link>
                        </div>
                    </div>
                </div>
                <ProductImage id={keyword} />
            </motion.div>
            <div className="my-5">
                <p className='my-10 font-semibold text-3xl italic'>{product[0]?.disc || productTwo[0]?.disc || productThree[0]?.disc}</p>
                <ul className="my-5 mt-20">
                    <h3 className="text-3xl my-5">نظرة عامة :</h3>
                    <li className='mr-10 font-semibold'>{product[0]?.overview || productTwo[0]?.overview || productThree[0]?.overview}</li>
                </ul>
                <ul className="my-5">
                    <li className="text-3xl my-5">ما نقدمه :</li>
                    {product[0]?.details.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                    {productTwo[0]?.details.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                    {productThree[0]?.details.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                </ul>
                <ul className="my-5">
                    <li className="text-3xl my-5">لماذا تختارنا :</li>
                    {product[0]?.moreDetails.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                    {productTwo[0]?.moreDetails.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                    {productThree[0]?.moreDetails.map((moreDetail, index) =>
                        <li key={index} className="font-semibold my-3 list-disc mr-10">{moreDetail}</li>
                    )}
                </ul>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'Spring ', duration: .5 }}
                className="mt-10 flex flex-col items-center shadow-2xl hover:shadow-xl duration-300 shadow-slate-500 p-7 mx-auto w-full">
                <h2 className="text-4xl font-semibold text-nowrap">منتجات ذات صلة</h2>
                <div className="flex flex-wrap justify-evenly w-full mx-auto mt-10">
                    <FilterTwo params={keyword} />
                </div>
            </motion.div>
        </section >
    </>)
}
