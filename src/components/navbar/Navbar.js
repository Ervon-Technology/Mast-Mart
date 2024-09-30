// app/components/Navbar.js

export default function Navbar() {
    return (
      <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
        <div className="text-lg font-bold">Mast Mart</div>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </nav>
    );
  }
  