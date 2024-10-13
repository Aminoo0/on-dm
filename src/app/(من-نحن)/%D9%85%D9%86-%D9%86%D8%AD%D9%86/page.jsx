'use client'

import Image from "next/image";
import aboutUsOne from "@/app/assits/aboutus1.jpg";
import aboutUsTwo from "@/app/assits/aboutus2.jpg";
import aboutUsThree from "@/app/assits/aboutus3.jpg";
import aboutUsFour from "@/app/assits/aboutus4.jpg";
import aboutUsFive from "@/app/assits/aboutus5.png";
import aboutUsSix from "@/app/assits/aboutus6.png";
import { FaCheckDouble, FaRegEye, FaHandsWash } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Link from "next/link";
import AboutUsSlice from "@/components/aboutUsSlice/aboutUsSlice";
import { motion } from "framer-motion";


export default function AboutUs() {

    return (<>
        <section className='pt-10'>
            <div className='w-10/12 mx-auto flex flex-wrap gap-y-10 overflow-hidden'>
                <motion.div initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }} className='w-full lg:w-1/2'>
                    <h1 className='text-5xl font-bold mb-20'>من نحن</h1>
                    <p className='text-violet-950 font-semibold'>شركة ON DM هي وكالة رائدة في تطوير الأعمال تعمل في مصر والمملكة العربية السعودية (KSA) منذ عام 2017. تأسست الشركة تحت الاسم القانوني TRIPLE INFLUENCE في القاهرة عام 2007، وبدأت رحلتنا في مجال الاستيراد والتصدير بين الصين والمملكة العربية السعودية ومصر. على مر السنين، قمنا بتوسيع خبراتنا لتقديم حلول شاملة للأعمال، مما يساعد عملائناعلى النجاح في سوق تنافسي.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }} className='w-full lg:w-1/2'>
                    <Image alt='about us' loading="lazy" src={aboutUsOne} className='w-full h-full rounded-lg' />
                </motion.div>
            </div>

            <div className='w-10/12 mx-auto flex flex-wrap justify-between my-20 gap-y-20'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/3 p-3 hover:scale-105 duration-300'>
                    <div className='flex flex-col items-center gap-y-5 p-5 shadow-md hover:shadow-slate-500 duration-300'>
                        <FaCheckDouble size={70} color="#ffd32b" />
                        <h3 className='text-3xl font-bold'>مهمتنا</h3>
                        <p className='my-5 italic'>مهمتنا هي توفير الدعم الشامل للشركات في كل مرحلة، من التأسيس والتطوير إلى الإدارة والتدريب والدعم. نسعى لتقديم حلول مخصصة لتلبية احتياجات كل عميل،مما يضمن نجاحهم على المدى الطويل.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/3 p-3 hover:scale-105 duration-300'>
                    <div className='flex flex-col items-center gap-y-5 p-5 shadow-md hover:shadow-slate-500 duration-300'>
                        <ImProfile size={70} color="#ffd32b" />
                        <h3 className='text-3xl font-bold'>القيادة</h3>
                        <p className='my-5 italic'>تحت قيادة المهندس محمد لطفي أبو زيد، المحترف ذو المهارات المتنوعة والخبرة الواسعة. يحمل الجنسية المصرية ودرجة البكالوريوس في تكنولوجيا نظم المعلومات، وهو مبرمج معتمد في FLUTTER وPHP، ومستشار في الأمن السيبراني، وخبير في إدارة الخوادم وتطوير ووردبريس. تشمل مسيرته المهنية أدوارًا حيوية مثل مدير التسويق في CHARMEL Cosmetics KSA والرئيس التنفيذي لشركة BLGOMLA في المملكة العربية السعودية. تحت إدارته، أكملت ON DM بنجاح أكثر من 30 مشروعًا في مصر والمملكة العربية السعودية والإمارات العربية المتحدة.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/3 p-3 hover:scale-105 duration-300'>
                    <div className='flex flex-col items-center gap-y-5 p-5 shadow-md hover:shadow-slate-500 duration-300'>
                        <FaRegEye size={70} color="#ffd32b" />
                        <h3 className='text-3xl font-bold'>رؤيتنا</h3>
                        <p className='my-5 italic'>رؤيتنا هي أن نكون الشريك الأمثل للشركات التي تسعى للتفوق في العصر الرقمي. نحن ملتزمون بتحقيق النجاح من خلال الحلول المبتكرة، والتخطيط الاستراتيجي، والدعم المستمر، لضمان تحقيق عملائنا لأهدافهم التجارية.</p>
                    </div>
                </motion.div>
            </div>

            <div className='w-10/12 mx-auto flex flex-wrap justify-between gap-y-10 overflow-hidden'>
                <motion.div initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/2 p-5'>
                    <Image alt='about us' src={aboutUsTwo} className='w-full h-4/5 rounded-lg' />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/2 p-5'>
                    <h2 className='text-3xl font-bold mb-5'>خدمات شاملة تلبي جميع احتياجاتك</h2>
                    <p className='mb-7 text-lg'>نمتلك خبرة واسعة في هذا المجال، وفريقًا من المبدعين والمختصين ذوي المهارات العالية والذين يتمتعون بشغف كبير بتقديم أفضل الخدمات لعملائنا.</p>
                    <div className='flex gap-5'>
                        <Image alt='about us' src={aboutUsThree} className='w-1/6 h-full' />
                        <ul className='flex flex-col gap-3'>
                            <h3 className='text-xl font-bold'>خدماتنا الشاملة تغطي مجالات الأعمال المختلفة، بما في ذلك:</h3>
                            <li className='font-bold'>1. الاستشارات القانونية (المستشار الدولي للأعمال)</li>
                            <li className='font-bold'>2. الخدمات المالية (الحسابات، بوابات الدفع)</li>
                            <li className='font-bold'>3. تكامل الأعمال</li>
                            <li className='font-bold'>4. حلول اللوجستيات</li>
                            <AboutUsSlice />
                        </ul>
                    </div>
                    <div className='flex gap-5 mt-10'>
                        <Image alt='about us' src={aboutUsFour} className='w-1/6 h-full' />
                        <ul className='flex flex-col gap-3'>
                            <h3 className='text-2xl font-bold'>خبراتنا</h3>
                            <p>نحن متخصصون في أربعة قطاعات رئيسية:</p>
                            <li className='font-bold'>1. إدارة المشاريع</li>
                            <li className='font-bold'>2. البرمجة التقنية</li>
                            <li className='font-bold'>3. التسويق الإلكتروني</li>
                            <li className='font-bold'>4. إدارة العمليات</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <div className='w-10/12 mx-auto flex flex-wrap gap-y-5 mt-10'>
                <motion.div initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/2 p-3'>
                    <div className='mx-auto flex flex-col gap-5 shadow-lg hover:scale-105 shadow-slate-500 hover:shadow-slate-800 duration-300 p-3 rounded-md h-full'>
                        <div className='flex items-center'>
                            <Image alt='about us' src={aboutUsFive} className='w-1/12 h-full' />
                            <h3 className='text-2xl font-bold mr-6'>عروضنا الفريدة</h3>
                        </div>
                        <p>نحن نفخر بتقديم خدمات فريدة تميزنا عن المنافسين:</p>
                        <ul className='list-disc font-bold mr-10'>
                            <li>مدير الحساب (دعم أعمال العميل)</li>
                            <li>ورش العمل لخطط الأهداف الربع سنوية</li>
                            <li>زيارات ميدانية للمشاريع (إذا لزم الأمر)</li>
                            <li>بناء مجتمع مستهدف قوي</li>
                            <li>محتوى احترافي للمنتجات / الخدمات</li>
                            <li>تطوير تكاملات B2B</li>
                            <li>نظام CRM احترافي</li>
                            <li>توقعات لتوسع الفروع</li>
                            <li>اشتراكات سنوية / شهرية (خدمات شاملة)</li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='w-full lg:w-1/2 p-3'>
                    <div className='mx-auto flex flex-col gap-5 shadow-lg hover:scale-105 shadow-slate-500 hover:shadow-slate-800 duration-300 p-3 rounded-md h-full'>
                        <div className='flex items-center'>
                            <Image alt='about us' src={aboutUsSix} className='w-1/12 h-full' />
                            <h3 className='text-2xl font-bold mr-6'>عملية العمل</h3>
                        </div>
                        <p>نتبع جدول زمني مبسط لضمان تقديم الخدمات بكفاءة:</p>
                        <ul className='list-disc font-bold mr-10'>
                            <li>الاكتشاف: 1 يوم</li>
                            <li>التخطيط: 2 يوم</li>
                            <li>التصميم: 3 أيام</li>
                            <li>التطوير: 7 أيام</li>
                            <li>النشر: 1 يوم</li>
                        </ul>
                        <p>يتم تخصيص الخطط المخصصة وفقًا لاحتياجات ونطاق المشروع. يرجى ملاحظة أننا نتبع سياسة عدم الاسترداد بمجرد بدء العمل بعد توقيع اتفاق العميل.</p>
                    </div>
                </motion.div>
            </div>

            <div className='flex flex-col gap-y-3 items-center mt-16 bg-[#ffd32b] w-full p-5'>
                <h3 className='text-3xl font-bold italic my-5'>فريق مبني على الخبرة</h3>
                <p className='text-lg'>في ON DM، نحن ملتزمون بتحقيق نجاح أعمالك عبر الإنترنت من خلال حلول مبتكرة ومخصصة. تعاون معنا لتحقيق أهدافك التجارية والتفوق في العالم الرقمي.</p>
                <p className='text-lg'>لمزيد من المعلومات أو لمناقشة احتياجات مشروعك، يرجى التواصل معنا:</p>
                <Link href={'/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7'}><motion.button
                    initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className=' bg-[#1f1d0d] text-lg py-5 px-7 rounded-lg text-white hover:scale-105 hover:bg-white hover:text-slate-800 hover:outline duration-300'>تواصل معنا</motion.button></Link>
            </div>

            <div className='w-10/12 mx-auto flex flex-wrap gap-y-10 mt-20'>
                <motion.div initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='p-3 w-full lg:w-1/4'>
                    <div className='flex flex-col items-center w-full text-center rounded-md p-3 gap-y-3 hover:scale-105 duration-300 shadow-md'>
                        <FaHandsWash size={70} />
                        <h4 className='text-2xl font-semibold'>جاهزون لرسم طريق النجاح</h4>
                        <p className='font-semibold'>خدمات متميزة وفريق مبدع يحقق أحلامك الرقمية.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='p-3 w-full lg:w-1/4'>
                    <div className='flex flex-col items-center w-full text-center rounded-md p-3 gap-y-3 hover:scale-105 duration-300 shadow-md'>
                        <ImProfile size={70} />
                        <h4 className='text-2xl font-semibold'>تجربة تعاون لا مثيل لها</h4>
                        <p className='font-semibold'>أولويتنا الأولى هي رضاء عملائنا وتحقيق توقعاتهم.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='p-3 w-full lg:w-1/4'>
                    <div className='flex flex-col items-center w-full text-center rounded-md p-3 gap-y-3 hover:scale-105 duration-300 shadow-md'>
                        <FaHandsWash size={70} />
                        <h4 className='text-2xl font-semibold'>حلول تسويقية مبتكرة</h4>
                        <p className='font-semibold'>نقدم استراتيجيات تسويقية فعالة ومبتكرة تزيد من وعي علامتك التجارية.</p>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: .5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", duration: .5 }}
                    className='p-3 w-full lg:w-1/4'>
                    <div className='flex flex-col items-center w-full text-center rounded-md p-3 gap-y-3 hover:scale-105 duration-300 shadow-md'>
                        <FaCheckDouble size={70} />
                        <h4 className='text-2xl font-semibold'>تجربة مستخدم مميزة</h4>
                        <p className='font-semibold'>نصمم واجهات سهلة الاستخدام وجاذبة تؤمن تجربة مستخدم مريحة وفريدة.</p>
                    </div>
                </motion.div>
            </div>

        </section>
    </>)
}

