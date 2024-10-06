'use client'

import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

export default function PlanDetails({ params }) {

    // if (params.planDetails[1] !== planDetails.link) {
    //     return notFound()
    // }

    let product = products.filter((link) => link.id == params.planDetails[0])
    console.log(product);

    return (
        <section>
            <div className='w-11/12 lg:w-3/4 mx-auto mt-10 pt-10'>
                <Image src={product[0].img.src} width={500} height={500} alt="plan Details" className="rounded-md w-full h-auto" />
            </div>
            <div className='w-10/12 lg:w-8/12 mx-auto'>
                <h1 className='text-center text-3xl mt-36 font-bold'>{product[0].title}</h1>
                <h2 className='font-semibold text-lg my-5'>{product[0].h1}</h2>
                <ul className='text-sm flex flex-col gap-y-3'>
                    {product[0].h1Details.map((h1Detail, index) =>
                        <li key={index}>{h1Detail}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>{product[0].h2}</h2>
                <ul className='text-sm flex flex-col gap-y-3'>
                    {product[0].h2Details.map((h2Detail, index) =>
                        <li key={index}>{h2Detail}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>ما نقدمه:</h2>
                <ul className='text-sm flex flex-col gap-y-3 list-disc'>
                    {product[0].offers.map((offer, index) =>
                        <li key={index}>{offer}</li>
                    )}
                </ul>
                <h2 className='font-semibold text-lg my-5'>{product[0].h3}</h2>
                <ul className='text-sm flex flex-col gap-y-3 list-disc'>
                    {product[0].h3Details.map((Detail, index) =>
                        <li key={index}>{Detail}</li>
                    )}
                </ul>
            </div>
        </section>
    )
}
