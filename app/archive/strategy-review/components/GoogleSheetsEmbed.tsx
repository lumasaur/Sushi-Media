'use client';

import { useState, useEffect } from 'react';

const SHEET_ID = '1rXdEWRaDRP7dGBnCIXEAofAjmbOL7u-fQzEbN4W9E7k';

export function GoogleSheetsEmbed() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const embedUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?rm=minimal&widget=true&headers=false`;
  const editUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`;

  if (isMobile) {
    return (
      <div className="mobile-sheet-card bg-white rounded-lg shadow-md p-8 text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Digital Marketing Content Calendar
          </h3>
          <p className="text-gray-700 leading-relaxed">
            View and edit the complete content calendar including posting schedules,
            campaign themes, and social media strategies across all platforms.
          </p>
        </div>

        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-medium hover:bg-red-800 transition-colors"
        >
          Open Content Calendar in Google Sheets →
        </a>

        <p className="mt-4 text-sm text-gray-500">
          Opens in Google Sheets for optimal mobile viewing and editing experience
        </p>
      </div>
    );
  }

  return (
    <div className="sheets-container max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gray-50 rounded-t-lg border border-b-0 border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Digital Marketing Content Calendar
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Real-time view of posting schedule and campaign planning
          </p>
        </div>

        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:text-red-900 font-medium text-sm transition-colors"
        >
          Open in Google Sheets to Edit →
        </a>
      </div>

      {/* Iframe Container */}
      <div className="relative bg-white rounded-b-lg border border-gray-200 overflow-hidden" style={{ height: '800px' }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mb-4"></div>
              <p className="text-gray-600">Loading content calendar...</p>
            </div>
          </div>
        )}

        <iframe
          src={embedUrl}
          onLoad={() => setIsLoading(false)}
          title="Marketing Content Calendar"
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
