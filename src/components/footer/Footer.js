// app/components/Footer.js
import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-[#045518] text-white p-4 text-center mt-8">
        <p>&copy; 2024 Mast Mart. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
      </footer>
    );
  }
  