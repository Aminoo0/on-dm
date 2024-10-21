import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import footerLogo from "@/app/assits/footerLogo.png";
import Link from "next/link";
import ContactUsCaption from "../contactUsCaption/contactUsCaption";

export default function Footer() {
    return (<>
        <ContactUsCaption />
        <footer className="bg-[#1f1d0d] text-white pb-16 pt-72 px-3 lg:px-20">
            <div className="flex flex-wrap gap-y-20 items-start">
                <div className="w-full lg:w-1/3 flex flex-col gap-y-10">
                    <Image src={footerLogo} alt="footer logo" />
                    <p> فريقنا المبدع يقدم حلولًا رقمية مبتكرة واحترافية تلبي احتياجات عملك وتحقق النجاح عبر الإنترنت. ابنِ مستقبلك الرقمي مع خدماتنا المتميزة في تصميم المواقع والتسويق الإلكتروني.</p>
                </div>
                <div className="w-full lg:w-1/3 lg:flex flex-col items-center">
                    <h3 className="mb-10 ml-20 text-3xl">روابط تهمك</h3>
                    <ul className="text-center flex flex-col gap-y-3 w-2/4">
                        <Link href={'/how-working'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> كيف نعمل</Link>
                        <Link href={'/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> تواصل معنا</Link>
                        <Link href={'/'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> الشروط والأحكام</Link>
                        <Link href={'/privacy-policy'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> سياسة الخصوصية</Link>
                        <Link href={'/refund-returns'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> سياسة الإسترجاع</Link>
                        <Link href={'/'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> الأسئلة الشائعة</Link>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3">
                    <h3 className="mb-10 ml-20 text-3xl">تواصل معنا</h3>
                    <ul className="text-center flex flex-col gap-y-3 text-lg">
                        <Link href={'tel:+966566284570'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaPhone color="#ffd32b" /> +966566284570</Link>
                        <Link href={'https://wa.me/966566284570'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaWhatsapp color="#ffd32b" /> +966566284570</Link>
                        <Link href={'mailto:info@on-dm.com'} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><MdEmail color="#ffd32b" /> info@on-dm.com</Link>
                        <Link href={''} className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaLocationArrow color="#ffd32b" /> مكتب رقم 348، مول مزار، الجيزة - مصر
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-20 border-t-2 border-slate-300 border-opacity-15 pt-16">
                <div className="flex justify-center gap-5 mb-5">
                    <Link href={'https://www.facebook.com/people/ONDM/61556612142969/'} target="_blank"><FaFacebook size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" /></Link>
                    <Link href={'https://www.youtube.com/channel/UCwZ5Qz-GGbPIqvrbQVAXwcg'} target="_blank"><FaYoutube size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" /></Link>
                    <Link href={'https://www.instagram.com/ondm_official/'} target="_blank"><FaInstagram size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" /></Link>
                    <Link href={'https://www.linkedin.com/in/mohamed-abdullah-580490311/'} target="_blank"><FaLinkedin size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" /></Link>
                </div>
                <h3>Copyright © 2023 <Link href={'/'} className="text-[#ffd32b] hover:scale-105 duration-300">ON DM.</Link> All Rights Reserved</h3>
            </div>
        </footer>
    </>)
}
