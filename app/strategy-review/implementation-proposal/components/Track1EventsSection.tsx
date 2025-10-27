'use client';

import React from 'react';
import { ExpandableSection } from './ExpandableSection';

export function Track1EventsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">T1</span>
        </div>
        <div>
          <div className="text-sm text-red-600 font-bold mb-1 tracking-wide">TRACK 1</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Events Programming</h2>
          <p className="text-gray-400 mt-2 text-lg">Build consistent mid-week traffic with proven social formats</p>
        </div>
      </div>
      
      <div className="card-dark p-8 shadow-medium">
        <h3 className="text-2xl font-bold text-white mb-4">
          The Problem We are Solving
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          Tuesday and Thursday nights are slow. We need recurring programming that gives customers a reason
          to come in mid-week, without overwhelming our staff or existing patrons.
        </p>
      </div>
    </div>
  );
}
