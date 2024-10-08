import { plans } from "@/data/plans";
import Image from "next/image";
import Link from "next/link";

export default function FilterOne({ params }) {

    let fliterPlans = plans?.filter((plann) => plann.link.replace(/خطة-/g, '') !== params)

    return (<>

        {
            fliterPlans.map((onePlan) =>
                <div key={onePlan.id} className="w-1/2 md:w-1/3 p-5">
                    <Link href={`/plan/${onePlan.link}`} key={onePlan.id} className="hover:text-[#ffd32b] duration-300">
                        <Image src={onePlan.img.src} width={500} height={500} alt="plan" className="rounded-md hover:scale-105 duration-300" />
                        <h3 className="text-lg text-center mt-3">{onePlan.name}</h3>
                    </Link>
                </div>)
        }

    </>)
}
