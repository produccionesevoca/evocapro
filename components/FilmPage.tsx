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

const FeatureIcon: React.FC<{ label: string, value: string, textColorClass: string }> = ({ label, value, textColorClass }) => (
  <div className="flex flex-col items-center justify-center p-4 animate-fadeInUp">
    <span className="text-3xl md:text-5xl font-bold text-brand-orange mb-2 font-serif">{value}</span>
    <span className={`text-sm uppercase tracking-widest ${textColorClass} font-sans`}>{label}</span>
  </div>
);

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; cardClasses: string; titleClasses: string; textClasses: string }> = ({ title, description, icon, cardClasses, titleClasses, textClasses }) => (
    <div className={`${cardClasses} p-8 rounded-xl text-left shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-transparent hover:border-brand-orange group h-full`}>
        <div className="mb-6 text-brand-orange transform group-hover:scale-110 transition-transform duration-300 bg-brand-orange/10 w-14 h-14 rounded-lg flex items-center justify-center">
            {icon}
        </div>
        <h3 className={`text-xl font-bold ${titleClasses} mb-3 font-serif`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${textClasses} font-sans`}>{description}</p>
    </div>
);

const StepCard: React.FC<{ number: string; title: string; description: string; titleClasses: string; descriptionClasses: string; }> = ({ number, title, description, titleClasses, descriptionClasses }) => (
    <div className="flex flex-col items-start relative pl-8 pb-12 border-l-2 border-brand-orange/30 last:border-0 last:pb-0">
        <div className="absolute -left-[17px] top-0 w-9 h-9 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold shadow-lg shadow-brand-orange/40 font-serif">
            {number}
        </div>
        <h3 className={`text-xl font-bold ${titleClasses} mb-2 mt-1 font-serif`}>{title}</h3>
        <p className={`text-sm ${descriptionClasses} font-sans`}>{description}</p>
    </div>
);

interface FilmModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
}

const FilmModal: React.FC<FilmModalProps> = ({ isOpen, onClose, isDark }) => {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Spot Publicitario',
        budget: '5k - 10k USD',
        details: ''
    });

    useEffect(() => {
        if (isOpen) setStep('form');
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setStep('success'), 500);
    };

    const inputClasses = `w-full p-3 rounded-lg border ${isDark 
        ? 'bg-brand-medium/50 border-white/10 text-white placeholder-gray-400 focus:border-brand-orange' 
        : 'bg-gray-50 border-gray-300 text-brand-dark placeholder-gray-500 focus:border-brand-orange'} outline-none transition-colors font-sans`;

    const labelClasses = `block mb-1 text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            
            <div className={`relative w-full max-w-lg transform transition-all ${isDark ? 'bg-brand-dark border border-white/10' : 'bg-white'} rounded-xl shadow-2xl overflow-hidden animate-fadeInUp`}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-brand-orange transition-colors z-10">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="p-8">
                    {step === 'form' ? (
                        <>
                            <div className="mb-6">
                                <span className="text-brand-orange font-bold uppercase tracking-widest text-xs font-sans">Comenzar Proyecto</span>
                                <h2 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-brand-dark'} font-serif`}>Cuéntanos tu Visión</h2>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className={labelClasses}>Nombre / Empresa</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className={inputClasses} 
                                        placeholder="Tu nombre o el de tu marca"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email de Contacto</label>
                                    <input 
                                        required 
                                        type="email" 
                                        className={inputClasses} 
                                        placeholder="contacto@marca.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClasses}>Tipo de Proyecto</label>
                                        <select 
                                            className={inputClasses}
                                            value={formData.projectType}
                                            onChange={e => setFormData({...formData, projectType: e.target.value})}
                                        >
                                            <option>Spot Publicitario</option>
                                            <option>Video Corporativo</option>
                                            <option>Cobertura Evento</option>
                                            <option>Documental</option>
                                            <option>Motion Graphics</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Presupuesto Est.</label>
                                        <select 
                                            className={inputClasses}
                                            value={formData.budget}
                                            onChange={e => setFormData({...formData, budget: e.target.value})}
                                        >
                                            <option>1k - 5k USD</option>
                                            <option>5k - 10k USD</option>
                                            <option>10k - 30k USD</option>
                                            <option>+30k USD</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClasses}>Detalles del Proyecto</label>
                                    <textarea 
                                        rows={3} 
                                        className={inputClasses} 
                                        placeholder="Describe brevemente la idea, fecha de rodaje estimada, etc..."
                                        value={formData.details}
                                        onChange={e => setFormData({...formData, details: e.target.value})}
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg shadow-brand-orange/20 hover:bg-orange-600 hover:shadow-brand-orange/40 transition-all duration-300 mt-4 font-sans uppercase tracking-wide">
                                    Enviar Propuesta
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 border-4 border-brand-orange rounded-full flex items-center justify-center mx-auto mb-6 animate-fadeInUp">
                                <svg className="w-10 h-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-brand-dark'} font-serif`}>¡Corte! Todo listo.</h2>
                            <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} font-sans max-w-xs mx-auto`}>
                                Hemos recibido los detalles de tu proyecto. Nuestro productor ejecutivo revisará tu solicitud.
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-8 font-sans`}>
                                Te contactaremos a <strong>{formData.email}</strong> para agendar una llamada de pre-producción.
                            </p>
                            <button onClick={onClose} className="px-8 py-3 bg-white/10 text-brand-orange font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all duration-300 font-sans border border-brand-orange">
                                Volver al Cinema
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


interface FilmPageProps {
  onNavigateBack: () => void;
}

export const FilmPage: React.FC<FilmPageProps> = ({ onNavigateBack }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDark = theme === 'dark';

  const themeClasses = {
    bg: isDark ? 'bg-brand-dark' : 'bg-brand-light',
    bgAlt: isDark ? 'bg-brand-medium/20' : 'bg-white',
    textPrimary: isDark ? 'text-white' : 'text-brand-dark',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textTertiary: isDark ? 'text-gray-400' : 'text-gray-500',
    card: isDark ? 'bg-brand-medium border border-white/5' : 'bg-white border border-gray-100',
    header: isDark ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5' : 'bg-brand-light/90 backdrop-blur-md border-b border-gray-200',
    buttonHover: isDark ? 'hover:text-white' : 'hover:text-brand-dark',
  };

  return (
    <div className={`relative min-h-screen w-full ${themeClasses.bg} transition-colors duration-500 font-sans`}>
      
      <FilmModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDark={isDark} />

      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${themeClasses.header}`}>
        <div className="w-full max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={onNavigateBack}>
                <span className="text-brand-orange text-2xl font-bold font-sans">Evoca</span>
                <span className={`text-xl font-light tracking-widest uppercase ${themeClasses.textPrimary} font-sans`}>Cinema</span>
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
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Film Set Production" 
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-brand-dark/80 via-brand-dark/60 to-brand-dark' : 'from-brand-light/40 via-brand-light/20 to-brand-light'} mix-blend-multiply`}></div>
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/80"></div>
            </div>

            <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-brand-orange/50 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase tracking-widest animate-fadeIn font-sans">
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                        Producción Profesional
                    </div>
                    <h1 className={`text-5xl md:text-8xl font-bold leading-tight ${themeClasses.textPrimary} mb-8 drop-shadow-2xl animate-fadeInUp font-serif`}>
                        Historias que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400 italic">Inspiran</span>
                    </h1>
                    <p className={`text-lg md:text-2xl ${isDark ? 'text-gray-200' : 'text-gray-800 font-medium'} mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md animate-fadeInUp font-sans`}>
                        Calidad cinematográfica para marcas que buscan trascender. Desde comerciales de TV hasta contenido digital de alto impacto.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg shadow-brand-orange/30 hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-sans"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Ver Showreel
                        </button>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className={`px-10 py-4 border ${isDark ? 'border-white/30 text-white hover:bg-white/10' : 'border-brand-dark/30 text-brand-dark hover:bg-brand-dark/5'} font-semibold rounded-full transition-all duration-300 font-sans`}
                        >
                            Cotizar Proyecto
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Stats Bar */}
        <div className={`${isDark ? 'bg-brand-medium border-y border-white/5' : 'bg-white shadow-sm border-y border-gray-100'} py-8`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center md:justify-around gap-8">
                <FeatureIcon label="Años de Experiencia" value="10+" textColorClass={themeClasses.textSecondary} />
                <FeatureIcon label="Proyectos Entregados" value="250+" textColorClass={themeClasses.textSecondary} />
                <FeatureIcon label="Premios Creativos" value="14" textColorClass={themeClasses.textSecondary} />
                <FeatureIcon label="Calidad de Producción" value="6K" textColorClass={themeClasses.textSecondary} />
            </div>
        </div>

        {/* Story / ZigZag Section */}
        <section className={`py-24 ${themeClasses.bg}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6">
                {/* Block 1 */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-orange/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <img 
                            src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="Camera Lens Detail" 
                            className="rounded-xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                        />
                    </div>
                    <div>
                        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${themeClasses.textPrimary} font-serif`}>Más que Video, <br/>Estrategia Visual.</h2>
                        <p className={`text-lg ${themeClasses.textSecondary} mb-6 leading-relaxed font-sans`}>
                            En un mundo saturado de contenido, solo las historias auténticas sobreviven. No solo operamos cámaras; diseñamos narrativas visuales que se alinean con los objetivos comerciales de tu marca.
                        </p>
                        <ul className="space-y-4 mt-8 font-sans">
                            <li className="flex items-center">
                                <span className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-4 text-sm">01</span>
                                <span className={`font-medium ${themeClasses.textPrimary}`}>Guiones enfocados en retención de audiencia.</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-4 text-sm">02</span>
                                <span className={`font-medium ${themeClasses.textPrimary}`}>Equipos de cine digital (RED / ARRI / Sony).</span>
                            </li>
                            <li className="flex items-center">
                                <span className="w-8 h-8 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mr-4 text-sm">03</span>
                                <span className={`font-medium ${themeClasses.textPrimary}`}>Postproducción con color grading profesional.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Grid */}
        <section className={`py-24 ${themeClasses.bgAlt}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-brand-orange font-bold uppercase tracking-widest text-sm font-sans">Nuestros Servicios</span>
                    <h2 className={`text-3xl md:text-5xl font-bold ${themeClasses.textPrimary} mt-2 mb-6 font-serif`}>Soluciones Audiovisuales</h2>
                    <p className={`${themeClasses.textSecondary} font-sans`}>Cubrimos todas las necesidades de producción, desde corporativos internos hasta campañas publicitarias masivas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="Spot Publicitario"
                        description="Comerciales de alto nivel para TV y Digital. Creamos piezas memorables que impulsan ventas y posicionamiento."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                    <ServiceCard 
                        title="Video Corporativo"
                        description="Comunica la cultura, valores y procesos de tu empresa. Ideal para inducción, inversores o B2B."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                    <ServiceCard 
                        title="Cobertura de Eventos"
                        description="Aftermovies dinámicos de congresos, lanzamientos y activaciones de marca."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                    <ServiceCard 
                        title="Motion Graphics 2D/3D"
                        description="Explicación de productos complejos a través de animación. Infografías animadas y branding visual."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                    <ServiceCard 
                        title="Fotografía Publicitaria"
                        description="Producción fotográfica para e-commerce, campañas de moda, gastronomía y arquitectura."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                    <ServiceCard 
                        title="Drones & Aéreos"
                        description="Tomas aéreas espectaculares con pilotos certificados y drones de última generación (FPV y Cine)."
                        icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>}
                        cardClasses={themeClasses.card}
                        titleClasses={themeClasses.textPrimary}
                        textClasses={themeClasses.textSecondary}
                    />
                </div>
            </div>
        </section>
        
        {/* Process Section */}
        <section className={`py-24 ${themeClasses.bg}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <span className="text-brand-orange font-bold uppercase tracking-widest text-sm font-sans">Metodología</span>
                    <h2 className={`text-3xl md:text-5xl font-bold ${themeClasses.textPrimary} mt-2 mb-8 font-serif`}>Del Concepto <br/>a la Pantalla</h2>
                    <p className={`text-lg ${themeClasses.textSecondary} mb-8 font-sans`}>
                        Optimizamos cada etapa de la producción para garantizar entregas puntuales sin sacrificar la calidad artística.
                    </p>
                    <img 
                        src="https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Editing Suite"
                        className="rounded-xl shadow-2xl w-full object-cover"
                    />
                </div>
                <div className="space-y-4 pt-8">
                    <StepCard 
                        number="01" 
                        title="Pre-Producción" 
                        description="Desarrollo de guion, storyboard, scouting de locaciones y casting. Aquí se construye el éxito del proyecto."
                        titleClasses={themeClasses.textPrimary} 
                        descriptionClasses={themeClasses.textSecondary} 
                    />
                    <StepCard 
                        number="02" 
                        title="Rodaje" 
                        description="Ejecución técnica con directores, iluminadores y sonidistas expertos. Grabación en 4K/6K RAW."
                        titleClasses={themeClasses.textPrimary} 
                        descriptionClasses={themeClasses.textSecondary} 
                    />
                    <StepCard 
                        number="03" 
                        title="Post-Producción" 
                        description="Edición offline/online, diseño sonoro, corrección de color y motion graphics."
                        titleClasses={themeClasses.textPrimary} 
                        descriptionClasses={themeClasses.textSecondary} 
                    />
                    <StepCard 
                        number="04" 
                        title="Entrega Multiformato" 
                        description="Adaptación de piezas para todas las plataformas: Instagram Reels, YouTube, TV y Web."
                        titleClasses={themeClasses.textPrimary} 
                        descriptionClasses={themeClasses.textSecondary} 
                    />
                </div>
            </div>
        </section>

        {/* Works / Portfolio Teaser (Static Placeholder) */}
        <section className="relative py-24 bg-black">
             <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
             <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-white font-serif">Trabajos Recientes</h2>
                        <p className="text-gray-400 mt-2 font-sans">Una muestra de nuestra pasión.</p>
                    </div>
                    <button className="hidden md:block text-brand-orange font-bold hover:text-white transition-colors font-sans">Ver Portafolio Completo &rarr;</button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                     {/* Project 1 */}
                     <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                        <img src="https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 1" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                            <h3 className="text-xl font-bold text-white font-serif">Neon City Doc</h3>
                            <p className="text-brand-orange text-sm font-sans">Documental</p>
                        </div>
                     </div>
                     {/* Project 2 */}
                     <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                        <img src="https://images.pexels.com/photos/2910028/pexels-photo-2910028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 2" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                            <h3 className="text-xl font-bold text-white font-serif">Fashion Week</h3>
                            <p className="text-brand-orange text-sm font-sans">Cobertura Evento</p>
                        </div>
                     </div>
                     {/* Project 3 */}
                     <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                        <img src="https://images.pexels.com/photos/1595242/pexels-photo-1595242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Project 3" className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                            <h3 className="text-xl font-bold text-white font-serif">Tech Launch</h3>
                            <p className="text-brand-orange text-sm font-sans">Spot Publicitario</p>
                        </div>
                     </div>
                </div>
                <div className="mt-8 text-center md:hidden">
                    <button className="text-brand-orange font-bold hover:text-white transition-colors font-sans">Ver Portafolio Completo &rarr;</button>
                </div>
             </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-24 ${themeClasses.bgAlt}`}>
            <div className="w-full max-w-[1200px] mx-auto px-6 max-w-3xl">
                <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${themeClasses.textPrimary} font-serif`}>Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    <details className={`${themeClasses.card} p-6 rounded-xl cursor-pointer group shadow-sm`}>
                        <summary className={`font-semibold text-lg flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                            ¿Cuánto tiempo tarda un proyecto promedio?
                            <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>Un video corporativo estándar toma entre 2 a 4 semanas. Proyectos más complejos como documentales o comerciales con VFX pueden requerir de 6 a 8 semanas.</p>
                    </details>
                    <details className={`${themeClasses.card} p-6 rounded-xl cursor-pointer group shadow-sm`}>
                        <summary className={`font-semibold text-lg flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                            ¿Ustedes proveen los actores y locaciones?
                            <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>Sí. Nos encargamos de toda la logística de producción, incluyendo casting de talento, scouting de locaciones, permisos y catering.</p>
                    </details>
                    <details className={`${themeClasses.card} p-6 rounded-xl cursor-pointer group shadow-sm`}>
                        <summary className={`font-semibold text-lg flex justify-between items-center ${themeClasses.textPrimary} font-serif`}>
                            ¿Entregan los archivos editables?
                            <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className={`mt-4 ${themeClasses.textSecondary} font-sans`}>Normalmente entregamos los masters finales. La entrega de proyectos editables (XML, Premiere) y material crudo (RAW) se puede negociar como un adicional al presupuesto.</p>
                    </details>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className={`py-24 px-6 text-center ${themeClasses.bg}`}>
            <div className={`w-full max-w-[1200px] mx-auto`}>
                <div className={`max-w-4xl mx-auto p-12 rounded-3xl ${isDark ? 'bg-gradient-to-br from-brand-medium to-brand-dark border border-white/10' : 'bg-white shadow-xl border border-gray-100'}`}>
                    <h2 className={`text-4xl font-bold mb-6 ${themeClasses.textPrimary} font-serif`}>¿Listo para rodar?</h2>
                    <p className={`text-xl mb-10 ${themeClasses.textSecondary} max-w-2xl mx-auto font-sans`}>
                        Cuéntanos tu idea y te ayudaremos a transformarla en un guion técnico y una propuesta visual impactante.
                    </p>
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="px-12 py-5 bg-brand-orange text-white font-bold text-xl rounded-full transition-all duration-300 ease-in-out hover:bg-orange-600 hover:shadow-2xl hover:shadow-brand-orange/50 transform hover:-translate-y-1 font-sans"
                    >
                        Agendar Videollamada
                    </button>
                    <p className={`mt-6 text-sm ${themeClasses.textTertiary} font-sans`}>Respuesta garantizada en menos de 24 horas.</p>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};