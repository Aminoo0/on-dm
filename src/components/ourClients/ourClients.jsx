import Image from "next/image";
import clientOne from '../../app/assits/client1.webp'

export default function OurClients() {
    return (
        <section className='bg-[#1f1d0d] py-52'>
            <h2 className='text-5xl text-center font-bold text-white'>شركاء النجاح</h2>
            <div>
                <div className="">
                    <Image alt="ay7aga" src={clientOne} width={150} className="w-auto h-auto" />
                </div>
            </div>
        </section>
    )
}
