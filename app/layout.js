import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: {
    default: 'QuickCart Emporium',
    template: '%s | QuickCart Emporium'
  },
  description: 'Discover Amazing Products at QuickCart Emporium',
  openGraph: {
    title: 'QuickCart Emporium',
    description: 'Discover Amazing Products at QuickCart Emporium',
    type: 'website',
    url: 'https://quickcart-emporium.com',
    siteName: 'QuickCart Emporium',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quickcartemporium',
    creator: '@quickcartemporium',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}