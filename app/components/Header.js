import Link from 'next/link';

/**
 * Header component that displays the navigation bar with links to different pages.
 *
 * @returns {JSX.Element} - The header component containing the website's logo and navigation links.
 */
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Website logo and title */}
        <Link href="/" className="flex items-center">
          <span className="font-['Dancing_Script'] text-3xl text-white">QuickCart Emporium</span>
        </Link>
        {/* Navigation links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-indigo-200 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/categories" className="text-white hover:text-indigo-200 transition-colors duration-300">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/cart" className="text-white hover:text-indigo-200 transition-colors duration-300">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
