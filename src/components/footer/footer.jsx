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
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> كيف نعمل</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> تواصل معنا</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> الشروط والأحكام</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> سياسة الخصوصية</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> سياسة الإسترجاع</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaArrowLeft color="#ffd32b" /> الأسئلة الشائعة</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3">
                    <h3 className="mb-10 ml-20 text-3xl">تواصل معنا</h3>
                    <ul className="text-center flex flex-col gap-y-3 text-lg">
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaPhone color="#ffd32b" /> +966566284570</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaWhatsapp color="#ffd32b" /> +966566284570</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><MdEmail color="#ffd32b" /> info@on-dm.com</li>
                        <li className="flex items-center gap-3 hover:mr-3 hover:text-[#ffd32b] duration-300"><FaLocationArrow color="#ffd32b" /> مكتب رقم 348، مول مزار، الجيزة - مصر
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-20 border-t-2 border-slate-300 border-opacity-15 pt-16">
                <div className="flex justify-center gap-5 mb-5">
                    <FaFacebook size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" />
                    <FaYoutube size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" />
                    <FaInstagram size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" />
                    <FaLinkedin size={20} className="cursor-pointer text-slate-400 hover:text-[#ffd32b] duration-300" />
                </div>
                <h3>Copyright © 2023 <Link href={'/'} className="text-[#ffd32b] hover:scale-105 duration-300">ON DM.</Link> All Rights Reserved</h3>
            </div>
        </footer>
    </>)
}
