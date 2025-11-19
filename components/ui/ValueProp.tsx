import React from 'react';

interface ValuePropProps {
    children: React.ReactNode;
    textColorClass: string;
}

export const ValueProp: React.FC<ValuePropProps> = ({ children, textColorClass }) => (
  <div className="flex items-start md:items-center text-left animate-fadeInUp">
    <div className="flex-shrink-0 p-2 rounded-full bg-brand-orange/10 mr-3">
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
    </div>
    <span className={`${textColorClass} font-medium font-sans`}>{children}</span>
  </div>
);