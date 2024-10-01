'use client'

import Image from 'next/image'
import ServicesOne from '../../app/assits/services-1.jpg'
import ServicesTwo from '../../app/assits/services-2.jpg'
import ServicesThree from '../../app/assits/services-3.jpg'
import ServicesFour from '../../app/assits/services-4.jpg'
import { FaGears } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function OurProducts() {

    const allProducts = [
        { id: 1, img: ServicesOne, title: 'تصميم مواقع', price: 700, disc: 'نحول رؤيتك التجارية إلى مواقع إلكترونية متميزة تعبر عن هويتك وقيمك', link: '' },
        { id: 2, img: ServicesTwo, title: 'متاجر إلكترونية', price: 2100, disc: 'حلاً شاملًا يحقق هدفك بالمبيعات الإلكترونية و يعزز نمو عملك', link: '' },
        { id: 3, img: ServicesThree, title: 'برمجة خاصة', price: 5000, disc: 'جسد أفكارك إلى موقع إلكتروني وتطبيقات أندرويد و IOS', link: '' },
        { id: 4, img: ServicesFour, title: 'تسويق إلكتروني', price: 4200, disc: 'استرتيجيات تسويقية تضمن لك تحقيق أهدافك البيعية والتسويقية', link: '' },
    ]

    return (
        <section id='products' className='pb-10 px-10 scroll-mt-28'>
            <h2 className='text-center text-5xl font-bold'>منتجاتنا المميزة</h2>
            <div className='flex flex-wrap my-10'>
                {allProducts.map((product) =>
                    <div key={product.id} className='w-full lg:w-1/2 xl:w-1/4 p-2'>
                        <div className=' shadow-2xl rounded-lg overflow-hidden'>
                            <Image alt={product.disc} src={product.img} className='rounded-lg rounded-b-none hover:scale-105 duration-300' />
                            <div className='p-5'>
                                <div className='flex items-center justify-between my-3'>
                                    <h2 className='px-5 py-2 bg-slate-100 rounded-lg font-semibold text-sm'>{product.title}</h2>
                                    <h2 className='flex items-center gap-2'>تبدأ من <span className='font-bold text-3xl'>{product.price}</span> ر.س</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex items-center gap-1 text-sm font-semibold'>حلاً مخصصًا <FaGears color='#ffd32b' size={25} /></div>
                                    <div className='flex items-center gap-1 text-sm font-semibold'>أمان وحماية <FaShieldAlt color='#ffd32b' size={25} /></div>
                                    <div className='flex items-center gap-1 text-sm font-semibold'>أداء متفوق <FaRocket color='#ffd32b' size={25} /></div>
                                </div>
                                <p className='font-bold text-xl my-5 px-4'>{product.disc}</p>
                                <motion.div whileHover={{ x: -10, color: 'red' }}><Link href={''} className='flex items-center justify-center gap-3 text-lg font-bold'>اعرف أكثر <FaLongArrowAltLeft /></Link></motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </section>
    )
}
