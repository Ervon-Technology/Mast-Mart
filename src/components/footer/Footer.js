// app/components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-green-600 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Mast Mart. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </div>
      </footer>
    );
  }
  