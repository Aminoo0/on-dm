'use client'

import { useEffect, useState } from "react"
import Image from "next/image";
import { anotherProdcuts, anotherProdcutsThree, anotherProdcutsTwo } from "@/data/products";


export default function ProductImage(props) {

    const [openImg, setOpenImg] = useState(false)
    const product = anotherProdcuts?.filter((plan) => plan?.id == props.id)
    const productTwo = anotherProdcutsTwo?.filter((plan) => plan?.id == props.id)
    const productThree = anotherProdcutsThree?.filter((plan) => plan?.id == props.id)
    // console.log(props.id);


    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                setOpenImg(false)
            }
        })
    }, [])

    return (
        <div className="w-full lg:w-1/3 mx-auto order-1 lg:order-3">
            <div className="bg-[#dbd2b7] w-full p-7 rounded-lg rounded-r-none mx-auto overflow-hidden h-full">
                <Image onClick={() => setOpenImg(true)} width={350} height={350} src={product[0]?.img || productTwo[0]?.img || productThree[0]?.img} alt={product[0]?.name || productTwo[0]?.name || productThree[0]?.name} className="mx-auto rounded-lg cursor-pointer hover:scale-125 duration-300 w-full" />
            </div>
            <div onClick={() => setOpenImg(false)} className={`${openImg ? 'flex' : 'hidden'} fixed top-0 left-0 bottom-0 right-0 justify-center items-center bg-slate-800 cursor-pointer z-[60]`}>
                <Image width={600} height={600} src={product[0]?.img || productTwo[0]?.img || productThree[0]?.img} alt={product[0]?.name || productTwo[0]?.name || productThree[0]?.name} className="mx-auto rounded-lg mt-5" />
            </div>
        </div>
    )
}
