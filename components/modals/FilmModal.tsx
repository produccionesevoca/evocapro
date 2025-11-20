import React, { useState, useEffect } from 'react';
import { useFormspree } from '../../hooks/useFormspree';

interface FilmModalProps {
    isOpen: boolean;
    onClose: () => void;
    isDark: boolean;
}

export const FilmModal: React.FC<FilmModalProps> = ({ isOpen, onClose, isDark }) => {
    const { submit, isSubmitting, isSuccess, isError, errorMessage, reset } = useFormspree();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Spot Publicitario',
        budget: '5k - 10k USD',
        details: ''
    });

    // Reiniciamos el formulario si se cierra o abre el modal
    useEffect(() => {
        if (isOpen) {
            reset();
            setFormData({
                name: '',
                email: '',
                projectType: 'Spot Publicitario',
                budget: '5k - 10k USD',
                details: ''
            });
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Enviamos el 'subject' para que sepas desde qué formulario llegó el correo
        submit({ ...formData, _subject: 'Nuevo Lead de Cine - Evoca PRO' });
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
                    {!isSuccess ? (
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
                                        name="name"
                                        type="text" 
                                        className={inputClasses} 
                                        placeholder="Tu nombre o el de tu marca"
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email de Contacto</label>
                                    <input 
                                        required 
                                        name="email"
                                        type="email" 
                                        className={inputClasses} 
                                        placeholder="contacto@marca.com"
                                        value={formData.email}
                                        onChange={e => setFormData({...formData, email: e.target.value})}
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClasses}>Tipo de Proyecto</label>
                                        <select 
                                            name="projectType"
                                            className={inputClasses}
                                            value={formData.projectType}
                                            onChange={e => setFormData({...formData, projectType: e.target.value})}
                                            disabled={isSubmitting}
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
                                            name="budget"
                                            className={inputClasses}
                                            value={formData.budget}
                                            onChange={e => setFormData({...formData, budget: e.target.value})}
                                            disabled={isSubmitting}
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
                                        name="details"
                                        rows={3} 
                                        className={inputClasses} 
                                        placeholder="Describe brevemente la idea, fecha de rodaje estimada, etc..."
                                        value={formData.details}
                                        onChange={e => setFormData({...formData, details: e.target.value})}
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                                
                                {/* Mensaje de Error */}
                                {isError && (
                                    <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-sans text-center animate-fadeIn">
                                        {errorMessage}
                                    </div>
                                )}

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full py-4 font-bold rounded-full shadow-lg font-sans uppercase tracking-wide transition-all duration-300 
                                        ${isSubmitting 
                                            ? 'bg-gray-500 cursor-not-allowed opacity-70' 
                                            : 'bg-brand-orange hover:bg-orange-600 hover:shadow-brand-orange/40 text-white'
                                        }`}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Propuesta'}
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-12 animate-fadeIn">
                            <div className="w-20 h-20 border-4 border-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
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