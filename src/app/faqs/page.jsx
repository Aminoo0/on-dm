'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function Faqs() {

    const [open, setOpen] = useState(null)

    const faqs = [
        {
            q: '1. ما هي الخدمات التي تقدمها ON DM ؟', a: 'نحن نقدم مجموعة شاملة من الخدمات تشمل :', details: ['إدارة المشاريع', 'البرمجة التقنية', 'التسويق الإلكتروني', 'إدارة العمليات', 'الاستشارات القانونية', 'الخدمات المالية', 'تكامل الأعمال', 'حلول اللوجستيات', 'تطوير المواقع والتطبيقات']
        },
        {
            q: '2. كيف يمكنني بدء مشروع مع ON DM ؟', a: `يمكنك بدء مشروع معنا عبر التواصل معنا من خلال البريد الإلكتروني أو أرقام الهاتف المذكورة على موقعنا.

سنقوم بتحديد موعد لجلسة اكتشاف لمناقشة احتياجاتك وتحديد الأهداف.` },
        { q: '3. ما هي مدة تنفيذ المشروع ؟', a: 'تعتمد مدة تنفيذ المشروع على نطاقه وتعقيداته. بالنسبة لخططنا القياسية :', details: ['الاكتشاف : 1 يوم', 'التخطيط : 2 يوم', 'التصميم: 3 أيام', 'التطوير : 7 أيام', 'النشر : 1 يوم للخطط المخصصة، سيتم تحديد الجدول الزمني بناءً على متطلبات المشروع.'] },
        { q: '4. هل تقدمون خدمات مخصصة ؟', a: 'نعم، نقدم خدمات مخصصة تناسب احتياجات كل عميل على حدة. نعمل بشكل وثيق معك لتحديد متطلباتك وتقديم حلول مخصصة تلبي توقعاتك.' },
        {
            q: '5. هل هناك سياسة لاسترداد الأموال ؟', a: `نظرًا لطبيعة خدماتنا، لا نقدم استردادًا للأموال بعد بدء العمل على المشروع بناءً على اتفاقية العميل.

في حالة إلغاء الاتفاقية قبل بدء العمل، يتم استرداد المبلغ المدفوع بعد خصم أي تكاليف إدارية أو نفقات أولية تكبدتها ON DM.` },
        {
            q: '6. كيف يتم حماية معلوماتي الشخصية ؟', a: `نحن نتبع إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.

لمزيد من التفاصيل، يرجى مراجعة سياسة الخصوصية الخاصة بنا.` },
        { q: '7. هل تقدمون دعمًا بعد إطلاق المشروع ؟', a: 'نعم، نقدم الدعم اللازم بعد إطلاق المشروع لضمان تحقيق أفضل أداء. يشمل ذلك المراقبة المستمرة والتحديثات الدورية وحل أي مشكلات قد تنشأ.' },
        { q: '8. كيف يمكنني الاتصال بـ ON DM ؟', a: 'يمكنك الاتصال بنا عبر :', details: ['البريد الإلكتروني: info@on-dm.com', 'المملكة العربية السعودية: +966566284570', 'مصر: +201001520502', 'الهاتف الأرضي: +236150626', 'العنوان: مكتب رقم 348، مول مزار، الجيزة – مصر'] },
        { q: '9. هل تقدمون ورش عمل وتدريب ؟', a: 'نعم، نقدم ورش عمل لتحديد أهداف الخطط الربع سنوية والتدريب على مختلف الخدمات التي نقدمها مثل التسويق الإلكتروني وتطوير المواقع وإدارة العلاقات مع العملاء.' },
        {
            q: '10. هل يمكنكم زيارة مشروعي إذا لزم الأمر ؟', a: `نعم، نقدم خدمة الزيارات الميدانية للمشاريع عند الحاجة لتقديم الدعم والمشورة مباشرة.

إذا كان لديك أي أسئلة إضافية، لا تتردد في التواصل معنا. نحن هنا لمساعدتك في تحقيق نجاح أعمالك عبر الإنترنت.` },
    ]

    let test = (index) => {
        if (open == index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24" >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">الأسئلة الشائعة (FAQs) </h2>
                </div>
                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((item, index) =>
                        <div onClick={() => test(index)} key={index} className={`transition-all hover:scale-105 duration-300 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 overflow-hidden rounded-lg`}>
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-lg font-semibold text-black">{item.q}</span>
                                <FaChevronDown className={`${open == index ? '' : 'rotate-180'} w-5 h-5 text-gray-800 transition-all duration-500`} />
                            </button>
                            <div className={`${open == index ? '' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6 transition-all duration-300`}>
                                <p className=''>{item.a}</p>
                                <ul className='mt-3 border-t-2'>
                                    {item?.details?.map((term, index) =>
                                        <li key={index} className='list-disc mr-7 mt-2'>{term}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <Link href={'/%D8%AA%D9%88%D8%A7%D8%B5%D9%84-%D9%85%D8%B9%D9%86%D8%A7'} className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</Link></p>
            </div>
        </section >
    )
}
