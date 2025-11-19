import React from 'react';
import { SplitSection } from '../components/SplitSection.tsx';
import { SEO } from '..//components/SEO.tsx'; 

// Background Components
const MarketingBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg"
      alt="Red de datos abstracta marketing"
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
    />
    <div className="absolute inset-0 bg-brand-dark opacity-80"></div>
  </div>
);

const FilmBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <video
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
      src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-brand-dark opacity-80"></div>
  </div>
);

interface HomePageProps {
    onNavigate: (page: 'marketing' | 'film') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evoca PRO",
    "url": "https://evocapro.com",
    "logo": "https://evocapro.com/assets/logos/evocapro-logo-orange.png",
    "description": "Agencia especializada en Marketing Digital y Producción Audiovisual.",
    "sameAs": [
      "https://www.linkedin.com/company/evocapro",
      "https://www.instagram.com/evocapro"
    ]
  };

  const marketingData = {
    logoText: "Evoca PRO",
    title: "Marketing Digital & E-commerce",
    description: "Impulsamos tu crecimiento con estrategias de marketing y analítica web basadas en datos. Convertimos clics en clientes.",
    buttonText: "Descubrir Estrategias",
    background: <MarketingBackground />,
    onClick: () => onNavigate('marketing'),
  };

  const filmData = {
    logoText: "Evoca PRO",
    title: "Cine & Televisión",
    description: "Creamos contenido audiovisual de alto impacto que cuenta tu historia. Producción de calidad cinematográfica.",
    buttonText: "Explorar Proyectos",
    background: <FilmBackground />,
    onClick: () => onNavigate('film'),
  };

  return (
    <>
      <SEO 
        title="Agencia Creativa y Estratégica"
        description="Evoca PRO une lo mejor de dos mundos: Marketing Digital basado en datos y Producción Audiovisual Cinematográfica."
        keywords="marketing digital, producción audiovisual, analítica web, video corporativo, agencia creativa"
        schema={organizationSchema}
      />
      <main className="flex flex-col-reverse md:flex-row w-full h-screen min-h-[600px] text-white">
          <div className="w-full md:w-1/2 h-full">
            <SplitSection {...marketingData} />
          </div>
          <div className="w-full md:w-1/2 h-full">
            <SplitSection {...filmData} />
          </div>
      </main>
    </>
  );
};