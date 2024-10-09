import { FaPhone, FaLocationArrow, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function ContactUs() {
  return (
    <section className='pt-10'>
      <div className='w-10/12 mx-auto flex flex-wrap gap-y-10'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-5xl font-bold mb-10'>تواصل معنا</h1>
          <p className='font-semibold my-10'>نحن نهتم بملاحظاتك واستفساراتك ونسعد بمساعدتك فيما يتعلق بخدماتنا ومنتجاتنا</p>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-x-5 justify-start mr-10'>
              <FaPhone size={50} className='bg-[#ffd32b] p-3 rounded-md hover:scale-105 hover:bg-transparent hover:outline hover:outline-1 hover:outline-slate-950 hover:text-emerald-600 duration-300' />
              <div>
                <h4 className='font-bold text-lg'>اتصل بنا</h4>
                <h4 className='font-semibold'>+966566284570</h4>
              </div>
            </div>
            <div className='flex items-center gap-x-5 justify-start mr-10'>
              <FaWhatsapp size={50} className='bg-[#ffd32b] p-3 rounded-md hover:scale-105 hover:bg-transparent hover:outline hover:outline-1 hover:outline-slate-950 hover:text-emerald-600 duration-300' />
              <div>
                <h4 className='font-bold text-lg'>واتس آب</h4>
                <h4 className='font-semibold'>+966566284570</h4>
              </div>
            </div>
            <div className='flex items-center gap-x-5 justify-start mr-10'>
              <MdEmail size={50} className='bg-[#ffd32b] p-3 rounded-md hover:scale-105 hover:bg-transparent hover:outline hover:outline-1 hover:outline-slate-950 hover:text-emerald-600 duration-300' />
              <div>
                <h4 className='font-bold text-lg'>البريد الإلكتروني</h4>
                <h4 className='font-semibold'>info@on-dm.com</h4>
              </div>
            </div>
            <div className='flex items-center gap-x-5 justify-start mr-10'>
              <FaLocationArrow size={50} className='bg-[#ffd32b] p-3 rounded-md hover:scale-105 hover:bg-transparent hover:outline hover:outline-1 hover:outline-slate-950 hover:text-emerald-600 duration-300' />
              <div>
                <h4 className='font-bold text-lg'>العنوان</h4>
                <h4 className='font-semibold'>مكتب رقم 348، مول مزار، الجيزة - مصر</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.3333619267496!2d31.16861117538899!3d29.99858287494676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458467806d28605%3A0x5b96a53591201495!2sMazar%20mall%20-%20Haram!5e0!3m2!1sen!2seg!4v1728479071151!5m2!1sen!2seg" style={{ border: 0, height: 450, width: '100%' }} className='rounded-lg' loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}
