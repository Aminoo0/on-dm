import { El_Messiri } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { AppWrapper } from '@/context/changePlansProvider';

const messiri = El_Messiri({
  subsets: ['latin'],
})

export const metadata = {
  metadataBase: new URL(`https://on-dm.com`),
  keywords: [''],
  title: {
    default: 'On-Dm Tech',
    template: `%s | On-Dm Tech`
  },
  openGraph: {
    description: 'تصميم مواقع ومتاجر وتسويق إلكتروني',
    images: ['']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${messiri.className} antialiased`}>
        <Navbar />
        <div className='mt-[75px] lg:mt-[88px]'>
          <AppWrapper>
            {children}
          </AppWrapper>
        </div>
        <Footer />
      </body>
    </html>
  );
}
