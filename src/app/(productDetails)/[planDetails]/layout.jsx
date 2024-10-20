import { products } from '@/data/products';


export async function generateMetadata({ params }) {

    let product = products.filter((term) => term.id == params.planDetails)
    console.log(params.planDetails);
    console.log(product);

    return {
        title: product[0].title,
        description: product[0].h1
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
