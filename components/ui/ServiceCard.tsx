import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    cardClasses: string;      // Handles background colors
    titleClasses: string;     // Handles title text color
    textClasses: string;      // Handles description text color
    borderClass?: string;     // New: Handles border-l-4 vs border-t-4 differences
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
    title, 
    description, 
    icon, 
    cardClasses, 
    titleClasses, 
    textClasses,
    borderClass = "border-t-4" // Default to top border (Marketing style)
}) => (
    <div className={`${cardClasses} p-8 rounded-xl text-left shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${borderClass} border-transparent hover:border-brand-orange group h-full`}>
        <div className="mb-6 text-brand-orange transform group-hover:scale-110 transition-transform duration-300 bg-brand-orange/10 w-14 h-14 rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <h3 className={`text-xl font-bold ${titleClasses} mb-3 font-serif`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${textClasses} font-sans`}>{description}</p>
    </div>
);