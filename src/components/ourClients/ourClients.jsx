'use client'

import Image from "next/image";
import clientOne from '../../app/assits/client1.webp'
import clientTwo from '../../app/assits/client2.webp'
import clientThree from '../../app/assits/client3.webp'
import clientFour from '../../app/assits/client4.png'
import clientFive from '../../app/assits/client5.webp'
import clientSix from '../../app/assits/client6.jpg'
import clientSeven from '../../app/assits/client7.jpg'
import clientEight from '../../app/assits/client8.webp'
import clientNine from '../../app/assits/client9.webp'
import clientTen from '../../app/assits/client10.webp'
import clientEleven from '../../app/assits/client11.webp'
import clientTwelve from '../../app/assits/client12.jpg'
import clientThirteen from '../../app/assits/client13.jpg'
import clientFourteen from '../../app/assits/client14.jpg'
import clientFifteen from '../../app/assits/client15.jpg'
import clientSixteen from '../../app/assits/client16.jpg'
import clientSeventeen from '../../app/assits/client17.jpg'
import clientEighteen from '../../app/assits/client18.webp'
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurClients() {

    const allClients = [
        { id: 1, img: clientOne, code: 'Tafseel', link: 'https://www.tfaseel.com/apex/r/tfaseel/student/home' },
        { id: 2, img: clientTwo, code: 'Max Power' },
        { id: 3, img: clientThree, code: 'M Creativity' },
        { id: 4, img: clientFour, code: 'Alasayel', link: 'https://alasayeltours.com/' },
        { id: 5, img: clientFive, code: 'Smarter Hub' },
        { id: 6, img: clientSix, code: 'Auto Elmarwan' },
        { id: 7, img: clientSeven, code: 'Beauty Bazaar' },
        { id: 8, img: clientEight, code: 'El Wessam' },
        { id: 9, img: clientNine, code: 'M Shutter' },
        { id: 10, img: clientTen, code: 'Elite' },
        { id: 11, img: clientEleven, code: 'Mine' },
        { id: 12, img: clientTwelve, code: 'Manzly' },
        { id: 13, img: clientThirteen, code: 'Bubbles Kids Wear' },
        { id: 14, img: clientFourteen, code: 'Al Arid' },
        { id: 15, img: clientFifteen, code: 'Rowad Al-Amana' },
        { id: 16, img: clientSixteen, code: 'Progress Horizon' },
        { id: 17, img: clientSeventeen, code: 'Smart Talk' },
        { id: 18, img: clientEighteen, code: 'MK Design' },
    ]

    return (
        <section className='bg-[#1f1d0d] py-52'>
            <h2 className='text-5xl text-center font-bold text-white mb-16'>شركاء النجاح</h2>
            <div className="flex flex-wrap gap-y-10 xl:px-24">
                {allClients.map((client) =>
                    <Link href={`${client.link}`} target="_blank" key={client.id} className="w-1/2 md:w-1/4 lg:w-1/6 p-3">
                        <motion.div
                            initial={{ opacity: 0, scale: .8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="bg-[#ffd32b] rounded-md pb-10 h-72 flex flex-col justify-between hover:scale-105 hover:text-white hover:bg-slate-800 duration-300 overflow-hidden">
                            <Image alt="ay7aga" src={client.img} className="w-full h-3/4 rounded-md rounded-b-none hover:scale-105 duration-300" />
                            <h2 className="text-2xl font-bold text-center">{client.code}</h2>
                        </motion.div>
                    </Link>
                )}
            </div>
        </section>
    )
}
