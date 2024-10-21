import Image from 'next/image'
import aboutusCaption from '../../app/assits/aboutuscaption.jpg'
import imgOne from '../../app/assits/img1.png'
import imgTwo from '../../app/assits/img2.png'
import imgThree from '../../app/assits/img3.png'
import imgFour from '../../app/assits/img4.png'

export default function AboutusCaption() {
    return (
        <section className='flex flex-wrap p-5 pb-20 pt-10 2xl:px-52'>
            <div className='w-full lg:w-1/2'>
                <h2 className='font-semibold pb-3'>نهج إبداعي يجسد نجاحك على أرض الواقع بداية من تحويل فكرتك لموقع إلكتروني إلى تسويق فكرتك وتحويلها لأرباح.</h2>
                <div className='relative hover:scale-105 duration-300'>
                    <Image className='w-11/12 z-40 relative rounded-xl' src={aboutusCaption} alt='about us' />
                    <div className='after:bg-[#ffd32b] after:absolute after:top-[7%] after:left-[5%] after:content-[""] after:w-11/12 after:h-full after:rounded-xl'></div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-wrap mt-10 lg:mt-0'>
                <div className='w-1/2 p-1 lg:p-3 order-1'>
                    <div className='p-2 lg:p-5 shadow-xl rounded-lg hover:bg-[#ffd32b] hover:scale-105 duration-300'>
                        <Image alt='about us' width={60} height={60} src={imgOne} className='animate-spin' />
                        <h2 className='font-bold my-2 text-xl'>تصميم مواقع</h2>
                        <p>حلول تصميم تلبي تطلعاتك ومتطلباتك تجعلك متميزًا في سوقك</p>
                    </div>
                </div>
                <div className='w-1/2 p-1 lg:p-3 '>
                    <div className='p-2 lg:p-5 shadow-xl rounded-lg hover:bg-[#ffd32b] hover:scale-105 duration-300'>
                        <Image alt='about us' width={60} height={60} src={imgTwo} />
                        <h2 className='font-bold my-2 text-xl'>متاجر إلكترونية</h2>
                        <p>تصميم متاجر إلكترونية متجاوبة جاهزة لاستقبال العملاء عبر الإنترنت</p>
                    </div>
                </div>
                <div className='w-1/2 p-1 lg:p-3 '>
                    <div className='p-2 lg:p-5 shadow-xl rounded-lg hover:bg-[#ffd32b] hover:scale-105 duration-300'>
                        <Image alt='about us' width={60} height={60} src={imgThree} />
                        <h2 className='font-bold my-2 text-xl'>برمجة خاصة</h2>
                        <p>مواقع وتطبيقات تضمن نجاحك الرقمي وتجسد أفكارك بأدق التفاصيل</p>
                    </div>
                </div>
                <div className='w-1/2 p-1 lg:p-3 order-2'>
                    <div className='p-2 lg:p-5 shadow-xl rounded-lg hover:bg-[#ffd32b] hover:scale-105 duration-300'>
                        <Image alt='about us' width={60} height={60} src={imgFour} />
                        <h2 className='font-bold my-2 text-xl'>تسويق إلكتروني</h2>
                        <p>استراتيجيات مبتكرة في إعداد إعلانات مُستهدفة وحملات تسويقية لزيادة المبيعات</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
