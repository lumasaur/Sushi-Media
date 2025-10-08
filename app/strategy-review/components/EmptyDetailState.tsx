export function EmptyDetailState() {
  return (
    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
      <div className="text-6xl text-gray-400 mb-4">📄</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Select a Strategy to View Details</h3>
      <p className="text-base text-gray-600 max-w-2xl leading-relaxed">
        Click any strategy card above to load a comprehensive business case analysis, including executive
        summary, implementation roadmap, success metrics, and competitive context.
      </p>
    </div>
  );
}
