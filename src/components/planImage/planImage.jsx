'use client'

import { useAppContext } from '@/context/changePlansProvider';
import { plans } from '@/data/plans'
import Image from 'next/image'
import { useEffect } from 'react'

export default function PlanImage(props) {

    const plan = plans?.filter((plann) => plann.link.replace(/خطة-/g, '') == props.id)
    let { openImg, setOpenImg } = useAppContext()

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
                <Image onClick={() => setOpenImg(!openImg)} width={350} height={350} src={plan[0]?.img} alt={plan[0]?.name} className="mx-auto rounded-lg cursor-pointer hover:scale-125 duration-300 w-full h-full" />
            </div>
        </div>
    )
}
