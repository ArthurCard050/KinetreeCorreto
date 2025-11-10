import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { value: 20 },
  { value: 40 },
  { value: 35 },
  { value: 60 },
  { value: 55 },
  { value: 85 },
  { value: 80 },
  { value: 100 },
];

export default function ChartBackground3D() {
  return (
    <div className="absolute inset-0 opacity-25 pointer-events-none">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <Area
            type="linear"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
            fill="url(#colorGradient)"
            filter="url(#glow)"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
