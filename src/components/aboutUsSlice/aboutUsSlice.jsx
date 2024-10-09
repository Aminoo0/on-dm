'use client'

import { FaArrowDown, FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react";


export default function AboutUsSlice() {

    const [showUl, setShowUl] = useState(false)

    return (
        <li onClick={() => setShowUl(!showUl)} className='relative border-b-2 pb-10'>
            <p className='font-bold cursor-pointer flex items-center justify-between'>5. تطوير الويب  {showUl ? <FaArrowUpLong /> : <FaArrowDown />}</p>
            <ul className={`${showUl ? 'relative' : 'hidden'} top-6 right-0 list-decimal mr-10 font-semibold`}>
                <li>تطوير تطبيقات الهواتف المحمولة</li>
                <li>تطوير المواقع الإلكترونية</li>
                <li>التصميم الجرافيكي</li>
                <li>التسويق الإلكتروني</li>
                <li>إدارة وسائل التواصل الاجتماعي</li>
            </ul>
        </li>
    )
}
