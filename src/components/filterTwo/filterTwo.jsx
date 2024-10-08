
import { anotherProdcuts, anotherProdcutsThree, anotherProdcutsTwo } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function FilterTwo({ params }) {
    // console.log(params);

    let fliterAnotherProdcuts = anotherProdcuts?.filter((plan) => plan.id !== params)
    let fliterAnotherProdcutsTwo = anotherProdcutsTwo?.filter((plan) => plan.id !== params)
    let fliterAnotherProdcutsThree = anotherProdcutsThree?.filter((plan) => plan.id !== params)

    if (fliterAnotherProdcuts.length !== 3) {
        fliterAnotherProdcutsTwo = null
        fliterAnotherProdcutsThree = null
    } else if (fliterAnotherProdcutsTwo.length !== 3) {
        fliterAnotherProdcuts = null
        fliterAnotherProdcutsThree = null
    } else if (fliterAnotherProdcutsThree.length !== 3) {
        fliterAnotherProdcuts = null
        fliterAnotherProdcutsTwo = null
    }

    return (<>

        {
            fliterAnotherProdcuts?.map((onePlan) =>
                <div key={onePlan.id} className="w-1/2 md:w-1/3 p-3 rounded-md">
                    <Link href={`/product/${onePlan.link}`} key={onePlan.id} className="hover:text-[#ffd32b] duration-300">
                        <Image src={onePlan.img.src} width={500} height={500} alt="plan" className="rounded-md hover:scale-105 duration-300" />
                        <h3 className="text-lg text-center mt-3">{onePlan.name}</h3>
                    </Link>
                </div>)
        }
        {
            fliterAnotherProdcutsTwo?.map((onePlan) =>
                <div key={onePlan.id} className="w-1/2 md:w-1/3 p-3 rounded-md">
                    <Link href={`/product/${onePlan.link}`} key={onePlan.id} className="hover:text-[#ffd32b] duration-300">
                        <Image src={onePlan.img.src} width={500} height={500} alt="plan" className="rounded-md hover:scale-105 duration-300" />
                        <h3 className="text-lg text-center mt-3">{onePlan.name}</h3>
                    </Link>
                </div>)
        }
        {
            fliterAnotherProdcutsThree?.map((onePlan) =>
                <div key={onePlan.id} className="w-1/2 md:w-1/3 p-3 rounded-md">
                    <Link href={`/product/${onePlan.link}`} key={onePlan.id} className="hover:text-[#ffd32b] duration-300">
                        <Image src={onePlan.img.src} width={500} height={500} alt="plan" className="rounded-md hover:scale-105 duration-300" />
                        <h3 className="text-lg text-center mt-3">{onePlan.name}</h3>
                    </Link>
                </div>)
        }

    </>)
}
