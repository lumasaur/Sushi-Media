import { ValueLevel, VALUE_SCORE } from '@/lib/types';

interface ValueStarsProps {
  level: ValueLevel;
}

export function ValueStars({ level }: ValueStarsProps) {
  const score = VALUE_SCORE[level];

  return (
    <div className="flex items-center gap-0.5" aria-label={`Value level: ${level}`}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-lg ${
            index < score ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
