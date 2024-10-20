import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';


export const metadata = {
    metadataBase: new URL(`https://on-dm.com/on-dm-blog`),
    keywords: [''],
    title: {
        default: 'المدونة',
        template: `%s | On-Dm Tech`
    },
    openGraph: {
        description: 'تصميم مواقع ومتاجر وتسويق إلكتروني - المدونة',
        images: ['']
    }
};

export default function BlogsLayout({ children }) {
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
