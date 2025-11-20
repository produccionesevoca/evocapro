import React, { useEffect } from 'react';
import { SEO } from '../components/SEO.tsx';

interface TermsPageProps {
  onNavigateBack: () => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigateBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-gray-300 font-sans pt-24 pb-16">
      <SEO 
        title="Términos y Condiciones" 
        description="Condiciones de uso de los servicios de Evoca PRO." 
      />

      {/* Header / Nav */}
      <div className="fixed top-0 left-0 right-0 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2" onClick={onNavigateBack}>
                 <img src="/assets/logos/evocapro-logo-orange.png" alt="Logo" className="w-32 cursor-pointer" />
            </div>
            <button onClick={onNavigateBack} className="text-brand-orange font-bold hover:text-white transition-colors">
                Volver
            </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Términos y Condiciones</h1>
        <p className="text-sm text-gray-500 mb-12">Vigente desde: Noviembre 2025</p>

        <div className="space-y-8 text-lg leading-relaxed">
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
                <p>
                    Al acceder y utilizar los servicios de <strong>Evoca PRO</strong> o navegar por este sitio web, usted acepta cumplir y estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descripción del Servicio</h2>
                <p>
                    Evoca PRO es una agencia especializada en Marketing Digital y Producción Audiovisual. Los detalles específicos, alcances, plazos y costos de cada proyecto se definirán en una propuesta comercial o contrato de prestación de servicios independiente para cada cliente.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
                <p>
                    Todo el contenido presente en este sitio web (logos, textos, imágenes, videos, diseño gráfico y código fuente) es propiedad exclusiva de Evoca PRO o cuenta con las licencias de uso correspondientes.
                </p>
                <p className="mt-4">
                    <strong>Entregables al Cliente:</strong> La propiedad intelectual de los productos finales (videos, campañas, diseños) será transferida al cliente únicamente una vez se haya completado el pago total de los servicios contratados, salvo que se estipule lo contrario en el contrato específico.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitación de Responsabilidad</h2>
                <p>
                    Evoca PRO no se hace responsable por daños indirectos, incidentales o consecuentes derivados del uso de este sitio web. En proyectos de Marketing Digital (ROI, ROAS), la agencia se compromete a implementar las mejores prácticas profesionales, pero no garantiza resultados de ventas específicos, ya que estos dependen de múltiples factores externos al control de la agencia.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Ley Aplicable y Jurisdicción</h2>
                <p>
                    Estos términos se rigen por las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales de la ciudad de Cali
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};