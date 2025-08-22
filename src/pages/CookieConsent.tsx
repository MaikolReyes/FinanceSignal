import { useState, useEffect } from "react";

// Declaración global para evitar errores de TypeScript
type GtagCommand = [string, ...unknown[]];

declare global {
    interface Window {
        dataLayer: GtagCommand[];
        gtag: (...args: GtagCommand) => void;
    }
}

export const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop()?.split(";").shift() : undefined;
    };

    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; Secure; SameSite=Strict`;
    };

    useEffect(() => {
        const loadThirdPartyScripts = () => {
            const loadScript = (src: string, async = true) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = async;
                document.head.appendChild(script);
            };

            // Google Tag Manager
            loadScript("https://www.googletagmanager.com/gtag/js?id=G-8JPR1MN0EH");

            window.dataLayer = window.dataLayer || [];
            window.gtag = (...args: GtagCommand) => {
                window.dataLayer.push(args);
            };

            window.gtag('js', new Date());

            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted'
            });

            window.gtag('config', 'G-8JPR1MN0EH');
            window.gtag('config', 'AW-16848723907');

            window.gtag('event', 'conversion', {
                'send_to': 'AW-16848723907/pJvXCO7b15saEMO_jOI-',
                'value': 1.0,
                'currency': 'ARS'
            });

            // TradingView Widget

            // Evento personalizado para otros scripts
            window.dispatchEvent(new CustomEvent('cookiesAccepted'));
        };

        if (!getCookie("cookieConsent")) {
            setShowBanner(true);
        } else {
            loadThirdPartyScripts();
        }
    }, []);

    const acceptCookies = () => {
        setCookie("cookieConsent", "true", 180);
        setShowBanner(false);

        // Repetimos la lógica de carga aquí para evitar dependencias en useEffect
        const loadScript = (src: string, async = true) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = async;
            document.head.appendChild(script);
        };

        loadScript("https://www.googletagmanager.com/gtag/js?id=G-8JPR1MN0EH");

        window.dataLayer = window.dataLayer || [];
        window.gtag = (...args: GtagCommand) => {
            window.dataLayer.push(args);
        };

        window.gtag('js', new Date());

        window.gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'granted'
        });

        window.gtag('config', 'G-8JPR1MN0EH');
        window.gtag('config', 'AW-16848723907');

        window.gtag('event', 'conversion', {
            'send_to': 'AW-16848723907/pJvXCO7b15saEMO_jOI-',
            'value': 1.0,
            'currency': 'ARS'
        });


        window.dispatchEvent(new CustomEvent('cookiesAccepted'));
    };

    if (!showBanner) return null;

    return (
        <div className="w-full fixed z-50 bottom-0 bg-gray-900 text-white p-4 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
                <p className="text-sm mb-2 md:mb-0 md:mr-4">
                    Usamos cookies para mejorar tu experiencia.
                    <a href="/politica-de-privacidad" className="underline ml-1">
                        Más información
                    </a>
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={acceptCookies}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
};



// import { useState, useEffect } from "react";

// const CookieConsent = () => {
//     const [showBanner, setShowBanner] = useState(false);

//     useEffect(() => {
//         const consent = localStorage.getItem("cookieConsent");
//         if (!consent) {
//             setShowBanner(true);
//         }
//     }, []);

//     const acceptCookies = () => {
//         localStorage.setItem("cookieConsent", "true");
//         setShowBanner(false);
//     };

//     return (
//         showBanner && (
//             <div className="fixed z-10 bottom-0 left-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
//                 <p className="text-sm mb-2">
//                     Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar, aceptas nuestro{" "}
//                     <a href="/politica-de-privacidad" className="underline">
//                         uso de cookies
//                     </a>.
//                 </p>
//                 <button
//                     onClick={acceptCookies}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0"
//                 >
//                     Aceptar
//                 </button>
//             </div>
//         )
//     );
// };

// export default CookieConsent;
