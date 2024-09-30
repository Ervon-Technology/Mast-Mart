import localFont from "next/font/local";
import "./globals.css";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


// Importing local fonts
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export const metadata = {
  title: "Mast Mart - Connecting Retailers with Farmers",
  description: "Mast Mart connects farmers directly to retailers for fresh staple products, ensuring timely delivery, no middlemen, and increased profits.",
  keywords: "Agribusiness, Farmers, Retailers, Procurement, Supply Chain, Mast Mart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}








