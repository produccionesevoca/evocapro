import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC<{ theme: 'dark' | 'light'; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-brand-orange hover:bg-brand-medium/20 transition-colors"
            aria-label="Cambiar tema"
        >
            {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )}
        </button>
    );
};

const FeatureIcon: React.FC<{ children: React.ReactNode, textColorClass: string }> = ({ children, textColorClass }) => (
  <div className="flex items-start md:items-center text-left animate-fadeInUp">
    <div className="flex-shrink-0 p-2 rounded-full bg-brand-orange/10 mr-3">
        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <span className={`${textColorClass} font-medium font-sans`}>{children}</span>
  </div>
);

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; cardClasses: string; titleClasses: string; textClasses: string }> = ({ title, description, icon, cardClasses, titleClasses, textClasses }) => (
    <div className={`${cardClasses} p-6 rounded-xl text-left shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-transparent hover:border-brand-orange group h-full`}>
        <div className="mb-4 text-brand-orange transform group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className={`text-xl font-bold ${titleClasses} mb-2 font-serif`}>{title}</h3>
        <p className={`text-sm ${textClasses} font-sans`}>{description}</p>
    </div>
);

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

interface MarketingModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
}

const MarketingModal: React.FC<MarketingModalProps> = ({ isOpen, onClose, isDark }) => {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        service: 'Estrategia Integral',
        message: ''
    });

    useEffect(() => {
        if (isOpen) setStep('form');
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setStep('success'), 500);
    };

    const inputClasses = `w-full p-3 rounded-lg border ${isDark 
        ? 'bg-brand-medium/50 border-white/10 text-white placeholder-gray-400 focus:border-brand-orange' 
        : 'bg-gray-50 border-gray-300 text-brand-dark placeholder-gray-500 focus:border-brand-orange'} outline-none transition-colors font-sans`;

    const labelClasses = `block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            
            <div className={`relative w-full max-w-lg transform transition-all ${isDark ? 'bg-brand-dark border border-white/10' : 'bg-white'} rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp`}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-brand-orange transition-colors z-10">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="p-8">
                    {step === 'form' ? (
                        <>
                            <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-brand-dark'} font-serif`}>Diagnóstico Gratuito</h2>
                            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm font-sans`}>Completa tus datos y nuestros expertos analizarán tu presencia digital.</p>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className={labelClasses}>Nombre Completo</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className={inputClasses} 
                                        placeholder="Ej. Juan Pérez"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email Corporativo</label>
                                    <input 
                                        required 
                                        type="email" 
                                        className={inputClasses} 
                                        placeholder="juan@empresa.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Sitio Web</label>
                                    <input 
                                        required 
                                        type="url" 
                                        className={inputClasses} 
                                        placeholder="https://www.tuempresa.com"
                                        value={formData.website}
                                        onChange={e => setFormData({...formData, website: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Servicio de Interés</label>
                                    <select 
                                        className={inputClasses}
                                        value={formData.service}
                                        onChange={e => setFormData({...formData, service: e.target.value})}
                                    >
                                        <option>Estrategia Integral</option>
                                        <option>Paid Media (Ads)</option>
                                        <option>Analítica Web (GA4)</option>
                                        <option>CRO & UX</option>
                                        <option>E-commerce Dev</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Mensaje Opcional</label>
                                    <textarea 
                                        rows={3} 
                                        className={inputClasses} 
                                        placeholder="Cuéntanos brevemente tus objetivos..."
                                        value={formData.message}
                                        onChange={e => setFormData({...formData, message: e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-brand-orange text-white font-bold rounded-lg shadow-lg shadow-brand-orange/20 hover:bg-orange-600 hover:shadow-brand-orange/40 transition-all duration-300 mt-4 font-sans">
                                    Solicitar Análisis
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-10">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-fadeInUp">
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-brand-dark'} font-serif`}>¡Solicitud Recibida!</h2>
                            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} font-sans`}>
                                Gracias <strong>{formData.name}</strong>. Hemos recibido tu información correctamente.
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-8 font-sans max-w-xs mx-auto`}>
                                Nuestro equipo de estrategia revisará tu sitio web y te contactará en las próximas 24 horas con un plan inicial.
                            </p>
                            <button onClick={onClose} className="px-8 py-3 border-2 border-brand-orange text-brand-orange font-bold rounded-lg hover:bg-brand-orange hover:text-white transition-all duration-300 font-sans">
                                Volver al sitio
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

interface MarketingPageProps {
  onNavigateBack: () => void;
}

export const MarketingPage: React.FC<MarketingPageProps> = ({ onNavigateBack }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isDark = theme === 'dark';

    const themeClasses = {
        bg: isDark ? 'bg-brand-dark' : 'bg-brand-light',
        bgAlt: isDark ? 'bg-brand-medium/30' : 'bg-white', // Alternating section BG
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
        
        <MarketingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={isDark} />

        {/* Navigation */}
        <header className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.header}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateBack}>
                    <span className="text-brand-orange text-2xl font-bold font-sans">Evoca</span>
                    <span className={`text-xl font-light tracking-widest uppercase ${themeClasses.textPrimary} font-sans`}>PRO</span>
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
                        alt="Analytics Dashboard" 
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
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
                        {/* Abstract decorative element simulating a dashboard card */}
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

            {/* Value Proposition Strip */}
            <div className={`${isDark ? 'bg-brand-medium' : 'bg-white shadow-sm'} py-8 border-y ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
                    <FeatureIcon textColorClass={themeClasses.textSecondary}>Estrategias Data-Driven</FeatureIcon>
                    <FeatureIcon textColorClass={themeClasses.textSecondary}>Certificados en Google Analytics 4</FeatureIcon>
                    <FeatureIcon textColorClass={themeClasses.textSecondary}>Optimización de Conversión (CRO)</FeatureIcon>
                </div>
            </div>

            {/* Intro / "Why Us" Section - Zig Zag */}
            <section className={`py-20 ${themeClasses.bg}`}>
                <div className="w-full max-w-[1200px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="order-2 md:order-1 relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange rounded-full opacity-20 blur-2xl"></div>
                            <img 
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                alt="Team working on strategy" 
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

            {/* Services Section Grid */}
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
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Paid Media (Ads)"
                            description="Gestión avanzada de Google Ads, Meta Ads y LinkedIn Ads con enfoque en CPA y ROAS."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Analítica Web (GA4)"
                            description="Implementación técnica, configuración de eventos de conversión y Server-Side Tracking."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="CRO & Experimentación"
                            description="A/B testing continuo en landing pages para mejorar la tasa de conversión sin aumentar el tráfico."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="Desarrollo Web"
                            description="Sitios corporativos y tiendas WooCommerce optimizados para SEO y velocidad de carga."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                        <ServiceCard 
                            title="CRM & Automation"
                            description="Email marketing automatizado y segmentación de base de datos para nutrir leads."
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            cardClasses={themeClasses.card}
                            titleClasses={themeClasses.textPrimary}
                            textClasses={themeClasses.textSecondary}
                        />
                    </div>
                </div>
            </section>
            
            {/* Methodology / Process Section */}
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

            {/* FAQ & Final CTA Split */}
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