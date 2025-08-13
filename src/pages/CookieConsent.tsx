import { useState, useEffect } from "react";

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    // Función para obtener cookies por nombre
    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        return parts.length === 2 ? parts.pop()?.split(";").shift() : undefined;
    };

    // Guardar cookie con expiración
    const setCookie = (name: string, value: string, days: number) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    };

    useEffect(() => {
        if (!getCookie("cookieConsent")) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        setCookie("cookieConsent", "true", 180); // expira en 180 días
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="w-full fixed z-10 bottom-0  bg-gray-900 text-white p-4 shadow-lg flex flex-col items-center justify-center">
            <p className="text-sm mb-2">
                Usamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar, aceptas nuestro{" "}
                <a href="/politica-de-privacidad" className="underline">
                    uso de cookies
                </a>.
            </p>
            <button
                onClick={acceptCookies}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0"
            >
                Aceptar
            </button>
        </div>
    );
};

export default CookieConsent;


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
