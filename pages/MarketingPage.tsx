import React, { useState, useEffect } from 'react';
import { MarketingModal } from '../components/modals/MarketingModal.tsx';
import { ThemeToggle } from '../components/ui/ThemeToggle.tsx';
import { SEO } from '../components/SEO.tsx';
// Import Shared Components
import { ValueProp } from '../components/ui/ValueProp.tsx';
import { ServiceCard } from '../components/ui/ServiceCard.tsx';

// Local Component (Specific to Marketing Page)
const StepCard: React.FC<{ number: string; title: string; description: string; cardClasses: string; titleClasses: string; descriptionClasses: string; isLast?: boolean }> = ({ number, title, description, cardClasses, titleClasses, descriptionClasses, isLast }) => (
    <div className="flex flex-col items-center text-center relative z-10 flex-1 px-4">
        <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-brand-orange/30 font-serif">
            {number}
        </div>
        {!isLast && (
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-gray-300/20 -z-10"></div>
        )}
        <h3 className={`text-xl font-bold ${titleClasses} mb-2 font-serif`}>{title}</h3>
        <p className={`text-sm ${descriptionClasses} font-sans`}>{description}</p>
    </div>
);

interface MarketingPageProps {
  onNavigateBack: () => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ onNavigateBack }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isDark = theme === 'dark';

    const marketingSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "Evoca PRO - Marketing Digital",
                "description": "Agencia de marketing digital especializada en analítica web, estrategia e-commerce, CRO y publicidad pagada (Ads).",
                "url": "https://evocapro.com/marketing",
                "priceRange": "$$$"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "¿Cuánto tiempo se tarda en ver resultados en marketing digital?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Aunque los resultados iniciales pueden verse en el primer mes, las estrategias robustas de SEO y Ads suelen mostrar un impacto significativo y constante entre 3 y 6 meses."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿Es necesario tener un equipo interno de marketing?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No es indispensable. Evoca PRO funciona como una extensión de tu equipo, encargándose de la parte técnica, estratégica y operativa."
                        }
                    }
                ]
            }
        ]
    };

    const themeClasses = {
        bg: isDark ? 'bg-brand-dark' : 'bg-brand-light',
        bgAlt: isDark ? 'bg-brand-medium/30' : 'bg-white', 
        textPrimary: isDark ? 'text-white' : 'text-brand-dark',
        textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
        textTertiary: isDark ? 'text-gray-400' : 'text-gray-500',
        card: isDark ? 'bg-brand-medium border border-white/5' : 'bg-white border border-gray-100',
        header: isDark ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-brand-light/90 backdrop-blur-md border-b border-gray-200',
        buttonHover: isDark ? 'hover:text-white' : 'hover:text-brand-dark',
        quoteBg: isDark ? 'bg-brand-medium' : 'bg-brand-light',
    };

    return (
        <div className={`relative min-h-screen w-full ${themeClasses.bg} overflow-hidden transition-colors duration-500 font-sans`}>
        
        <SEO 
            title="Agencia de Marketing Digital y Analítica Web"
            description="Especialistas en Google Analytics 4 (GA4), Paid Media, CRO y Estrategias de E-commerce. Toma decisiones basadas en datos, no en intuición."
            keywords="marketing digital, analítica web, ga4, google ads, estrategia ecommerce, cro, auditoría seo"
            schema={marketingSchema}
        />

        <MarketingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={isDark} />

        {/* Navigation */}
        <header className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.header}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateBack}>
                    <img className="w-[150px]" src="/assets/logos/evocapro-logo-orange.png" alt="Evoca PRO Logo" />
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={onNavigateBack} className={`font-semibold text-brand-orange ${themeClasses.buttonHover} transition-colors flex items-center gap-2 font-sans`}>
                        <span>Volver</span>
                    </button>
                </div>
            </div>
        </header>
        
        <main className="w-full pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="Dashboard de Analítica Web" 
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-brand-dark via-brand-dark/90 to-brand-medium/80' : 'from-brand-light via-brand-light/90 to-brand-light/50'}`}></div>
                </div>

                <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left animate-fadeInUp">
                        <div className="inline-block px-4 py-1 mb-4 border border-brand-orange text-brand-orange rounded-full text-sm font-bold uppercase tracking-wider font-sans">
                            Marketing Digital
                        </div>
                        <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${themeClasses.textPrimary} mb-6 font-serif`}>
                            Analítica y Estrategia para <span className="text-brand-orange italic">Resultados Reales</span>
                        </h1>
                        <p className={`text-lg md:text-xl ${themeClasses.textSecondary} mb-8 leading-relaxed max-w-lg font-sans`}>
                            Transformamos datos en decisiones. Integramos tecnología y creatividad para maximizar tu ROAS y escalar tu e-commerce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-brand-orange text-white font-bold rounded-lg shadow-lg shadow-brand-orange/30 hover:bg-orange-600 hover:scale-105 transition-all duration-300 font-sans"
                            >
                                Solicitar Diagnóstico
                            </button>
                            <button className={`px-8 py-4 border ${isDark ? 'border-white/30 text-white hover:bg-white/10' : 'border-brand-dark/30 text-brand-dark hover:bg-brand-dark/5'} font-semibold rounded-lg transition-all duration-300 font-sans`}>
                                Ver Casos de Éxito
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block animate-slideInRight">
                        <div className={`p-6 rounded-2xl border ${isDark ? 'bg-brand-medium/50 border-white/10 backdrop-blur-sm' : 'bg-white/80 border-gray-200 shadow-xl'} max-w-md ml-auto transform rotate-2 hover:rotate-0 transition-transform duration-500`}>
                           <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className={`text-sm ${themeClasses.textTertiary} font-sans`}>Ingresos Totales</p>
                                    <p className={`text-3xl font-bold ${themeClasses.textPrimary} font-serif`}>$124,500</p>
                                </div>
                                <div className="text-green-500 flex items-center bg-green-500/10 px-2 py-1 rounded text-sm font-bold font-sans">
                                    +24.5%
                                </div>
                           </div>
                           <div className="h-32 flex items-end gap-2">
                                {[40, 65, 45, 70, 85, 60, 90].map((h, i) => (
                                    <div key={i} className="w-full bg-brand-orange rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                ))}
                           </div>
                           <div className="mt-4 flex justify-between text-xs text-gray-400 font-sans">
                                <span>Lun</span><span>Mar</span><span>Mie</span><span>Jue</span><span>Vie</span><span>Sab</span><span>Dom</span>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`${isDark ? 'bg-brand-medium' : 'bg-white shadow-sm'} py-8 border-y ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
                    <ValueProp textColorClass={themeClasses.textSecondary}>Estrategias Data-Driven</ValueProp>
                    <ValueProp textColorClass={themeClasses.textSecondary}>Certificados en Google Analytics 4</ValueProp>
                    <ValueProp textColorClass={themeClasses.textSecondary}>Optimización de Conversión (CRO)</ValueProp>
                </div>
            </div>

            <section className={`py-20 ${themeClasses.bg}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-2 md:order-1 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange rounded-full opacity-20 blur-2xl"></div>
                            <img 
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                alt="Equipo de marketing digital" 
                                className="rounded-lg shadow-2xl relative z-10"
                            />
                            <div className={`absolute -bottom-6 -right-6 p-6 rounded-lg shadow-xl ${themeClasses.card} max-w-xs hidden lg:block`}>
                                <p className={`text-4xl font-bold text-brand-orange mb-1 font-serif`}>+300%</p>
                                <p className={`text-sm ${themeClasses.textSecondary} font-sans`}>Incremento promedio en ROAS para nuestros clientes de e-commerce.</p>
                            </div>
                         </div>
                         <div className="order-1 md:order-2">
                            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${themeClasses.textPrimary} font-serif`}>No solo lanzamos campañas, construimos ecosistemas.</h2>
                            <p className={`text-lg ${themeClasses.textSecondary} mb-6 font-sans`}>
                                En Evoca Pro, el marketing digital no es magia, es ingeniería. Creamos un sistema donde cada anuncio, landing page y correo electrónico trabaja en sincronía.
                            </p>
                            <ul className="space-y-4 mb-8 font-sans">
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 mt-1">✓</span>
                                    <span className={themeClasses.textSecondary}>Auditoría 360° de tu presencia digital actual.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 mt-1">✓</span>
                                    <span className={themeClasses.textSecondary}>Dashboards personalizados para control total.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 mt-1">✓</span>
                                    <span className={themeClasses.textSecondary}>Escalabilidad para mercados nacionales e internacionales.</span>
                                </li>
                            </ul>
                         </div>
                    </div>
                </div>
            </section>

            <section className={`py-20 ${themeClasses.bgAlt}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className={`text-3xl md:text-5xl font-bold ${themeClasses.textPrimary} mb-4 font-serif`}>Soluciones Integrales</h2>
                        <p className={`${themeClasses.textSecondary} font-sans`}>Cubrimos cada etapa del funnel de ventas con servicios especializados.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            title="Estrategia E-commerce"
                            description="Auditoría de UX/UI, recuperación de carritos abandonados y estrategias de fidelización (LTV)."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Paid Media (Ads)"
                            description="Gestión avanzada de Google Ads, Meta Ads y LinkedIn Ads con enfoque en CPA y ROAS."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Analítica Web (GA4)"
                            description="Implementación técnica, configuración de eventos de conversión y Server-Side Tracking."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="CRO & Experimentación"
                            description="A/B testing continuo en landing pages para mejorar la tasa de conversión sin aumentar el tráfico."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Desarrollo Web"
                            description="Sitios corporativos y tiendas WooCommerce optimizados para SEO y velocidad de carga."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="CRM & Automation"
                            description="Email marketing automatizado y segmentación de base de datos para nutrir leads."
                            borderClass="border-t-4"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                    </div>
                </div>
            </section>
            
            <section className={`py-20 ${themeClasses.bg}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <h2 className={`text-3xl md:text-5xl font-bold text-center mb-16 ${themeClasses.textPrimary} font-serif`}>Nuestra Metodología</h2>
                    
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start relative">
                        <StepCard 
                            number="1" 
                            title="Diagnóstico" 
                            description="Auditoría profunda de activos digitales y competencia."
                            cardClasses="" 
                            titleClasses={themeClasses.textPrimary} 
                            descriptionClasses={themeClasses.textSecondary} 
                        />
                        <StepCard 
                            number="2" 
                            title="Estrategia" 
                            description="Definición de canales, budget y KPIs principales."
                            cardClasses="" 
                            titleClasses={themeClasses.textPrimary} 
                            descriptionClasses={themeClasses.textSecondary} 
                        />
                        <StepCard 
                            number="3" 
                            title="Ejecución" 
                            description="Lanzamiento de campañas y optimizaciones técnicas."
                            cardClasses="" 
                            titleClasses={themeClasses.textPrimary} 
                            descriptionClasses={themeClasses.textSecondary} 
                        />
                        <StepCard 
                            number="4" 
                            title="Optimización" 
                            description="Mejora continua basada en datos de rendimiento."
                            cardClasses="" 
                            titleClasses={themeClasses.textPrimary} 
                            descriptionClasses={themeClasses.textSecondary}
                            isLast={true}
                        />
                    </div>
                </div>
            </section>

            <section className={`py-20 ${themeClasses.bgAlt}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className={`text-3xl font-bold mb-8 ${themeClasses.textPrimary} font-serif`}>Preguntas Frecuentes</h2>
                        <div className="space-y-4">
                            <details className={`${themeClasses.card} p-5 rounded-lg cursor-pointer group`}>
                                <summary className={`font-semibold text-lg list-none flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                                    ¿Cuánto tiempo se tarda en ver resultados?
                                    <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>Aunque los resultados iniciales pueden verse en el primer mes, las estrategias robustas suelen mostrar un impacto significativo entre 3 y 6 meses.</p>
                            </details>
                            <details className={`${themeClasses.card} p-5 rounded-lg cursor-pointer group`}>
                                <summary className={`font-semibold text-lg list-none flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                                    ¿Es necesario tener un equipo interno?
                                    <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>No es indispensable. Funcionamos como una extensión de tu equipo, encargándonos de la parte técnica y estratégica.</p>
                            </details>
                            <details className={`${themeClasses.card} p-5 rounded-lg cursor-pointer group`}>
                                <summary className={`font-semibold text-lg list-none flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                                    ¿Trabajan campañas internacionales?
                                    <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>Sí. Diseñamos y gestionamos campañas geolocalizadas tanto a nivel nacional como en mercados internacionales.</p>
                            </details>
                        </div>
                    </div>
                    
                    <div className={`p-10 rounded-2xl ${isDark ? 'bg-gradient-to-br from-brand-medium to-brand-dark border border-white/5' : 'bg-brand-light border border-gray-200'} text-center flex flex-col justify-center items-center`}>
                        <h3 className={`text-3xl font-bold mb-4 ${themeClasses.textPrimary} font-serif`}>¿Listo para escalar?</h3>
                        <p className={`text-lg mb-8 ${themeClasses.textSecondary} font-sans`}>Agenda una llamada de 30 minutos para revisar tu caso sin compromiso.</p>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="w-full max-w-xs px-8 py-4 bg-brand-orange text-white font-bold text-lg rounded-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-brand-orange/40 transform hover:-translate-y-1 font-sans"
                        >
                            Solicitar Diagnóstico Gratuito
                        </button>
                        <p className={`mt-4 text-sm ${themeClasses.textTertiary} font-sans`}>Cupos limitados por mes.</p>
                    </div>
                </div>
            </section>

        </main>
        </div>
    );
};