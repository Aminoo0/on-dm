'use client'

import { plans } from '@/data/plans'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PlanImage(props) {

    const [openImg, setOpenImg] = useState(false)
    const plan = plans?.filter((plann) => plann.link.replace(/خطة-/g, '') == props.id)


    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                setOpenImg(false)
            }
        })
    }, [])

    return (
        <div className="w-full lg:w-1/2 order-1 lg:order-3">
            <div className="bg-[#dbd2b7] w-full p-7 rounded-lg rounded-r-none mx-auto overflow-hidden">
                <Image onClick={() => setOpenImg(true)} width={350} height={350} src={plan[0]?.img} alt={plan[0]?.name} className="mx-auto rounded-lg cursor-pointer hover:scale-125 duration-300 w-full h-full" />
            </div>
            <div onClick={() => setOpenImg(false)} className={`${openImg ? 'fixed' : 'hidden'} fixed flex top-0 left-0 bottom-0 right-0 justify-center items-center bg-slate-800 cursor-pointer z-[60]`}>
                <Image width={600} height={600} src={plan[0]?.img} alt={plan[0]?.name} className="mx-auto rounded-lg mt-5" />
            </div>
        </div>
    )
}
