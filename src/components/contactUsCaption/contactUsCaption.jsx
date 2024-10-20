'use client'

// import footerCaptionBg from '@/app/assits/footerCaptionBg.png'
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactUsCaption() {
    return (
        <section className='p-3 lg:p-10 bg-gradient-to-l from-[#ffd32b] to-[#f9e69e] w-11/12 rounded-lg mx-auto relative top-40'>
            <div className="flex flex-col justify-center items-center mt-7">
                <h2 className="text-4xl font-bold lg:w-3/4 text-center">تواصل معنا الآن واحصل على خصم 30% على جميع الخدمات</h2>
                <p className=" text-center my-5 lg:w-3/4 font-semibold">تواصل معنا للاستفادة من هذا العرض الحصري وتحقيق أهدافك الرقمية بتكلفة مخفضة. فرصة لا تُفوّت للحصول على حلول تصميم وتسويق مبتكرة بأسعار أكثر تنافسية. احجز الآن واستعد لنجاح قوي.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-5 text-white text-lg mt-8">
                <motion.div initial={{ opacity: 0, scale: .7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }} className='w-full lg:w-1/3'><Link href={'tel:+966566284570'} className=' flex justify-center items-center gap-3 bg-[#1f1d0d] px-2 py-6 rounded-lg hover:bg-[#7ad03a] hover:text-slate-700 hover:scale-105 duration-300'><FaPhone size={25} /> اتصال هاتفي</Link></motion.div>
                <motion.div initial={{ opacity: 0, scale: .7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }} className='w-full lg:w-1/3'><Link href={'https://wa.me/966566284570'} className=' flex justify-center items-center gap-3 bg-[#1f1d0d] px-2 py-6 rounded-lg hover:bg-[#7ad03a] hover:text-slate-700 hover:scale-105 duration-300'><FaWhatsapp size={25} /> كلمنا واتساب</Link></motion.div>
            </div>
        </section>
    )
}
