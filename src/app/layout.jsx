import { El_Messiri } from 'next/font/google';
import "./globals.css";
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { PlansTwoHiddenProvider } from '@/context/changePlansProvider';

const messiri = El_Messiri({
  subsets: ['latin'],
})

export const metadata = {
  title: "On Dm Tech",
  description: "Generated by On Dm Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${messiri.className} antialiased`}>
        <Navbar />
        <div className='mt-[75px] lg:mt-[88px]'>
          <PlansTwoHiddenProvider>
            {children}
          </PlansTwoHiddenProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
