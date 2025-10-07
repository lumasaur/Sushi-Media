'use client';

export function BackButton() {
  const handleClick = () => {
    window.parent.postMessage({ action: 'close-detail' }, '*');
  };

  return (
    <button
      onClick={handleClick}
      className="text-sm text-gray-600 hover:text-gray-900 font-medium"
    >
      ← Back to Strategy Table
    </button>
  );
}
