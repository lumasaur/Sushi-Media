interface StatisticCardProps {
  label: string;
  value: string;
  icon: string;
  description: string;
  color: 'blue' | 'green' | 'amber' | 'purple';
  emphasis?: boolean;
}

export function StatisticCard({
  label,
  value,
  icon,
  description,
  color,
  emphasis = false
}: StatisticCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    green: 'bg-green-50 border-green-500 text-green-900',
    amber: 'bg-amber-50 border-amber-500 text-amber-900',
    purple: 'bg-purple-50 border-purple-200 text-purple-900',
  };

  const emphasisClass = emphasis ? 'border-2 shadow-md' : 'border';

  return (
    <div className={`${colorClasses[color]} ${emphasisClass} rounded-lg p-6 transition-shadow hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl" aria-hidden="true">{icon}</span>
        <span className="text-4xl font-bold">{value}</span>
      </div>
      <h3 className="text-sm font-semibold mb-2">{label}</h3>
      <p className="text-xs opacity-80">{description}</p>
    </div>
  );
}
