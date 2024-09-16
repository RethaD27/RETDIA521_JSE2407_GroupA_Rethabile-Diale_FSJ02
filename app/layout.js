import './globals.css';
import Header from './components/Header';

/**
 * Metadata for the QuickCart Emporium application.
 * @type {Object}
 * @property {string} title - The title of the website.
 * @property {string} description - The description of the website.
 */
export const metadata = {
  title: 'QuickCart Emporium',
  description: 'Discover Amazing Products',
};

/**
 * RootLayout component that provides the layout structure for the entire application.
 * It includes global styles, a header, and renders the main content.
 *
 * @param {Object} props - The properties passed to the RootLayout component.
 * @param {JSX.Element} props.children - The child elements to be rendered inside the layout.
 * @returns {JSX.Element} - The root layout of the application with a header and main content area.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        {/* Header component is included here */}
        <Header />
        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
