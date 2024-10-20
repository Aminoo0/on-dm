import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { blogs } from '@/data/blog';

export async function generateMetadata({ params }) {

    let blog = blogs.filter((term) => term.id == params.blogAndIdTitle[0])
    console.log(blog[0].title);

    return {
        title: blog[0].title
    }

}

export default function blogLayout({ children }) {
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
