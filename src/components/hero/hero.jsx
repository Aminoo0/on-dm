'use client'

import Image from "next/image";
import heroMain from '../../app/assits/heroMain.png'
import favIcon from '../../app/assits/favicon.ico'
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="scroll-mt-20 flex flex-wrap gap-y-20 m-auto bg-[#1f1d0d] text-white p-8 lg:p-16 lg:px-36 pb-10">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
                <h3 className="text-xl">تفوّق في عالم الرقميات</h3>
                <motion.h1 initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.5 }} className="text-5xl leading-[50px]">حلولنا مصممة <br /> خصيصًا لك</motion.h1>
                <motion.h2 initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.2 }} className="text-5xl">أبدع معنا في عالم الويب</motion.h2>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.5 }} className="leading-[25px] -mb-5">تميّز في تصميم مواقع الويب والتسويق الإلكتروني. نحن في أون دي أم نقدم خدمات مبتكرة ومخصصة لتصميم مواقع تعكس هويتك التجارية وزيادة جاذبية جمهورك.</motion.p>
                <motion.p initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.5 }} className="leading-[25px]">نحسّن تصنيفك في محركات البحث وننشر حملات تسويقية لجذب المزيد من العملاء المحتملين. </motion.p>

                <motion.div initial={{ opacity: 0, scale: .6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}>
                    <Link href="https://wa.me/201508301467"
                        className="bg-[#ffd32b] text-black p-3 px-10 w-full lg:w-1/2 rounded-md hover:text-[#ffd32b] hover:bg-transparent duration-300 hover:outline hover:outline-[#ffd32b] font-bold">
                        تواصل معنا الآن
                    </Link>
                </motion.div>

            </div >
            <div className="w-full lg:w-1/2 overflow-hidden">
                <motion.div initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 1.75 }} className="bg-[#ffd32b] w-full rounded-md lg:w-3/4 mx-auto relative">
                    <Image src={heroMain} alt="hero" priority={true} width={300} height={300} className="mx-auto w-auto h-auto" />
                    <motion.div className="absolute top-5 left-5 lg:-left-10" initial={{ x: -100, rotate: -90, opacity: 0 }}
                        whileInView={{ x: 0, rotate: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75, delay: 1.5 }}>
                        <Image src={favIcon} alt="favicon" priority={true} width={70} height={70} className="h-auto w-20 lg:w-auto" />
                    </motion.div>
                    <Image src={favIcon} alt="favicon" priority={true} width={70} height={70} className="hidden lg:block absolute bottom-5 -right-16 w-auto h-auto" />
                </motion.div>
            </div>
        </section >
    )
}



