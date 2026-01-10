import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        <div className="flex items-center justify-between">
          
          {/* Logo (LEFT) */}
          <Link
            href="/"
            className="text-2xl font-bold text-green-700"
          >
            Kind Root
          </Link>

          {/* Navigation (RIGHT, straight line) */}
          <nav className="flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/about" className="hover:text-green-700">About Us</Link>
            <Link href="/programs" className="hover:text-green-700">Programs</Link>
            <Link href="/get-involved" className="hover:text-green-700">Get Involved</Link>
            <Link href="/news" className="hover:text-green-700">News & Impact</Link>
            <Link href="/contact" className="hover:text-green-700">Contact</Link>
          </nav>

        </div>
      </div>
    </header>
  );
}


