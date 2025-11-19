import React from 'react';

interface SplitSectionProps {
  logoText: string;
  title: string;
  description: string;
  buttonText: string;
  background: React.ReactNode;
  onClick: () => void;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
  logoText,
  title,
  description,
  buttonText,
  background,
  onClick,
}) => {
  return (
    <section 
      className={`relative w-full h-full overflow-hidden group`}
    >
      {background}
      <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors duration-500"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center transition-transform duration-500 ease-in-out hover:scale-105">
        <div className="max-w-md">
          <h3 className="text-xl font-bold tracking-widest text-white uppercase opacity-90 font-sans">{logoText}</h3>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg font-serif">
            {title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-100 font-normal drop-shadow-md font-sans">
            {description}
          </p>
          <button 
            onClick={onClick}
            className="mt-10 px-8 py-3 bg-brand-orange text-white font-bold rounded-md transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-lg hover:shadow-brand-orange/40 transform hover:-translate-y-1 font-sans"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};