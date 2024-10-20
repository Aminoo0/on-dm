import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';


export const metadata = {
    metadataBase: new URL(`https://on-dm.com/%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%85%d8%b9%d9%86%d8%a7/`),
    keywords: [''],
    title: {
        default: 'تواصل معنا',
        template: `%s | On-Dm Tech`
    },
    openGraph: {
        description: 'تصميم مواقع ومتاجر وتسويق إلكتروني - تواصل معنا',
        images: ['']
    }
};

export default function ContactUsLayout({ children }) {
    return (
        <section>
            <Navbar />
            <div className='mt-[75px] lg:mt-[88px]'>
                {children}
            </div>
            <Footer />
        </section>
    );
}
