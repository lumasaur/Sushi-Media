import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import './globals.css';

// Font configuration matching Ami Sushi brand
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ami Sushi Marketing Portal',
  description: 'Internal stakeholder tool for marketing strategy review and content planning',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${ebGaramond.variable}`}>
      <body className="antialiased bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Ami Sushi Marketing Portal
              </a>

              <div className="flex gap-6">
                <a
                  href="/strategy-review"
                  className="text-gray-700 hover:text-red-700 font-medium transition-colors"
                >
                  Strategy Review
                </a>
                <a
                  href="/strategy-review/content-calendar"
                  className="text-gray-700 hover:text-red-700 font-medium transition-colors"
                >
                  Content Calendar
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center text-gray-600">
              <p className="text-sm">
                Ami Sushi Marketing Portal — Internal Strategy Review Tool
              </p>
              <p className="text-xs mt-2 text-gray-500">
                538 Springfield Avenue, Berkeley Heights, NJ 07922
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
