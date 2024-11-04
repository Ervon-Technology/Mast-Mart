'use client'
import './globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { usePathname } from 'next/navigation';

const metadata = {
  title: "Mast Mart - Connecting Retailers with Farmers",
  description: "Mast Mart connects farmers directly to retailers for fresh staple products, ensuring timely delivery, no middlemen, and increased profits.",
  keywords: "Agribusiness, Farmers, Retailers, Procurement, Supply Chain, Mast Mart",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body className="font-martel-regular">
        {!isHomePage && <Navbar />}
        <main>{children}</main>
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
