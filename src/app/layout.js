import './globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "Mast Mart - Connecting Retailers with Farmers",
  description: "Mast Mart connects farmers directly to retailers for fresh staple products, ensuring timely delivery, no middlemen, and increased profits.",
  keywords: "Agribusiness, Farmers, Retailers, Procurement, Supply Chain, Mast Mart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-martel-regular">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
