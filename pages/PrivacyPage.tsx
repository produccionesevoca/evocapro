import React, { useEffect } from 'react';
import { SEO } from '../components/SEO.tsx';

interface PrivacyPageProps {
  onNavigateBack: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigateBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-gray-300 font-sans pt-24 pb-16">
      <SEO 
        title="Política de Privacidad" 
        description="Política de Tratamiento de Datos Personales de Evoca PRO." 
      />

      {/* Header / Nav */}
      <div className="fixed top-0 left-0 right-0 bg-brand-dark/90 backdrop-blur-md border-b border-white/5 z-50 px-6 py-4">
        <div className="max-w-[800px] mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2" onClick={onNavigateBack}>
                 <img src="/assets/logos/evocapro-logo-orange.png" alt="Logo" className="w-32 cursor-pointer" />
            </div>
            <button onClick={onNavigateBack} className="text-brand-orange font-bold hover:text-white transition-colors">
                Volver
            </button>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Política de Privacidad</h1>
        <p className="text-sm text-gray-500 mb-12">Última actualización: Noviembre 2025</p>

        <div className="space-y-8 text-lg leading-relaxed">
            <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Responsable del Tratamiento</h2>
                <p>
                    <strong>Evoca PRO</strong> (en adelante, "La Agencia"), con domicilio principal en Cali, Colombia, es la responsable del tratamiento de los datos personales recolectados a través del sitio web <em>evocapro.com</em>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Marco Legal (Habeas Data)</h2>
                <p>
                    La presente política se rige por lo dispuesto en la Constitución Política de Colombia, la <strong>Ley 1581 de 2012</strong>, el Decreto Reglamentario 1377 de 2013 y demás normas concordantes que regulan la protección de datos personales.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Datos que Recolectamos</h2>
                <p>
                    Podemos recolectar la siguiente información cuando usted interactúa con nuestros formularios o servicios:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Datos de identificación: Nombre completo, cargo, empresa.</li>
                    <li>Datos de contacto: Correo electrónico corporativo o personal, número de teléfono.</li>
                    <li>Datos de navegación: Dirección IP, cookies y métricas de uso del sitio web.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Finalidad del Tratamiento</h2>
                <p>Sus datos serán utilizados exclusivamente para:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Responder a sus solicitudes de cotización o diagnóstico.</li>
                    <li>Enviar propuestas comerciales relacionadas con Marketing Digital y Producción Audiovisual.</li>
                    <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
                    <li>Cumplir con obligaciones legales y contractuales.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Derechos del Titular</h2>
                <p>
                    Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento, enviando una solicitud a <strong>evocapro@evocapro.com</strong>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Uso de Cookies</h2>
                <p>
                    Este sitio web utiliza cookies propias y de terceros (como Google Analytics) para analizar el tráfico y mejorar la funcionalidad. Al navegar en nuestro sitio, usted acepta el uso de estas tecnologías.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contacto</h2>
                <p>
                    Para cualquier duda sobre esta política, puede contactarnos en:<br/>
                    Email: <a href="mailto:evocapro@evocapro.com" className="text-brand-orange hover:text-white">evocapro@evocapro.com</a><br/>
                    Teléfono: +57 300 123 4567<br/>
                    Bogotá, Colombia.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};