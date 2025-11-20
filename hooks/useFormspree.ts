import { useState } from 'react';

interface UseFormspreeReturn {
    submit: (data: any) => Promise<void>;
    isSubmitting: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string | null;
    reset: () => void;
}

export const useFormspree = (): UseFormspreeReturn => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Leemos la llave desde el .env
    const formId = import.meta.env.VITE_FORMSPREE_ID;

    const submit = async (data: any) => {
        if (!formId || formId === 'PON_AQUI_TU_LLAVE') {
            console.error("Formspree Key no configurada en .env");
            setErrorMessage("Error de configuración del servidor. Intenta más tarde.");
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage(null);

        try {
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus('success');
            } else {
                const data = await response.json();
                // Capturamos errores específicos de Formspree si los hay
                if (Object.hasOwn(data, 'errors')) {
                    throw new Error(data.errors.map((error: any) => error.message).join(", "));
                }
                throw new Error("Error al enviar el formulario.");
            }
        } catch (error: any) {
            setStatus('error');
            setErrorMessage("Hubo un problema al enviar tu solicitud. Por favor escribe directamente a nuestro email.");
            console.error("Formspree Error:", error);
        }
    };

    const reset = () => {
        setStatus('idle');
        setErrorMessage(null);
    };

    return {
        submit,
        isSubmitting: status === 'submitting',
        isSuccess: status === 'success',
        isError: status === 'error',
        errorMessage,
        reset
    };
};