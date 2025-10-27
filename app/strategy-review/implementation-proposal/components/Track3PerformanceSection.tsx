'use client';

import React from 'react';

export function Track3PerformanceSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">T3</span>
        </div>
        <div>
          <div className="text-sm text-green-600 font-bold mb-1 tracking-wide">TRACK 3</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Performance Tracking</h2>
          <p className="text-gray-400 mt-2 text-lg">Measure what works to optimize and scale</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-white mb-4">
          Weekly Metrics
        </h3>
        <p className="text-gray-300 text-lg">
          Track event performance, lunch delivery volume, and overall business trends.
        </p>
      </div>
    </div>
  );
}
