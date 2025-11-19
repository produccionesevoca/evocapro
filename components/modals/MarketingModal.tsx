import React, { useState, useEffect } from 'react';

interface MarketingModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
}

export const MarketingModal: React.FC<MarketingModalProps> = ({ isOpen, onClose, isDark }) => {
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