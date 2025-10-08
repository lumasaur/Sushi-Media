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
      <body className="antialiased">
        <header className="bg-[#120c0d] border-b border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-white">
                Ami Sushi Marketing Portal
              </a>

              <div className="flex gap-6">
                <div className="relative group">
                  <a
                    href="https://sushi-media-ami.vercel.app/"
                    className="text-gray-300 hover:text-white font-medium transition-colors"
                  >
                    Strategic Marketing Framework
                  </a>
                  <div className="absolute left-0 mt-2 w-56 bg-[#1a1416] border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="https://sushi-media-ami.vercel.app/#overview" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Overview</a>
                    <a href="https://sushi-media-ami.vercel.app/#objectives" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Objectives</a>
                    <a href="https://sushi-media-ami.vercel.app/#analysis" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Analysis</a>
                  </div>
                </div>

                <div className="relative group">
                  <a
                    href="/strategy-review"
                    className="text-gray-300 hover:text-white font-medium transition-colors"
                  >
                    Strategy Initiatives Review
                  </a>
                  <div className="absolute left-0 mt-2 w-56 bg-[#1a1416] border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="/strategy-review#roadmap" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Roadmap</a>
                    <a href="/strategy-review#portfolio" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Portfolio</a>
                    <a href="/strategy-review#implementation-checklist" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">Implementation Checklist</a>
                  </div>
                </div>

                <a
                  href="https://v0-html-webpage-development-git-master-lumasaurs-projects.vercel.app/strategy-review/content-calendar"
                  className="text-gray-300 hover:text-white font-medium transition-colors"
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

        <footer className="bg-[#120c0d] border-t border-gray-700 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center text-gray-400">
              <p className="text-base">
                Ami Sushi Marketing Portal — Internal Strategy Review Tool
              </p>
              <p className="text-sm mt-2 text-gray-500">
                538 Springfield Avenue, Berkeley Heights, NJ 07922
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
