import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";

export default function OurPlans() {

    const allPlans = [
        {
            id: 1, plan: 'خطة ON Track', price: 2100, oldPrice: 4200, isBlack: true, link: 'خطة-on-track',
            details: [' 1. موقع ويب احترافي', ' 2. تكامل خدمات جوجل', ' 3. تطوير الهوية التجارية', ' 4. تحليلات وتحسين محركات البحث', ' 5. بوابات الدفع والسياسات'
                , ' 6. مدير الحساب', ' 7. الدعم على مدار الساعة']
        },
        {
            id: 2, plan: 'خطة ON Air', price: 2999, oldPrice: 4999, isBlack: false, link: 'خطة-on-air',
            details: [' 1. خطة تسويقية على وسائل التواصل الاجتماعي', ' 2. تطوير الهوية البصرية', ' 3. إعداد المنصات', ' 4. المنشورات والريلز اليومية', ' 5. إدارة الإعلانات']
        },
        {
            id: 3, plan: 'خطة ON Phone', price: 5000, oldPrice: 10000, isBlack: true, link: 'خطة-on-phone',
            details: [' 1. نظام إدارة علاقات العملاء (CRM)', ' 2. التعاون لمدة 8 ساعات في 6 أيام', ' 3. عمليات الحجز/الشراء', '4. التقارير اليومية', '5. الاجتماعات الأسبوعية', '6. الأهداف الشهرية']
        },
        {
            id: 4, plan: 'خطة ON DM', price: 8999, oldPrice: 20000, isBlack: false, link: 'خطة-on-dm',
            details: ['1. تكامل خطة ON Track', '2. تعزيز خطة ON Air', '3. تكامل خطة ON Phone']
        },
    ]

    return (
        <section id="plans" className='px-7 lg:px-20 pb-20 scroll-mt-28' >
            <h2 className='text-5xl text-center font-bold my-5'>خطط ONDM الشهرية</h2>
            <div className="flex flex-wrap gap-y-5">
                {allPlans.map((plan) =>
                    <div key={plan.plan} className="w-full md:w-1/2 xl:w-1/4 px-2">
                        <div className='shadow-xl hover:shadow-slate-500 flex flex-col justify-between rounded-lg py-5 h-[600px] hover:scale-105 duration-300'>
                            <div>
                                <h2 className='font-bold text-xl text-center my-5 text-[#ffd32b]'>{plan.plan}</h2>
                                <div className='flex items-center justify-between p-5'>
                                    <h2 className='flex flex-wrap gap-2'><span className='font-bold text-5xl'>{plan.price}</span> <span className='flex flex-col'><span className="w-full font-bold">ر.س</span> <span className="w-full">شهريا</span></span></h2>
                                    <h2 className='line-through'>{plan.oldPrice}ر.س</h2>
                                </div>
                                <ul className="p-3 flex justify-center flex-wrap flex-col gap-y-5">
                                    {plan.details.map((li) => <>
                                        <li className="flex gap-x-3 items-center border-b border-slate-700 border-opacity-10 pb-1 hover:mr-5 duration-300"><FaRegCheckCircle color="#ffd32b" />{li}</li>
                                    </>)}
                                </ul>
                            </div>
                            <Link href={`/plan/${plan.link}`} className={`${plan.isBlack ? 'bg-black hover:bg-transparent hover:text-black outline outline-1' : 'bg-[#ffd32b] hover:bg-black hover:text-[#ffd32b] hover:outline-[#ffd32b] outline outline-1 outline-black'} py-3 w-1/2 text-center text-white self-center px-5 rounded-lg duration-300`}>اكتشف المزيد</Link>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )
}
