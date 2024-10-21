import { anotherProdcuts, anotherProdcutsTwo, anotherProdcutsThree } from '@/data/products';


export async function generateMetadata({ params }) {

    let productOne = anotherProdcuts.filter((term) => term.id == params.productName)
    let productTwo = anotherProdcutsTwo.filter((term) => term.id == params.productName)
    let productThree = anotherProdcutsThree.filter((term) => term.id == params.productName)
    // console.log(params.productName);
    // console.log(product);

    return {
        title: productOne[0]?.name || productTwo[0]?.name || productThree[0]?.name,
        description: productOne[0]?.overview || productTwo[0]?.overview || productThree[0]?.overview
    }

}

export default function ProductsLayout({ children }) {
    return (<section>
        <div className='mt-[75px] lg:mt-[88px]'>
            {children}
        </div>
    </section>
    );
}
