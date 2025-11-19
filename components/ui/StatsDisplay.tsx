import React from 'react';

interface StatsDisplayProps {
    label: string;
    value: string;
    textColorClass: string;
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ label, value, textColorClass }) => (
  <div className="flex flex-col items-center justify-center p-4 animate-fadeInUp">
    <span className="text-3xl md:text-5xl font-bold text-brand-orange mb-2 font-serif">{value}</span>
    <span className={`text-sm uppercase tracking-widest ${textColorClass} font-sans`}>{label}</span>
  </div>
);