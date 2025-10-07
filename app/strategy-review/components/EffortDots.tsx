import { EffortLevel, EFFORT_SCORE } from '@/lib/types';

interface EffortDotsProps {
  level: EffortLevel;
}

export function EffortDots({ level }: EffortDotsProps) {
  const score = EFFORT_SCORE[level];

  return (
    <div className="flex items-center gap-1" aria-label={`Effort level: ${level}`}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            index < score ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}
