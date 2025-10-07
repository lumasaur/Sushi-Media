'use client';

export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors">
        Download Implementation Guide (PDF)
      </button>
      <button className="bg-white text-red-700 border-2 border-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
        Schedule Strategy Session
      </button>
    </div>
  );
}
