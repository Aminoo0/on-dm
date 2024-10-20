import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';


export const metadata = {
    metadataBase: new URL(`https://on-dm.com/%d9%85%d9%86-%d9%86%d8%ad%d9%86/`),
    keywords: [''],
    title: {
        default: 'من نحن',
        template: `%s | On-Dm Tech`
    },
    openGraph: {
        description: 'تصميم مواقع ومتاجر وتسويق إلكتروني - من نحن',
        images: ['']
    }
};

export default function ABoutUsLayout({ children }) {
    return (<section>
        <Navbar />
        <div className='mt-[75px] lg:mt-[88px]'>
            {children}
        </div>
        <Footer />
    </section>
    );
}
