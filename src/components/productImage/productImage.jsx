'use client'

import { useEffect } from "react"
import Image from "next/image";
import { anotherProdcuts, anotherProdcutsThree, anotherProdcutsTwo } from "@/data/products";
import { useAppContext } from "@/context/changePlansProvider";


export default function ProductImage(props) {

    let { openImg, setOpenImg } = useAppContext()
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
        </div>
    )
}
