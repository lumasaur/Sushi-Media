interface PhaseCardProps {
  phaseNumber: 1 | 2 | 3;
  name: string;
  duration: string;
  strategyCount: number;
  investment: string;
  expectedRevenue: string;
  roi: string;
  strategyExamples: string[];
  keyOutcomes: string[];
}

export function PhaseCard({
  phaseNumber,
  name,
  duration,
  strategyCount,
  investment,
  expectedRevenue,
  roi,
  strategyExamples,
  keyOutcomes
}: PhaseCardProps) {
  const colorThemes = {
    1: {
      bg: 'bg-green-900',
      border: 'border-green-500',
      badge: 'bg-green-500',
      text: 'text-green-300'
    },
    2: {
      bg: 'bg-amber-900',
      border: 'border-amber-500',
      badge: 'bg-amber-500',
      text: 'text-amber-300'
    },
    3: {
      bg: 'bg-blue-900',
      border: 'border-blue-500',
      badge: 'bg-blue-500',
      text: 'text-blue-300'
    }
  };

  const theme = colorThemes[phaseNumber];

  return (
    <div className={`${theme.bg} ${theme.border} border-2 rounded-lg p-6 h-full flex flex-col`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className={`${theme.badge} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2`}>
            Phase {phaseNumber}
          </div>
          <h3 className={`${theme.text} text-xl font-bold mb-1`}>{name}</h3>
          <p className="text-sm text-gray-300">{duration}</p>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mb-6 space-y-2 text-gray-300">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Strategies:</span>
          <span className="font-semibold">{strategyCount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Investment:</span>
          <span className="font-semibold">{investment}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Expected Revenue:</span>
          <span className="font-semibold">{expectedRevenue}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">ROI:</span>
          <span className={`${theme.text} font-semibold`}>{roi}</span>
        </div>
      </div>

      {/* Strategy Examples */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2 text-gray-200">Strategy Examples:</h4>
        <ul className="text-xs space-y-1 text-gray-300">
          {strategyExamples.slice(0, 5).map((strategy, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">•</span>
              <span className="flex-1">{strategy}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Outcomes */}
      <div className="mt-auto">
        <h4 className="text-sm font-semibold mb-2 text-gray-200">Key Outcomes:</h4>
        <ul className="text-xs space-y-1 text-gray-300">
          {keyOutcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">✓</span>
              <span className="flex-1">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
